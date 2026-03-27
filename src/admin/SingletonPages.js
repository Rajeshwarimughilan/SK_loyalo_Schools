import { useEffect, useState } from 'react';
import { adminApi } from '../api/admin';

function splitLines(value) {
  if (!value) return '';
  return Array.isArray(value) ? value.join('\n') : String(value);
}

function toArray(multiline) {
  return multiline
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);
}

export function SiteSettingsPage() {
  const [form, setForm] = useState({
    schoolName: '',
    logoUrl: '',
    contactPhone: '',
    contactEmail: '',
    address: '',
    socialFacebook: '',
    socialInstagram: '',
    socialLinkedin: '',
    socialYoutube: '',
    footerTagline: '',
    menuText: '[]',
  });
  const [status, setStatus] = useState({ loading: true, saving: false, error: '', success: '' });

  useEffect(() => {
    adminApi
      .getSiteSettings()
      .then((data) => {
        setForm({
          schoolName: data?.schoolName || '',
          logoUrl: data?.logoUrl || '',
          contactPhone: data?.contactPhone || '',
          contactEmail: data?.contactEmail || '',
          address: data?.address || '',
          socialFacebook: data?.socialFacebook || '',
          socialInstagram: data?.socialInstagram || '',
          socialLinkedin: data?.socialLinkedin || '',
          socialYoutube: data?.socialYoutube || '',
          footerTagline: data?.footerTagline || '',
          menuText: JSON.stringify(data?.menu || [], null, 2),
        });
      })
      .catch((err) => setStatus((prev) => ({ ...prev, error: err.message || 'Failed to load settings' })))
      .finally(() => setStatus((prev) => ({ ...prev, loading: false })));
  }, []);

  const save = async (event) => {
    event.preventDefault();
    setStatus((prev) => ({ ...prev, saving: true, error: '', success: '' }));
    try {
      const menu = JSON.parse(form.menuText || '[]');
      const { menuText, ...siteSettingsFields } = form;
      await adminApi.updateSiteSettings({ ...siteSettingsFields, menu });
      setStatus((prev) => ({ ...prev, success: 'Site settings updated.' }));
    } catch (err) {
      setStatus((prev) => ({ ...prev, error: err.message || 'Save failed' }));
    } finally {
      setStatus((prev) => ({ ...prev, saving: false }));
    }
  };

  return (
    <section>
      <h1>Site Settings</h1>
      {status.loading ? <p>Loading...</p> : null}
      {status.error ? <p className="admin-error">{status.error}</p> : null}
      {status.success ? <p className="admin-success">{status.success}</p> : null}

      <form className="admin-form" onSubmit={save}>
        <div className="admin-form-grid">
          {[
            'schoolName',
            'logoUrl',
            'contactPhone',
            'contactEmail',
            'address',
            'socialFacebook',
            'socialInstagram',
            'socialLinkedin',
            'socialYoutube',
            'footerTagline',
          ].map((field) => (
            <div className="admin-field" key={field}>
              <label>{field}</label>
              <input
                value={form[field]}
                onChange={(e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))}
              />
            </div>
          ))}
        </div>

        <div className="admin-field">
          <label>Menu JSON</label>
          <textarea
            value={form.menuText}
            onChange={(e) => setForm((prev) => ({ ...prev, menuText: e.target.value }))}
          />
        </div>

        <button className="admin-btn primary" type="submit" disabled={status.saving}>
          {status.saving ? 'Saving...' : 'Save'}
        </button>
      </form>
    </section>
  );
}

