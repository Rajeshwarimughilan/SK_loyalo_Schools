import { useState } from 'react';
import './NoticeBoard.css';
import { FaCalendarAlt, FaChevronDown, FaChevronUp, FaBullhorn } from 'react-icons/fa';

const upcomingEvents = [
  { id: 1, date: '2026-01-25', title: 'Annual Sports Day', description: 'Inter-house sports competition with various athletic events.' },
  { id: 2, date: '2026-01-28', title: 'Science Exhibition', description: 'Student-led projects showcasing innovative scientific experiments.' },
  { id: 3, date: '2026-02-01', title: 'Cultural Festival', description: 'Celebrating diversity through music, dance, and art performances.' },
  { id: 4, date: '2026-02-05', title: 'Parent-Teacher Meet', description: 'Discuss student progress and academic goals for the semester.' },
  { id: 5, date: '2026-02-10', title: 'Coding Hackathon', description: 'Team-based programming challenge for middle and high school students.' },
  { id: 6, date: '2026-02-15', title: 'Art Workshop', description: 'Hands-on session with professional artists exploring various mediums.' },
];

const notices = [
  'School will remain closed on January 26th for Republic Day celebrations.',
  'Online fee payment portal now available - Pay before January 31st to avoid late fees.',
  'New library books available for borrowing - Check the catalog online.',
  'Basketball team tryouts scheduled for next Monday at 4 PM in the main court.',
  'Reminder: Submit permission slips for the upcoming field trip by Friday.',
  'Annual Day rehearsals start next week - All participants please note timings.',
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
      month: date.toLocaleString('default', { month: 'short' }).toUpperCase()
    };
  };

  return (
    <section className="notice-board-section">
      <div className="notice-board-container">
        {/* LEFT SIDE - Upcoming Events */}
        <div className="upcoming-events">
          <div className="section-header">
            <FaCalendarAlt className="header-icon" />
            <h3>Upcoming Events</h3>
          </div>

          <div className="events-list">
            {displayedEvents.map((event) => {
              const { day, month } = formatDate(event.date);
              return (
                <div key={event.id} className="event-card">
                  <div className="event-date">
                    <span className="day">{day}</span>
                    <span className="month">{month}</span>
                  </div>
                  <div className="event-details">
                    <h4>{event.title}</h4>
                    <p>{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="event-navigation">
            {currentIndex > 0 && (
              <button className="nav-btn up-btn" onClick={handlePrev}>
                <FaChevronUp />
              </button>
            )}
            {currentIndex + eventsPerPage < sortedEvents.length && (
              <button className="nav-btn down-btn" onClick={handleNext}>
                <FaChevronDown />
              </button>
            )}
          </div>

          <button className="full-calendar-btn">View Full Calendar</button>
        </div>

        {/* RIGHT SIDE - Notice Board */}
        <div className="notice-board">
          <div className="section-header">
            <FaBullhorn className="header-icon" />
            <h3>Announcements</h3>
          </div>

          <div className="notice-display">
            <div className="scrolling-notices">
              {[...notices, ...notices].map((notice, index) => (
                <div key={index} className="notice-item">
                  <span className="notice-pin">📌</span>
                  <p>{notice}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NoticeBoard;