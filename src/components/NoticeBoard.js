import { useState } from 'react';
import { useEffect } from 'react';
import './NoticeBoard.css';
import { FaCalendarAlt, FaBullhorn, FaChevronLeft, FaChevronRight, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { publicApi } from '../api/public';

function NoticeBoard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [notices, setNotices] = useState([]);
  const eventsPerPage = 3;

  useEffect(() => {
    let mounted = true;

    Promise.all([
      publicApi.getNotices({ type: 'EVENT', page: 1, pageSize: 20 }),
      publicApi.getNotices({ type: 'NOTICE', page: 1, pageSize: 20 }),
    ])
      .then(([eventsResponse, noticeResponse]) => {
        if (!mounted) return;
        setUpcomingEvents(eventsResponse?.data || []);
        setNotices(noticeResponse?.data || []);
      })
      .catch(() => {
        if (!mounted) return;
        setUpcomingEvents([]);
        setNotices([]);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const sortedEvents = [...upcomingEvents].sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
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
              const { day, month, weekday } = formatDate(event.eventDate);
              return (
                <article key={event.id} className="event-card">
                  <div className="event-date">
                    <span className="day">{day}</span>
                    <span className="month">{month}</span>
                  </div>
                  <div className="event-details">
                    <div className="event-row">
                      <span className="event-tag">{event.category || 'Event'}</span>
                      <span className="event-weekday">{weekday}</span>
                    </div>
                    <h4>{event.title}</h4>
                    <p>{event.summary}</p>
                    <div className="event-time">
                      <FaClock />
                      <span>{event.eventTime || 'TBA'}</span>
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

          <Link to="/events" className="full-calendar-btn">View Full Calendar</Link>
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
                    <span className="notice-tag">{notice.tag || 'Notice'}</span>
                    <span className="notice-date">{notice.eventDate ? new Date(notice.eventDate).toLocaleDateString() : 'New'}</span>
                  </div>
                  <p>{notice.summary}</p>
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