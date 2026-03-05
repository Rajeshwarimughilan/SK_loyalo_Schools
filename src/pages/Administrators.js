import './Administrators.css';

const LEADERSHIP = [
  {
    id: 1,
    name: 'Rev. Fr. Thomas Mathew',
    photo: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?w=400&h=400&fit=crop&crop=faces',
    role: 'School Director',
    tier: 'leadership',
    qualification: 'Ph.D. Educational Management – Loyola University, Chicago',
    experience: '28 Years',
    email: 'director@loyalo.edu',
    phone: '+91 90001 00001',
    linkedin: 'https://linkedin.com',
    message:
      'Education at Loyalo is not merely the transfer of knowledge — it is the formation of conscience, character, and compassion. We commit ourselves every day to raising young men and women who lead with integrity.',
  },
  {
    id: 2,
    name: 'Mrs. Leena Augustine',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=faces',
    role: 'Principal',
    tier: 'leadership',
    qualification: 'M.Ed., M.A. Psychology – Calicut University',
    experience: '22 Years',
    email: 'principal@loyalo.edu',
    phone: '+91 90001 00002',
    linkedin: 'https://linkedin.com',
    message:
      'At Loyalo, we believe every child carries within them a unique spark. Our role as educators and administrators is to fan that flame — providing the environment, the encouragement, and the excellence they deserve.',
  },
  {
    id: 3,
    name: 'Mr. Sijo Varghese',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop&crop=faces',
    role: 'Vice Principal',
    tier: 'leadership',
    qualification: 'M.Ed. – Mahatma Gandhi University',
    experience: '17 Years',
    email: 'vp@loyalo.edu',
    phone: '+91 90001 00003',
    linkedin: 'https://linkedin.com',
    message:
      'Student welfare is at the heart of everything we do. I am committed to ensuring that every Loyaloan feels safe, valued, included, and inspired to grow both academically and as a human being.',
  },
];

const ADMIN_STAFF = [
  {
    id: 4,
    name: 'Ms. Bindhu Nair',
    photo: 'https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=400&h=400&fit=crop&crop=faces',
    role: 'Academic Coordinator',
    dept: 'Academic Affairs',
    qualification: 'M.Sc. Education – IGNOU',
    experience: '10 Years',
    email: 'academic@loyalo.edu',
    phone: '+91 90001 00010',
  },
  {
    id: 5,
    name: 'Mr. Suresh Kumar',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces',
    role: 'Administrative Officer',
    dept: 'Administration',
    qualification: 'MBA – Bharathiar University',
    experience: '14 Years',
    email: 'admin@loyalo.edu',
    phone: '+91 90001 00011',
  },
  {
    id: 6,
    name: 'Ms. Rekha Pillai',
    photo: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop&crop=faces',
    role: 'Admission Counsellor',
    dept: 'Admissions',
    qualification: 'M.A. Psychology – University of Kerala',
    experience: '8 Years',
    email: 'admissions@loyalo.edu',
    phone: '+91 90001 00012',
  },
  {
    id: 7,
    name: 'Mr. Binu Thomas',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces',
    role: 'Finance & Accounts Manager',
    dept: 'Finance',
    qualification: 'CA Inter, B.Com – Calicut University',
    experience: '12 Years',
    email: 'finance@loyalo.edu',
    phone: '+91 90001 00013',
  },
  {
    id: 8,
    name: 'Ms. Deepa Chandran',
    photo: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=400&h=400&fit=crop&crop=faces',
    role: 'Student Affairs Officer',
    dept: 'Student Welfare',
    qualification: 'MSW – Rajagiri College of Social Sciences',
    experience: '9 Years',
    email: 'studentaffairs@loyalo.edu',
    phone: '+91 90001 00014',
  },
  {
    id: 9,
    name: 'Mr. Anil Varma',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
    role: 'IT & Infrastructure Manager',
    dept: 'Technology',
    qualification: 'B.Tech CS – APJ Abdul Kalam University',
    experience: '7 Years',
    email: 'it@loyalo.edu',
    phone: '+91 90001 00015',
  },
];

