import './Books.css';

const SUBJECTS = [
  {
    id: 'science',
    icon: '🔬',
    color: '#22c55e',
    colorBg: 'rgba(34,197,94,0.08)',
    name: 'Science',
    tagline: 'Explore • Experiment • Discover',
    overview:
      'Our Science curriculum spans Physics, Chemistry, and Biology across all grades. Students progress from foundational concepts — matter, energy, life systems — to advanced topics such as atomic structure, organic chemistry, and human physiology. Hands-on laboratory sessions accompany every unit.',
    objectives: [
      'Develop scientific thinking and the habit of questioning through inquiry',
      'Understand and apply core concepts in Physics, Chemistry, and Biology',
      'Design and conduct experiments, record observations, analyse results',
      'Appreciate the role of science in society, technology, and sustainable development',
    ],
    outcomes: [
      'Students can frame and test hypotheses independently',
      'Proficiency in using lab equipment safely and accurately',
      'Ability to interpret data, draw conclusion, and present findings',
      'Readiness for national-level science olympiads and entrance exams',
    ],
    ebooks: [
      { title: 'NCERT Science (Gr. 6-12)', publisher: 'NCERT', link: '#' },
      { title: 'Lakhmir Singh Physics & Chemistry', publisher: 'S.Chand', link: '#' },
      { title: 'Biology Alive (Cambridge)', publisher: 'Cambridge Press', link: '#' },
    ],
    standard: 'NCERT / CBSE + Cambridge supplementary',
  },
  {
    id: 'mathematics',
    icon: '📐',
    color: '#3b82f6',
    colorBg: 'rgba(59,130,246,0.08)',
    name: 'Mathematics',
    tagline: 'Think • Reason • Solve',
    overview:
      'Mathematics at Loyalo is taught with a problem-solving-first philosophy. From arithmetic and basic algebra in lower grades to calculus, probability, and matrices in senior years, every concept is grounded in real-world application. Regular mental maths sessions and competitive problem sets build speed and accuracy.',
    objectives: [
      'Build strong number sense and computational fluency from early grades',
      'Develop logical reasoning and structured proof-writing skills',
      'Apply mathematics to real-life contexts including finance and statistics',
      'Prepare students for competitive mathematics Olympiads (AMC, IOQM)',
    ],
    outcomes: [
      'Confident problem-solving across Algebra, Geometry, and Calculus',
      'High performance in CBSE board examinations and competitive exams',
      'Ability to model real-world problems using mathematical language',
      'Strong foundation for engineering, computer science, and economics streams',
    ],
    ebooks: [
      { title: 'NCERT Mathematics (Gr. 6–12)', publisher: 'NCERT', link: '#' },
      { title: 'RD Sharma Mathematics', publisher: 'Dhanpat Rai', link: '#' },
      { title: 'Mathematics for Class 11 & 12 (SL Loney)', publisher: 'Arihant', link: '#' },
    ],
    standard: 'NCERT / CBSE + Olympiad enrichment',
  },
  {
    id: 'social',
    icon: '🌍',
    color: '#f59e0b',
    colorBg: 'rgba(245,158,11,0.08)',
    name: 'Social Studies',
    tagline: 'Know • Connect • Act',
    overview:
      'Social Studies integrates History, Geography, Civics, and Economics into a cohesive understanding of the world. Students journey through ancient civilisations to modern geopolitics, study physical and human geography, examine democratic institutions, and build basic economic literacy — all framed within Indian and global contexts.',
    objectives: [
      'Understand India\' historical development and its place in world history',
      'Analyse physical, cultural, and economic geography at local and global scales',
      'Develop civic awareness and an understanding of democratic governance',
      'Build critical thinking skills through map work, document analysis, and debate',
    ],
    outcomes: [
      'Comprehensive awareness of Indian history, culture, and constitutional values',
      'Proficiency in reading and interpreting maps, graphs, and data tables',
      'Ability to think critically about socio-political and economic issues',
      'Readiness for UPSC, state-level competitive exams, and social-science Olympiads',
    ],
    ebooks: [
      { title: 'NCERT History, Geography & Civics (Gr. 6–10)', publisher: 'NCERT', link: '#' },
      { title: 'Oxford School Atlas', publisher: 'Oxford University Press', link: '#' },
      { title: 'India & The Contemporary World (CBSE)', publisher: 'NCERT', link: '#' },
    ],
    standard: 'NCERT / CBSE',
  },
  {
    id: 'gk',
    icon: '💡',
    color: '#8b5cf6',
    colorBg: 'rgba(139,92,246,0.08)',
    name: 'General Knowledge & Value Education',
    tagline: 'Aware • Informed • Grounded',
    overview:
      'GK & Value Education is woven into every grade at Loyalo. GK sessions cover current affairs, world records, science news, and cultural awareness. Value Education draws from diverse philosophical and religious traditions to instil honesty, empathy, environmental responsibility, and service leadership.',
    objectives: [
      'Keep students informed about national and international current affairs',
      'Cultivate core values — integrity, empathy, resilience, and service',
      'Encourage environmental stewardship and responsible citizenship',
      'Develop cultural sensitivity and respect for diversity',
    ],
    outcomes: [
      'Students can engage confidently in discussions on current events',
      'Demonstrated application of values in daily school and community life',
      'Environmental awareness reflected in school sustainability initiatives',
      'Recognised character through school awards and community service records',
    ],
    ebooks: [
      { title: 'Manorama Year Book (Annual)', publisher: 'Manorama', link: '#' },
      { title: 'Moral Science & Value Education', publisher: 'Loyalo Internal', link: '#' },
      { title: 'Living Values Education (LVEP)', publisher: 'LVEP Global', link: '#' },
    ],
    standard: 'School-designed curriculum + LVEP framework',
  },
  {
    id: 'commskills',
    icon: '🗣️',
    color: '#ff6b3d',
    colorBg: 'rgba(255,107,61,0.08)',
    name: 'Communication Skills',
    tagline: 'Listen • Speak • Lead',
    overview:
      'Communication Skills is taught as a dedicated subject from Grade 1, covering spoken English, public speaking, reading comprehension, creative writing, group discussions, and debate. Students are equipped with the confidence and clarity to express themselves in academic, professional, and social settings.',
    objectives: [
      'Develop strong verbal and written communication skills in English',
      'Build public speaking confidence through regular presentations and debates',
      'Improve reading fluency, comprehension, and critical analysis of texts',
      'Train active listening and effective interpersonal communication',
    ],
    outcomes: [
      'Fluent, confident speakers capable of leading class and public presentations',
      'Strong essay and creative writing skills for academic and competitive use',
      'High performance in elocution, debate, and MUN competitions',
      'Communication readiness for college interviews and professional environments',
    ],
    ebooks: [
      { title: 'Oxford English Grammar Course', publisher: 'Oxford University Press', link: '#' },
      { title: 'Wren & Martin High School Grammar', publisher: 'S.Chand', link: '#' },
      { title: 'Speech & Communication (Loyalo Workbook)', publisher: 'Loyalo Internal', link: '#' },
    ],
    standard: 'Loyalo-designed + British Council framework',
  },
];

