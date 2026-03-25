import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { adminApi } from '../api/admin';
import { getApiBase } from '../api/client';
import { moduleConfigs } from './moduleConfig';

function normalizeValue(field, value) {
  if (field.type === 'number') {
    return value === '' ? undefined : Number(value);
  }
  return value;
}

export default function CrudModulePage() {
  const { module } = useParams();
  const config = moduleConfigs[module];
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingId, setEditingId] = useState('');

  const initialForm = useMemo(() => {
    if (!config) return {};
    return config.fields.reduce((acc, field) => {
      if (field.name === 'status') {
        acc[field.name] = 'PUBLISHED';
      } else if (field.type === 'number') {
        acc[field.name] = '';
      } else {
        acc[field.name] = '';
      }
      return acc;
    }, {});
  }, [config]);

  const [form, setForm] = useState(initialForm);

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const response = await adminApi.listModule(module, 1, 100);
      setItems(response.data);
    } catch (err) {
      setError(err.message || 'Failed to load module data');
    } finally {
      setLoading(false);
    }
  }, [module]);

  useEffect(() => {
    if (!config) return;
    setForm(initialForm);
    setEditingId('');
    load();
  }, [module, config, initialForm, load]);

  const onUpload = async (fieldName, file) => {
    if (!file) return;
    try {
      const upload = await adminApi.uploadImage(file);
      setForm((prev) => ({ ...prev, [fieldName]: `${getApiBase().replace('/api', '')}${upload.fileUrl}` }));
    } catch (err) {
      setError(err.message || 'Upload failed');
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setSuccess('');

    const missingRequired = config.fields.find((field) => field.required && !form[field.name]);
    if (missingRequired) {
      setError(`${missingRequired.label} is required.`);
      return;
    }

    const payload = config.fields.reduce((acc, field) => {
      const value = normalizeValue(field, form[field.name]);
      if (value !== undefined && value !== '') {
        acc[field.name] = value;
      }
      return acc;
    }, {});

    setSaving(true);
    try {
      if (editingId) {
        await adminApi.updateModuleItem(module, editingId, payload);
        setSuccess('Record updated successfully.');
      } else {
        await adminApi.createModuleItem(module, payload);
        setSuccess('Record created successfully.');
      }
      setForm(initialForm);
      setEditingId('');
      await load();
    } catch (err) {
      setError(err.message || 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  const editItem = (item) => {
    const next = { ...initialForm };
    config.fields.forEach((field) => {
      next[field.name] = item[field.name] ?? (field.type === 'number' ? '' : '');
    });
    setForm(next);
    setEditingId(item.id);
  };

  const removeItem = async (id) => {
    if (!window.confirm('Delete this record?')) return;
    try {
      await adminApi.deleteModuleItem(module, id);
      setSuccess('Record deleted.');
      await load();
    } catch (err) {
      setError(err.message || 'Delete failed');
    }
  };

  if (!config) {
    return <p>Unknown module.</p>;
  }

  return (
    <section>
      <div className="admin-topbar">
        <h1>{config.title}</h1>
      </div>

      {loading ? <p>Loading...</p> : null}
      {error ? <p className="admin-error">{error}</p> : null}
      {success ? <p className="admin-success">{success}</p> : null}

      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              {config.listColumns.map((col) => (
                <th key={col}>{col}</th>
              ))}
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                {config.listColumns.map((col) => (
                  <td key={`${item.id}-${col}`}>{String(item[col] ?? '-')}</td>
                ))}
                <td>
                  <span className={`admin-status ${(item.status || '').toLowerCase() === 'published' ? 'published' : 'draft'}`}>
                    {item.status || 'DRAFT'}
                  </span>
                </td>
                <td>
                  <div className="admin-actions">
                    <button type="button" className="admin-btn secondary" onClick={() => editItem(item)}>
                      Edit
                    </button>
                    <button type="button" className="admin-btn danger" onClick={() => removeItem(item.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <form className="admin-form" onSubmit={onSubmit}>
        <h2>{editingId ? 'Edit Record' : 'Create New Record'}</h2>
        <div className="admin-form-grid">
          {config.fields.map((field) => (
            <div className="admin-field" key={field.name}>
              <label>{field.label}</label>
              {field.type === 'textarea' ? (
                <textarea
                  value={form[field.name] || ''}
                  onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
                />
              ) : field.type === 'select' ? (
                <select
                  value={form[field.name] || ''}
                  onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
                >
                  {(field.options || []).map((option) => (
                    <option value={option} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <>
                  <input
                    type={field.type === 'image' ? 'text' : field.type || 'text'}
                    value={form[field.name] || ''}
                    onChange={(e) => setForm((prev) => ({ ...prev, [field.name]: e.target.value }))}
                  />
                  {field.type === 'image' ? (
                    <input type="file" accept="image/*" onChange={(e) => onUpload(field.name, e.target.files?.[0])} />
                  ) : null}
                </>
              )}
            </div>
          ))}
        </div>

        <div className="admin-actions">
          <button className="admin-btn primary" type="submit" disabled={saving}>
            {saving ? 'Saving...' : editingId ? 'Update' : 'Create'}
          </button>
          {editingId ? (
            <button
              className="admin-btn secondary"
              type="button"
              onClick={() => {
                setEditingId('');
                setForm(initialForm);
              }}
            >
              Cancel Edit
            </button>
          ) : null}
        </div>
      </form>
    </section>
  );
}
