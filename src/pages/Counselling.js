import './PageLayout.css';
import './Counselling.css';

const peopleSkills = [
  'Self-awareness and empathy',
  'Healthy self-esteem',
  'Interpersonal relationship building',
  'Effective communication',
  'Assertiveness with respect',
  'Coping with stress',
  'Managing emotions',
  'Decision making',
  'Problem solving',
];

const studentNeedsPersonal = [
  'Help learners recognize and nurture their strengths, values, and identity.',
  'Support children in navigating loneliness, bullying, peer pressure, and social comparisons.',
  'Guide students through emotional setbacks, fear of failure, and confidence gaps.',
  'Improve interpersonal communication and healthy boundary-setting.',
];

const studentNeedsAcademic = [
  'Address overwhelm related to workload, exams, and concentration difficulties.',
  'Build practical routines for study planning, sleep, and balanced effort.',
  'Support students with learning difficulties through coordination with teachers and families.',
  'Develop resilient responses to academic setbacks and classroom pressure.',
];

const parentSupport = [
  'Importance of quality time and emotionally available parenting.',
  'Active listening, non-judgmental communication, and behavior observation.',
  'Accepting children with both strengths and areas of growth.',
  'Balanced parenting styles: nurturing without over-control.',
  'Understanding the impact of excessive pressure on child wellbeing.',
  'Removing stigma around counselling and seeking help early.',
];

const staffSupport = [
  'Understanding that every child is unique and may need different support approaches.',
  'Building trust and meaningful connection with students.',
  'Recognizing early signs that a child is distressed or distracted.',
  'Identifying possible learning challenges and working with specialists when needed.',
  'Creating classroom strategies that bring out each student’s strengths.',
  'Collaborative care model among counsellor, teachers, school staff, and parents.',
];

function Counselling() {
  return (
    <section className="page-shell counselling-page">
      <section className="counselling-hero">
        <img
          src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1800&h=700&fit=crop"
          alt="School counselling support"
        />
        <div className="counselling-hero-overlay">
          <h1>Counselling</h1>
          <p>Safe conversations. Skilled guidance. Stronger learners.</p>
        </div>
      </section>

      <section className="counselling-intro">
        <p>
          Feeling left out? Struggling with friendship worries? Finding home situations hard to carry?
          Feeling overloaded with academics? Some phases are difficult to sort alone, and that is
          completely okay.
        </p>
        <p>
          Concerns can affect sleep, appetite, focus, and mood. In such moments, the school
          counsellor is a trusted first step. Even without a crisis, meeting the counsellor early
          helps students build comfort and confidence to seek support whenever needed.
        </p>
      </section>

      <section className="counselling-image-grid-two">
        <img
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=800&fit=crop"
          alt="Teacher addressing students with microphone"
        />
        <img
          src="https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=1200&h=800&fit=crop"
          alt="Mentor talking with student"
        />
      </section>

      <section className="counselling-section">
        <h2>Who does the counsellor work with?</h2>
        <p>
          The counsellor provides counselling, consultation, coordination, and advocacy support to
          students, parents, and the wider school community. Care is offered in preventive,
          developmental, and curative modes depending on the concern.
        </p>
        <p>
          Where needed, parents and staff are included in a structured support plan to strengthen
          the child’s overall growth and wellbeing.
        </p>
      </section>

      <section className="counselling-section">
        <h2>How often do students meet the counsellor?</h2>
        <p>
          Some concerns are resolved in one focused conversation. Others benefit from regular
          follow-up sessions for a period of time. The schedule is tailored to the issue and the
          plan jointly designed by the student and counsellor.
        </p>
        <p>
          The counsellor also engages students, teachers, and staff through soft-skills sessions in
          Life Skills Activities and Value Based Education modules. This strengthens people skills
          and makes support more approachable for individuals and groups.
        </p>
      </section>

      <section className="counselling-section">
        <h2>Core skills addressed</h2>
        <div className="core-skills-layout">
          <ul className="counselling-list two-col-list core-skills-list">
            {peopleSkills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>

          <aside className="core-skills-side-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=1200&fit=crop"
              alt="Students in collaborative guidance session"
            />
          </aside>
        </div>
      </section>

      <section className="counselling-section counselling-columns student-needs-section">
        <article className="counselling-column needs-column">
          <h3>Student Needs: Personal Area</h3>
          <ul className="counselling-list needs-list">
            {studentNeedsPersonal.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="counselling-column needs-column">
          <h3>Student Needs: Academic Area</h3>
          <ul className="counselling-list needs-list">
            {studentNeedsAcademic.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="counselling-image-grid-three">
        <img
          src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=900&h=650&fit=crop"
          alt="Counsellor speaking with parent"
        />
        <img
          src="https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&h=650&fit=crop"
          alt="Teacher support session"
        />
        <img
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&h=650&fit=crop"
          alt="Student wellbeing workshop"
        />
      </section>

      <section className="counselling-section counselling-columns">
        <article className="counselling-column">
          <h3>Counselling for Parents</h3>
          <ul className="counselling-list">
            {parentSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="counselling-column">
          <h3>Counselling for Teachers and Staff</h3>
          <ul className="counselling-list">
            {staffSupport.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>
    </section>
  );
}

export default Counselling;