export function AboutContentPage() {
  const [form, setForm] = useState({
    shortTitle: '',
    shortDescription: '',
    longTitle: '',
    longDescription: '',
    learningApproach: '',
    videoUrl: '',
    videoPosterUrl: '',
    curriculumStandards: '',
    teachingMethods: '',
  });
  const [status, setStatus] = useState({ loading: true, saving: false, error: '', success: '' });

  useEffect(() => {
    adminApi
      .getAbout()
      .then((data) => {
        if (!data) return;
        setForm({
          shortTitle: data.shortTitle || '',
          shortDescription: data.shortDescription || '',
          longTitle: data.longTitle || '',
          longDescription: data.longDescription || '',
          learningApproach: data.learningApproach || '',
          videoUrl: data.videoUrl || '',
          videoPosterUrl: data.videoPosterUrl || '',
          curriculumStandards: splitLines(data.curriculumStandards),
          teachingMethods: splitLines(data.teachingMethods),
        });
      })
      .catch((err) => setStatus((prev) => ({ ...prev, error: err.message || 'Failed to load about content' })))
      .finally(() => setStatus((prev) => ({ ...prev, loading: false })));
  }, []);

  const save = async (event) => {
    event.preventDefault();
    if (!form.shortTitle || !form.shortDescription || !form.longTitle || !form.longDescription || !form.learningApproach) {
      setStatus((prev) => ({ ...prev, error: 'Please fill all required fields.' }));
      return;
    }

    setStatus((prev) => ({ ...prev, saving: true, error: '', success: '' }));
    try {
      await adminApi.updateAbout({
        ...form,
        curriculumStandards: toArray(form.curriculumStandards),
        teachingMethods: toArray(form.teachingMethods),
      });
      setStatus((prev) => ({ ...prev, success: 'About content updated.' }));
    } catch (err) {
      setStatus((prev) => ({ ...prev, error: err.message || 'Save failed' }));
    } finally {
      setStatus((prev) => ({ ...prev, saving: false }));
    }
  };

  return (
    <section>
      <h1>About Content</h1>
      {status.loading ? <p>Loading...</p> : null}
      {status.error ? <p className="admin-error">{status.error}</p> : null}
      {status.success ? <p className="admin-success">{status.success}</p> : null}

      <form className="admin-form" onSubmit={save}>
        <div className="admin-form-grid">
          {['shortTitle', 'longTitle', 'videoUrl', 'videoPosterUrl'].map((field) => (
            <div className="admin-field" key={field}>
              <label>{field}</label>
              <input value={form[field]} onChange={(e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))} />
            </div>
          ))}
        </div>

        {['shortDescription', 'longDescription', 'learningApproach', 'curriculumStandards', 'teachingMethods'].map((field) => (
          <div className="admin-field" key={field}>
            <label>{field}</label>
            <textarea value={form[field]} onChange={(e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))} />
          </div>
        ))}

        <button className="admin-btn primary" type="submit" disabled={status.saving}>
          {status.saving ? 'Saving...' : 'Save'}
        </button>
      </form>
    </section>
  );
}

export function AdmissionsPage() {
  const [form, setForm] = useState({
    heading: '',
    description: '',
    processSteps: '',
    requirements: '',
    ctaLabel: '',
    ctaLink: '',
  });
  const [status, setStatus] = useState({ loading: true, saving: false, error: '', success: '' });

  useEffect(() => {
    adminApi
      .getAdmissions()
      .then((data) => {
        if (!data) return;
        setForm({
          heading: data.heading || '',
          description: data.description || '',
          processSteps: splitLines(data.processSteps),
          requirements: splitLines(data.requirements),
          ctaLabel: data.ctaLabel || '',
          ctaLink: data.ctaLink || '',
        });
      })
      .catch((err) => setStatus((prev) => ({ ...prev, error: err.message || 'Failed to load admissions' })))
      .finally(() => setStatus((prev) => ({ ...prev, loading: false })));
  }, []);

  const save = async (event) => {
    event.preventDefault();
    if (!form.heading || !form.description) {
      setStatus((prev) => ({ ...prev, error: 'Heading and description are required.' }));
      return;
    }

    setStatus((prev) => ({ ...prev, saving: true, error: '', success: '' }));
    try {
      await adminApi.updateAdmissions({
        ...form,
        processSteps: toArray(form.processSteps),
        requirements: toArray(form.requirements),
      });
      setStatus((prev) => ({ ...prev, success: 'Admissions updated.' }));
    } catch (err) {
      setStatus((prev) => ({ ...prev, error: err.message || 'Save failed' }));
    } finally {
      setStatus((prev) => ({ ...prev, saving: false }));
    }
  };

  return (
    <section>
      <h1>Admissions Info</h1>
      {status.loading ? <p>Loading...</p> : null}
      {status.error ? <p className="admin-error">{status.error}</p> : null}
      {status.success ? <p className="admin-success">{status.success}</p> : null}

      <form className="admin-form" onSubmit={save}>
        <div className="admin-field">
          <label>Heading</label>
          <input value={form.heading} onChange={(e) => setForm((prev) => ({ ...prev, heading: e.target.value }))} />
        </div>
        <div className="admin-field">
          <label>Description</label>
          <textarea value={form.description} onChange={(e) => setForm((prev) => ({ ...prev, description: e.target.value }))} />
        </div>
        <div className="admin-form-grid">
          <div className="admin-field">
            <label>CTA Label</label>
            <input value={form.ctaLabel} onChange={(e) => setForm((prev) => ({ ...prev, ctaLabel: e.target.value }))} />
          </div>
          <div className="admin-field">
            <label>CTA Link</label>
            <input value={form.ctaLink} onChange={(e) => setForm((prev) => ({ ...prev, ctaLink: e.target.value }))} />
          </div>
        </div>
        <div className="admin-field">
          <label>Process Steps (one per line)</label>
          <textarea value={form.processSteps} onChange={(e) => setForm((prev) => ({ ...prev, processSteps: e.target.value }))} />
        </div>
        <div className="admin-field">
          <label>Requirements (one per line)</label>
          <textarea value={form.requirements} onChange={(e) => setForm((prev) => ({ ...prev, requirements: e.target.value }))} />
        </div>

        <button className="admin-btn primary" type="submit" disabled={status.saving}>
          {status.saving ? 'Saving...' : 'Save'}
        </button>
      </form>
    </section>
  );
}
