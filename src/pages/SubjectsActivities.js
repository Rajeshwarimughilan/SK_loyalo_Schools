import './PageLayout.css';

const subjects = [
  {
    name: 'Science',
    overview: 'Hands-on experiments, observation logs, and design challenges.',
    outcomes: 'Inquiry mindset, data literacy, responsible use of technology.',
  },
  {
    name: 'Mathematics',
    overview: 'Concept-first math with visual models, games, and problem labs.',
    outcomes: 'Logical reasoning, real-world application, and perseverance.',
  },
  {
    name: 'Social Studies',
    overview: 'Community projects, heritage walks, and civic discourse.',
    outcomes: 'Cultural awareness, collaboration, and responsible citizenship.',
  },
  {
    name: 'General Knowledge & Value Education',
    overview: 'Ethics dialogues, current affairs circles, gratitude practice.',
    outcomes: 'Empathy, perspective-taking, and ethical decision-making.',
  },
  {
    name: 'Communication Skills',
    overview: 'Public speaking, storytelling, media literacy, and debate.',
    outcomes: 'Confident expression, audience awareness, and active listening.',
  },
];

const activities = [
  {
    title: 'Chess',
    purpose: 'Strategic thinking and patience.',
    benefit: 'Improves concentration and decision-making speed.',
  },
  {
    title: 'Horse Riding',
    purpose: 'Balance, discipline, and trust-building.',
    benefit: 'Develops core strength and respect for responsibility.',
  },
  {
    title: 'Robotics',
    purpose: 'Design thinking, coding, and problem solving.',
    benefit: 'Encourages creativity and teamwork for real-world challenges.',
  },
  {
    title: 'Swimming',
    purpose: 'Physical fitness and resilience.',
    benefit: 'Boosts endurance, safety skills, and confidence.',
  },
];

function SubjectsActivities() {
  return (
    <section className="page-shell">
      <div className="section">
        <div className="section-head">
          <p className="eyebrow">Subjects</p>
          <h2>Academic subjects with clear outcomes.</h2>
        </div>
        <div className="card-grid">
          {subjects.map((subject) => (
            <div key={subject.name} className="card">
              <h3>{subject.name}</h3>
              <p><strong>Syllabus: </strong>{subject.overview}</p>
              <p><strong>Outcomes: </strong>{subject.outcomes}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="section alt">
        <div className="section-head">
          <p className="eyebrow">Student activities</p>
          <h2>Skill-based programs that grow body and mind.</h2>
        </div>
        <div className="card-grid">
          {activities.map((activity) => (
            <div key={activity.title} className="card highlight">
              <h3>{activity.title}</h3>
              <p><strong>Purpose: </strong>{activity.purpose}</p>
              <p><strong>Benefits: </strong>{activity.benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SubjectsActivities;