const DIGITAL = [
  { icon: '📱', label: 'DIKSHA App', desc: 'NCERT\'s official digital learning platform for all CBSE subjects with interactive e-books, QR codes, and video lessons.' },
  { icon: '🖥️', label: 'Google Classroom', desc: 'Each class has a dedicated Google Classroom space for assignments, resources, live announcements, and teacher feedback.' },
  { icon: '📖', label: 'iDream Education', desc: 'Vernacular digital content covering the full CBSE curriculum — accessible even in low-connectivity environments.' },
  { icon: '🎥', label: 'Khan Academy', desc: 'Supplementary video lessons and practice exercises in Mathematics and Science for self-paced learning.' },
];

const STANDARDS = [
  { label: 'Board', value: 'CBSE (Central Board of Secondary Education)' },
  { label: 'Affiliation No.', value: '1234567 (Dummy)' },
  { label: 'Medium', value: 'English (with Malayalam & Hindi as second languages)' },
  { label: 'Classes', value: 'Pre-Primary to Grade XII' },
  { label: 'Academic Year', value: 'June – March' },
  { label: 'Assessment', value: 'Continuous & Comprehensive Evaluation (CCE) + Term Exams' },
];

export default function Books() {
  return (
    <div className="books-page">
      <div className="books-hero">
        <div className="books-hero-glow" aria-hidden="true" />
        <div className="books-hero-content">
          <p className="bk-eyebrow">Loyalo School</p>
          <h1 className="bk-title">Books &amp; E-Books</h1>
          <p className="bk-subtitle">
            Our full curriculum — subjects, syllabi, learning objectives, expected outcomes, and
            the digital resources that power every Loyaloan's learning journey.
          </p>
          <div className="bk-hero-chips">
            <span>📚 {SUBJECTS.length} Core Subjects</span>
            <span>💻 {DIGITAL.length} Digital Platforms</span>
            <span>🏛️ CBSE Academic Framework</span>
          </div>
        </div>
      </div>

      <div className="bk-wrap">
        <div className="bk-layout">
          <aside className="bk-contents" aria-label="Subject index">
            <p className="bk-contents-title">Curriculum Index</p>
            <ul>
              {SUBJECTS.map((subj) => (
                <li key={subj.id}>
                  <a href={`#${subj.id}`}>
                    <span>{subj.icon}</span>
                    {subj.name}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <section className="bk-curriculum" aria-label="Academic subjects">
            <div className="bk-section-header">
              <p className="bk-section-tag">Subjects &amp; Curriculum</p>
              <h2 className="bk-section-title">Academic Subjects</h2>
              <p className="bk-section-sub">
                Each subject below includes syllabus context, learning objectives, expected outcomes,
                and core e-book references in a structured academic format.
              </p>
            </div>

            {SUBJECTS.map((subj) => (
              <article
                id={subj.id}
                key={subj.id}
                className="bk-subject"
                style={{ '--subj-color': subj.color }}
              >
                <header className="bk-subject-head">
                  <div>
                    <p className="bk-subject-tagline">{subj.tagline}</p>
                    <h3>
                      <span>{subj.icon}</span>
                      {subj.name}
                    </h3>
                  </div>
                  <p className="bk-subject-standard">{subj.standard}</p>
                </header>

                <p className="bk-subject-overview">{subj.overview}</p>

                <div className="bk-subject-columns">
                  <section>
                    <h4>Learning Objectives</h4>
                    <ul className="bk-list">
                      {subj.objectives.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>

                  <section>
                    <h4>Expected Outcomes</h4>
                    <ul className="bk-list bk-list-outcomes">
                      {subj.outcomes.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </section>
                </div>

                <div className="bk-resource-table-wrap">
                  <h4>Prescribed E-Book References</h4>
                  <table className="bk-resource-table">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Publisher</th>
                        <th>Access</th>
                      </tr>
                    </thead>
                    <tbody>
                      {subj.ebooks.map((ebook, index) => (
                        <tr key={index}>
                          <td>{ebook.title}</td>
                          <td>{ebook.publisher}</td>
                          <td>
                            <a href={ebook.link} target="_blank" rel="noopener noreferrer">
                              Open
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            ))}
          </section>
        </div>

        <div className="bk-digital-section">
          <div className="bk-section-header">
            <p className="bk-section-tag">Digital Learning</p>
            <h2 className="bk-section-title">Platforms &amp; Tools</h2>
            <p className="bk-section-sub">
              Every Loyaloan has access to a curated digital ecosystem that supports classroom,
              homework, and revision workflows.
            </p>
          </div>

          <div className="bk-digital-list">
            {DIGITAL.map((d) => (
              <article key={d.label} className="bk-digital-row">
                <span className="bk-digital-icon">{d.icon}</span>
                <div>
                  <h3 className="bk-digital-name">{d.label}</h3>
                  <p className="bk-digital-desc">{d.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="bk-standards-section">
          <div className="bk-section-header">
            <p className="bk-section-tag">Accreditation</p>
            <h2 className="bk-section-title">Academic Standards</h2>
          </div>

          <div className="bk-standards-grid" role="list">
            {STANDARDS.map((s) => (
              <div key={s.label} className="bk-standard-row" role="listitem">
                <span className="bk-std-label">{s.label}</span>
                <span className="bk-std-value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
