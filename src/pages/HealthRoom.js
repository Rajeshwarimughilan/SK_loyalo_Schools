import './PageLayout.css';
import './HealthRoom.css';

const services = [
  'First-aid and immediate medical opinion during school hours',
  'Dedicated support for both boarders and day scholars',
  'Basic observation and stabilization before referral when required',
  'Routine wellness checks and preventive health awareness',
];

const facilities = [
  {
    title: 'Clinical Assessment Corner',
    text: 'For first response, basic vitals recording, and short-term observation under trained supervision.',
    image:
      'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1400',
  },
  {
    title: 'Rest & Recovery Bay',
    text: 'Comfortable monitored beds for temporary rest, hydration, and non-critical support care.',
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=1100&h=760&fit=crop',
  },
];

function HealthRoom() {
  return (
    <section className="page-shell health-room-page">
      <section className="health-hero" aria-label="Health room hero banner">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1800&h=620&fit=crop"
          alt="Loyalo campus"
        />
      </section>

      <section className="health-intro">
        <h1>Health Room</h1>
        <article className="health-intro-card">
          <div className="health-intro-media">
            <img
              src="https://images.pexels.com/photos/6823567/pexels-photo-6823567.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Health room interior"
            />
          </div>

          <div className="health-intro-copy">
            <p>
              The Health Rooms within the campus are set up to provide first medical opinion,
              first-aid and simple medical care to all students at Loyalo. We have dedicated support
              spaces for both boarders and day scholars to ensure quick response and comfort.
            </p>
            <p>
              The department of health care is supported by qualified doctors, trained nursing staff,
              and caretakers. While the team provides immediate support on campus, treatment in the
              Health Room does not replace care from a regular hospital when advanced intervention is
              required.
            </p>
            <p>
              Our focus is preventive care, timely response, and safe referral guidance in
              partnership with families.
            </p>
          </div>
        </article>
      </section>

      <section className="health-section">
        <h2>Health Support at a Glance</h2>
        <div className="health-services-grid">
          {services.map((service) => (
            <article key={service} className="health-service-card">
              <p>{service}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="health-section health-dummy-image-card">
        <img
          src="https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1500&h=760&fit=crop"
          alt="Health room support team"
        />
      </section>

      <section className="health-section facilities-layout">
        {facilities.map((item) => (
          <article key={item.title} className="facility-card">
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default HealthRoom;
