import { useMemo, useState } from 'react';
import './PageLayout.css';
import './Events.css';

const events = [
  {
    id: 1,
    title: 'Parent Orientation for New Admissions',
    date: '2026-03-06',
    detail:
      'Orientation session for newly admitted families covering academic policy, school rhythm, and parent communication channels.',
    coordinator: 'Ms. Nithya Menon',
    contact: '+91 98765 21001',
  },
  {
    id: 2,
    title: 'Inter-House Debate Championship',
    date: '2026-03-08',
    detail:
      'Senior and middle school teams will compete across policy, ethics, and current-affairs rounds in the main auditorium.',
    coordinator: 'Mr. Arjun Das',
    contact: '+91 98765 21002',
  },
  {
    id: 3,
    title: 'Annual Science Expo',
    date: '2026-03-12',
    detail:
      'Student research and project showcase with open lab demonstrations for parents and peer schools.',
    coordinator: 'Dr. Meera Raj',
    contact: '+91 98765 21003',
  },
  {
    id: 4,
    title: 'School Athletics Meet',
    date: '2026-03-20',
    detail:
      'Track and field events across houses with final medal round at central ground.',
    coordinator: 'Mr. Joel Mathew',
    contact: '+91 98765 21004',
  },
  {
    id: 5,
    title: 'Coding Sprint Day',
    date: '2026-03-28',
    detail:
      'Collaborative coding challenge focused on logic, UI prototyping, and problem-solving under timed rounds.',
    coordinator: 'Ms. Diya Thomas',
    contact: '+91 98765 21005',
  },
  {
    id: 6,
    title: 'Republic Day Cultural Program',
    date: '2026-01-26',
    detail:
      'Patriotic performances, choir ensemble, and student-led stage presentations at the central quadrangle.',
    coordinator: 'Ms. Anjana Pillai',
    contact: '+91 98765 21006',
    image:
      'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=900&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Winter Art Residency',
    date: '2026-02-02',
    detail:
      'A week-long guided visual arts intensive covering sketching, digital composition, and installation practice.',
    coordinator: 'Mr. Rohan Iyer',
    contact: '+91 98765 21007',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=900&h=600&fit=crop',
  },
  {
    id: 8,
    title: 'Senior Career Guidance Fair',
    date: '2026-02-14',
    detail:
      'University advisors and alumni mentors conducted domain-specific counselling sessions for grades XI and XII.',
    coordinator: 'Ms. Priya Nair',
    contact: '+91 98765 21008',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&h=600&fit=crop',
  },
  {
    id: 9,
    title: 'Founders Day Celebration',
    date: '2026-02-22',
    detail:
      'Commemorative day with student recognitions, music performances, and service-project presentations.',
    coordinator: 'Mr. Vishnu Prasad',
    contact: '+91 98765 21009',
    image:
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&h=600&fit=crop',
  },
];

const stageMeta = {
  happening: {
    label: 'Happening',
  },
  upcoming: {
    label: 'Upcoming',
  },
  expired: {
    label: 'Expired',
  },
};

function toDateOnly(dateInput) {
  const date = new Date(dateInput);
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function formatDate(dateInput) {
  const date = new Date(dateInput);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
}

function Events() {
  const [activeStage, setActiveStage] = useState('happening');

  const stageBuckets = useMemo(() => {
    const today = toDateOnly(new Date());

    const happening = [];
    const upcoming = [];
    const expired = [];

    events.forEach((event) => {
      const eventDate = toDateOnly(event.date);

      if (eventDate.getTime() === today.getTime()) {
        happening.push(event);
      } else if (eventDate.getTime() > today.getTime()) {
        upcoming.push(event);
      } else {
        expired.push(event);
      }
    });

    upcoming.sort((a, b) => new Date(a.date) - new Date(b.date));
    expired.sort((a, b) => new Date(b.date) - new Date(a.date));

    return { happening, upcoming, expired };
  }, []);

  const visibleEvents = stageBuckets[activeStage];

  return (
    <section className="page-shell events-page">
      <div className="section events-section">
        <div className="events-timeline" role="tablist" aria-label="Event stages">
          {Object.keys(stageMeta).map((stage) => (
            <button
              key={stage}
              type="button"
              className={`timeline-btn ${activeStage === stage ? 'is-active' : ''}`}
              onClick={() => setActiveStage(stage)}
            >
              <span className="timeline-title">{stageMeta[stage].label}</span>
              <span className="timeline-count">{stageBuckets[stage].length}</span>
            </button>
          ))}
        </div>

        <div className="events-listing">
          {visibleEvents.length === 0 && (
            <div className="events-empty">No events available in this stage right now.</div>
          )}

          {visibleEvents.map((event) => (
            <article key={event.id} className={`event-row ${activeStage === 'expired' ? 'has-image' : ''}`}>
              <div className="event-info">
                <div className="event-date-block">
                  <span>Date</span>
                  <strong>{formatDate(event.date)}</strong>
                </div>

                <div className="event-main">
                  <h3>{event.title}</h3>
                  <p>{event.detail}</p>
                  <div className="event-contact">
                    <strong>Coordinator:</strong>
                    <span>{event.coordinator}</span>
                    <strong>Contact:</strong>
                    <a href={`tel:${event.contact.replace(/\s+/g, '')}`}>{event.contact}</a>
                  </div>
                </div>
              </div>

              {activeStage === 'expired' && (
                <div className="event-image">
                  <img
                    src={
                      event.image ||
                      'https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&h=600&fit=crop'
                    }
                    alt={event.title}
                  />
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
