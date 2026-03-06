import { useState } from 'react';
import './NoticeBoard.css';
import { FaCalendarAlt, FaBullhorn, FaChevronLeft, FaChevronRight, FaClock } from 'react-icons/fa';

const upcomingEvents = [
  {
    id: 1,
    date: '2026-01-25',
    title: 'Annual Sports Day',
    category: 'Campus Event',
    time: '09:00 AM - 03:00 PM',
    description: 'Inter-house sports competition featuring track, field, and team games.',
  },
  {
    id: 2,
    date: '2026-01-28',
    title: 'Science Exhibition',
    category: 'Academics',
    time: '11:00 AM - 01:30 PM',
    description: 'Student-led prototypes and experiments showcasing practical innovation.',
  },
  {
    id: 3,
    date: '2026-02-01',
    title: 'Cultural Festival',
    category: 'Arts & Culture',
    time: '04:00 PM - 07:00 PM',
    description: 'Music, dance, and art performances celebrating diversity and expression.',
  },
  {
    id: 4,
    date: '2026-02-05',
    title: 'Parent-Teacher Meet',
    category: 'Community',
    time: '10:00 AM - 01:00 PM',
    description: 'One-on-one interactions focused on progress, goals, and mentoring plans.',
  },
  {
    id: 5,
    date: '2026-02-10',
    title: 'Coding Hackathon',
    category: 'STEM',
    time: '08:30 AM - 02:30 PM',
    description: 'Collaborative coding challenge for middle and high school innovators.',
  },
  {
    id: 6,
    date: '2026-02-15',
    title: 'Art Workshop',
    category: 'Creative Lab',
    time: '01:00 PM - 04:00 PM',
    description: 'Hands-on session with guest artists exploring mixed-media techniques.',
  },
];

const notices = [
  {
    id: 1,
    tag: 'Holiday',
    date: 'Jan 26',
    text: 'School will remain closed on Jan 26 for Republic Day celebrations.',
  },
  {
    id: 2,
    tag: 'Fees',
    date: 'Jan 31',
    text: 'Online fee payment portal is live. Please complete payment before Jan 31.',
  },
  {
    id: 3,
    tag: 'Library',
    date: 'New',
    text: 'Fresh book arrivals are now available for borrowing in the library.',
  },
  {
    id: 4,
    tag: 'Sports',
    date: 'Mon',
    text: 'Basketball team tryouts begin Monday at 4 PM in the main court.',
  },
  {
    id: 5,
    tag: 'Reminder',
    date: 'Fri',
    text: 'Submit field trip permission slips by Friday to avoid schedule delays.',
  },
  {
    id: 6,
    tag: 'Rehearsals',
    date: 'Next Week',
    text: 'Annual Day rehearsals start next week. Participants should follow time slots.',
  },
];

function NoticeBoard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const eventsPerPage = 3;

  const sortedEvents = [...upcomingEvents].sort((a, b) => new Date(a.date) - new Date(b.date));
  const displayedEvents = sortedEvents.slice(currentIndex, currentIndex + eventsPerPage);

  const handleNext = () => {
    if (currentIndex + eventsPerPage < sortedEvents.length) {
      setCurrentIndex(currentIndex + eventsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(Math.max(0, currentIndex - eventsPerPage));
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return {
      day: date.getDate(),
      month: date.toLocaleString('default', { month: 'short' }).toUpperCase(),
      weekday: date.toLocaleString('default', { weekday: 'short' }),
    };
  };

  return (
    <section className="notice-board-section">
      <div className="notice-board-container">
        <div className="upcoming-events">
          <div className="notice-board-header">
            <FaCalendarAlt className="header-icon" />
            <h3>Upcoming Events</h3>
            <span className="header-chip">{sortedEvents.length} this month</span>
          </div>
          <p className="header-subtitle">Discover what is happening across academics, culture, sports, and clubs.</p>

          <div className="events-list">
            {displayedEvents.map((event) => {
              const { day, month, weekday } = formatDate(event.date);
              return (
                <article key={event.id} className="event-card">
                  <div className="event-date">
                    <span className="day">{day}</span>
                    <span className="month">{month}</span>
                  </div>
                  <div className="event-details">
                    <div className="event-row">
                      <span className="event-tag">{event.category}</span>
                      <span className="event-weekday">{weekday}</span>
                    </div>
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                    <div className="event-time">
                      <FaClock />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="event-navigation">
            {currentIndex > 0 && (
              <button className="nav-btn" onClick={handlePrev} aria-label="Show previous events">
                <FaChevronLeft />
              </button>
            )}
            {currentIndex + eventsPerPage < sortedEvents.length && (
              <button className="nav-btn" onClick={handleNext} aria-label="Show next events">
                <FaChevronRight />
              </button>
            )}
          </div>

          <button className="full-calendar-btn">View Full Calendar</button>
        </div>

        <div className="notice-board">
          <div className="notice-board-header">
            <FaBullhorn className="header-icon" />
            <h3>Announcements</h3>
            <span className="header-chip">Updated daily</span>
          </div>
          <p className="header-subtitle">Important updates to keep students and families aligned.</p>

          <div className="notice-marquee" aria-label="School announcements">
            <div className="notice-track">
              {[...notices, ...notices].map((notice, index) => (
                <article key={`${notice.id}-${index}`} className="notice-item">
                  <div className="notice-meta">
                    <span className="notice-tag">{notice.tag}</span>
                    <span className="notice-date">{notice.date}</span>
                  </div>
                  <p>{notice.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoticeBoard;