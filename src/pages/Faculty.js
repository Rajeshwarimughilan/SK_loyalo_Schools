import { useState } from 'react';
import './Faculty.css';

const DEPARTMENTS = [
  'All',
  'Science',
  'Mathematics',
  'Languages',
  'Social Studies',
  'Computer Science',
  'Arts & PE',
];

const FACULTY = [
  /* ── Science ────────────────────────────────── */
  {
    id: 1,
    name: 'Dr. Meena Krishnamurthy',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces',
    designation: 'Head of Department – Science',
    department: 'Science',
    expertise: 'Organic Chemistry & Biochemistry',
    qualification: 'Ph.D. Chemistry – IIT Madras',
    experience: '18 Years',
    email: 'meena.k@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  {
    id: 2,
    name: 'Mr. Samuel George',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=faces',
    designation: 'Senior Physics Teacher',
    department: 'Science',
    expertise: 'Applied Physics & Electronics',
    qualification: 'M.Sc. Physics – University of Kerala',
    experience: '12 Years',
    email: 'samuel.g@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  {
    id: 3,
    name: 'Ms. Divya Suresh',
    photo: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=faces',
    designation: 'Biology Teacher',
    department: 'Science',
    expertise: 'Cell Biology & Genetics',
    qualification: 'M.Sc. Biotechnology – Cochin University',
    experience: '8 Years',
    email: 'divya.s@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  /* ── Mathematics ─────────────────────────────── */
  {
    id: 4,
    name: 'Mr. Rajesh Pillai',
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=faces',
    designation: 'Head of Department – Mathematics',
    department: 'Mathematics',
    expertise: 'Calculus, Statistics & Number Theory',
    qualification: 'M.Sc. Mathematics – Mahatma Gandhi University',
    experience: '20 Years',
    email: 'rajesh.p@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  {
    id: 5,
    name: 'Ms. Anitha Thomas',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=faces',
    designation: 'Mathematics Teacher (Gr. 6–9)',
    department: 'Mathematics',
    expertise: 'Algebra, Geometry & Problem Solving',
    qualification: 'B.Ed. Mathematics – Calicut University',
    experience: '9 Years',
    email: 'anitha.t@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  /* ── Languages ───────────────────────────────── */
  {
    id: 6,
    name: 'Ms. Preethi Varghese',
    photo: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&h=400&fit=crop&crop=faces',
    designation: 'Head of Department – Languages',
    department: 'Languages',
    expertise: 'English Literature & Creative Writing',
    qualification: 'M.A. English Literature – University of Mysore',
    experience: '14 Years',
    email: 'preethi.v@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  {
    id: 7,
    name: 'Mr. Arun Kumar',
    photo: 'https://images.unsplash.com/photo-1543965170-e399ce845282?w=400&h=400&fit=crop&crop=faces',
    designation: 'Hindi & Malayalam Teacher',
    department: 'Languages',
    expertise: 'Hindi Literature & Translation Studies',
    qualification: 'M.A. Hindi – Mahatma Gandhi Hindi University',
    experience: '11 Years',
    email: 'arun.k@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  /* ── Social Studies ──────────────────────────── */
  {
    id: 8,
    name: 'Ms. Nisha Babu',
    photo: 'https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=400&h=400&fit=crop&crop=faces',
    designation: 'Head of Department – Social Studies',
    department: 'Social Studies',
    expertise: 'Indian History & Civics',
    qualification: 'M.A. History – Jawaharlal Nehru University',
    experience: '16 Years',
    email: 'nisha.b@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  {
    id: 9,
    name: 'Mr. Joseph Mathew',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces',
    designation: 'Geography & Economics Teacher',
    department: 'Social Studies',
    expertise: 'Economic Geography & Development Studies',
    qualification: 'M.A. Geography – Kannur University',
    experience: '10 Years',
    email: 'joseph.m@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  /* ── Computer Science ────────────────────────── */
  {
    id: 10,
    name: 'Mr. Vishnu Prasad',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=faces',
    designation: 'Head of Department – Computer Science',
    department: 'Computer Science',
    expertise: 'Programming, AI & Robotics',
    qualification: 'M.Tech CS – NIT Calicut',
    experience: '7 Years',
    email: 'vishnu.p@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  {
    id: 11,
    name: 'Ms. Anju Rajan',
    photo: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop&crop=faces',
    designation: 'Computer Science Teacher',
    department: 'Computer Science',
    expertise: 'Web Development & Cybersecurity',
    qualification: 'B.Tech IT – APJ Abdul Kalam University',
    experience: '5 Years',
    email: 'anju.r@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  /* ── Arts & PE ───────────────────────────────── */
  {
    id: 12,
    name: 'Mr. Kiran Raj',
    photo: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=400&h=400&fit=crop&crop=faces',
    designation: 'Physical Education & Sports Coach',
    department: 'Arts & PE',
    expertise: 'Athletics, Team Sports & Yoga',
    qualification: 'B.P.Ed – Lakshmibai National University',
    experience: '13 Years',
    email: 'kiran.r@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
  {
    id: 13,
    name: 'Ms. Sreelakshmi Nair',
    photo: 'https://images.unsplash.com/photo-1625631799355-073ebc49e6dc?w=400&h=400&fit=crop&crop=faces',
    designation: 'Fine Arts & Music Teacher',
    department: 'Arts & PE',
    expertise: 'Classical Painting & Carnatic Music',
    qualification: 'B.F.A – Government College of Fine Arts, Thrissur',
    experience: '9 Years',
    email: 'sreelakshmi.n@loyalo.edu',
    linkedin: 'https://linkedin.com',
    drive: 'https://drive.google.com',
  },
];

export default function Faculty() {
  const [activeDept, setActiveDept] = useState('All');
  const [visible, setVisible] = useState(true);

  const filtered =
    activeDept === 'All'
      ? FACULTY
      : FACULTY.filter((f) => f.department === activeDept);

  const handleFilter = (dept) => {
    if (dept === activeDept) return;
    setVisible(false);
    setTimeout(() => {
      setActiveDept(dept);
      setVisible(true);
    }, 160);
  };

  return (
    <div className="faculty-page">
      {/* ── Hero ────────────────────────────────── */}
      <div className="faculty-hero">
        <div className="faculty-hero-glow" aria-hidden="true" />
        <div className="faculty-hero-content">
          <p className="fac-eyebrow">Loyalo School</p>
          <h1 className="fac-title">Faculty &amp; Staff</h1>
          <p className="fac-subtitle">
            Meet the dedicated educators who inspire, challenge, and nurture every Loyaloan to reach
            their full potential.
          </p>
          <div className="fac-hero-chips">
            <span>🎓 {FACULTY.length} Educators</span>
            <span>📚 {DEPARTMENTS.length - 1} Departments</span>
            <span>⭐ 250+ Combined Years of Experience</span>
          </div>
        </div>
      </div>

      {/* ── Filter ──────────────────────────────── */}
      <div className="fac-filter-bar">
        <div className="fac-filter-inner">
          {DEPARTMENTS.map((d) => (
            <button
              key={d}
              className={`fac-pill${activeDept === d ? ' is-active' : ''}`}
              onClick={() => handleFilter(d)}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ────────────────────────────────── */}
      <div className="fac-wrap">
        <div className={`fac-grid${visible ? ' is-visible' : ' is-hidden'}`}>
          {filtered.map((person) => (
            <article key={person.id} className="fac-card">
              {/* Photo col */}
              <div className="fac-photo-col">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="fac-photo"
                  loading="lazy"
                />
                <span className="fac-dept-tag">{person.department}</span>
              </div>

              {/* Info col */}
              <div className="fac-info-col">
                <div className="fac-info-top">
                  <h3 className="fac-name">{person.name}</h3>
                  <p className="fac-designation">{person.designation}</p>
                  <div className="fac-tags">
                    <span className="fac-tag exp">🏅 {person.experience}</span>
                    <span className="fac-tag qual">🎓 {person.qualification}</span>
                  </div>
                </div>

                <div className="fac-expertise">
                  <p className="fac-expertise-label">Area of Expertise</p>
                  <p className="fac-expertise-value">{person.expertise}</p>
                </div>

                <div className="fac-actions">
                  <a
                    href={`mailto:${person.email}`}
                    className="fac-action-btn email"
                    title={`Email ${person.name}`}
                    aria-label={`Email ${person.name}`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2"/>
                      <path d="m22 7-10 7L2 7"/>
                    </svg>
                    Email
                  </a>
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fac-action-btn linkedin"
                    title="LinkedIn Profile"
                    aria-label={`${person.name} LinkedIn`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                    LinkedIn
                  </a>
                  <a
                    href={person.drive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fac-action-btn drive"
                    title="Resource Drive"
                    aria-label={`${person.name} resource folder`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                    Resources
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