export default function Administrators() {
  return (
    <div className="admin-page">
      {/* ── Hero ────────────────────────────────── */}
      <div className="admin-hero">
        <div className="admin-hero-glow" aria-hidden="true" />
        <div className="admin-hero-content">
          <p className="adm-eyebrow">Loyalo School</p>
          <h1 className="adm-title">Administrators</h1>
          <p className="adm-subtitle">
            The visionary leadership and dedicated administrative team steering Loyalo towards
            excellence every single day.
          </p>
          <div className="adm-hero-chips">
            <span>👤 {LEADERSHIP.length} Senior Leaders</span>
            <span>🏢 {ADMIN_STAFF.length} Admin Officers</span>
            <span>🌟 Excellence in Governance</span>
          </div>
        </div>
      </div>

      {/* ── Leadership Section ───────────────────── */}
      <div className="adm-section-wrap">
        <div className="adm-section-header">
          <p className="adm-section-tag">Executive</p>
          <h2 className="adm-section-title">School Leadership</h2>
          <p className="adm-section-sub">
            The principal architects of the Loyalo vision — guiding policy, culture, and
            educational excellence.
          </p>
        </div>

        <div className="leadership-grid">
          {LEADERSHIP.map((person) => (
            <article key={person.id} className="leader-card">
              <div className="leader-photo-wrap">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="leader-photo"
                  loading="lazy"
                />
                <div className="leader-photo-accent" aria-hidden="true" />
              </div>

              <div className="leader-body">
                <div className="leader-identity">
                  <span className="leader-role-badge">{person.role}</span>
                  <h3 className="leader-name">{person.name}</h3>
                  <div className="leader-meta">
                    <span className="leader-chip qual">🎓 {person.qualification}</span>
                    <span className="leader-chip exp">🏅 {person.experience} Experience</span>
                  </div>
                </div>

                <blockquote className="leader-message">
                  <span className="leader-quote-mark" aria-hidden="true">"</span>
                  <p>{person.message}</p>
                </blockquote>

                <div className="leader-contacts">
                  <a href={`mailto:${person.email}`} className="leader-contact-item" title="Email">
                    <svg className="lc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-10 7L2 7"/>
                    </svg>
                    <span>{person.email}</span>
                  </a>
                  <a href={`tel:${person.phone.replace(/\s/g, '')}`} className="leader-contact-item" title="Phone">
                    <svg className="lc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.38 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>{person.phone}</span>
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leader-contact-item linkedin-link"
                    title="LinkedIn"
                  >
                    <svg className="lc-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Administrative Staff Section ─────────── */}
      <div className="adm-section-wrap adm-staff-section">
        <div className="adm-section-header">
          <p className="adm-section-tag">Operations</p>
          <h2 className="adm-section-title">Administrative Staff</h2>
          <p className="adm-section-sub">
            The professionals who keep Loyalo running smoothly — from academics to finance to
            student welfare.
          </p>
        </div>

        <div className="admin-staff-grid">
          {ADMIN_STAFF.map((person) => (
            <article key={person.id} className="staff-card">
              <div className="staff-card-top">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="staff-avatar"
                  loading="lazy"
                />
                <div className="staff-dept-ring" aria-hidden="true" />
                <span className="staff-dept-label">{person.dept}</span>
              </div>

              <div className="staff-card-body">
                <h3 className="staff-name">{person.name}</h3>
                <p className="staff-role">{person.role}</p>

                <div className="staff-detail-list">
                  <div className="staff-detail">
                    <span className="staff-detail-icon">🎓</span>
                    <span>{person.qualification}</span>
                  </div>
                  <div className="staff-detail">
                    <span className="staff-detail-icon">🏅</span>
                    <span>{person.experience} Experience</span>
                  </div>
                </div>

                <div className="staff-contacts">
                  <a
                    href={`mailto:${person.email}`}
                    className="staff-contact-btn"
                    title={`Email ${person.name}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-10 7L2 7"/>
                    </svg>
                    Email
                  </a>
                  <a
                    href={`tel:${person.phone.replace(/\s/g, '')}`}
                    className="staff-contact-btn"
                    title={`Call ${person.name}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.61 4.38 2 2 0 0 1 3.58 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Call
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
