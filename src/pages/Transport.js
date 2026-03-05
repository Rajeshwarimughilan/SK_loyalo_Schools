import { useState } from 'react';
import './Transport.css';

const ROUTES = [
  {
    id: 'R1',
    name: 'North Corridor',
    color: '#3b82f6',
    busNo: 'KL-07-AB-1234',
    driver: 'Mr. Rajan P.',
    contact: '+91 94001 11001',
    departureFrom: 'Loyalo Main Gate',
    departureTime: '3:45 PM',
    morningPickup: '7:15 AM',
    totalStops: 7,
    stops: [
      { name: 'Loyalo Main Gate', time: '7:15 AM', landmark: 'School Entrance', terminal: true },
      { name: 'City Centre Junction', time: '7:28 AM', landmark: 'Near HDFC Bank ATM' },
      { name: 'Rajaji Nagar Bus Stand', time: '7:35 AM', landmark: 'Opp. Govt. School' },
      { name: 'Patel Colony Gate', time: '7:43 AM', landmark: 'Near Water Tank' },
      { name: 'Nehru Park', time: '7:50 AM', landmark: 'Park Main Entrance' },
      { name: 'Lake View Apts.', time: '7:58 AM', landmark: 'Apartment Complex Gate' },
      { name: 'North End terminus', time: '8:06 AM', landmark: 'Last stop before school loop', terminal: true },
    ],
  },
  {
    id: 'R2',
    name: 'East Valley Route',
    color: '#22c55e',
    busNo: 'KL-07-CD-5678',
    driver: 'Mr. Shaju T.',
    contact: '+91 94001 11002',
    departureFrom: 'Loyalo Main Gate',
    departureTime: '3:50 PM',
    morningPickup: '7:05 AM',
    totalStops: 8,
    stops: [
      { name: 'Loyalo Main Gate', time: '7:05 AM', landmark: 'School Entrance', terminal: true },
      { name: 'East Market Square', time: '7:18 AM', landmark: 'Near Reliance Fresh' },
      { name: 'Aravind Nagar', time: '7:24 AM', landmark: 'Community Hall Gate' },
      { name: 'Sunrise Apartments', time: '7:30 AM', landmark: 'Block B Entrance' },
      { name: 'KSEB Junction', time: '7:37 AM', landmark: 'Opp. Electricity Board Office' },
      { name: 'Rose Garden Colony', time: '7:44 AM', landmark: 'Park Avenue Road' },
      { name: 'Valley Bridge', time: '7:51 AM', landmark: 'Near Petrol Pump' },
      { name: 'East End Terminal', time: '8:00 AM', landmark: 'Last stop — East zone', terminal: true },
    ],
  },
  {
    id: 'R3',
    name: 'South Express',
    color: '#f59e0b',
    busNo: 'KL-07-EF-9101',
    driver: 'Mr. Vinod K.',
    contact: '+91 94001 11003',
    departureFrom: 'Loyalo Main Gate',
    departureTime: '3:45 PM',
    morningPickup: '7:20 AM',
    totalStops: 6,
    stops: [
      { name: 'Loyalo Main Gate', time: '7:20 AM', landmark: 'School Entrance', terminal: true },
      { name: 'Gandhi Road Signal', time: '7:30 AM', landmark: 'Near SBI Main Branch' },
      { name: 'Silver Hills', time: '7:38 AM', landmark: 'Church Road Corner' },
      { name: 'Kavitha Nagar', time: '7:45 AM', landmark: 'Near Post Office' },
      { name: 'South Park Flats', time: '7:52 AM', landmark: 'Block C Parking Entrance' },
      { name: 'South Terminal', time: '8:02 AM', landmark: 'Last stop — South zone', terminal: true },
    ],
  },
  {
    id: 'R4',
    name: 'West Hills Line',
    color: '#8b5cf6',
    busNo: 'KL-07-GH-1122',
    driver: 'Mr. Babu M.',
    contact: '+91 94001 11004',
    departureFrom: 'Loyalo Main Gate',
    departureTime: '3:55 PM',
    morningPickup: '7:10 AM',
    totalStops: 7,
    stops: [
      { name: 'Loyalo Main Gate', time: '7:10 AM', landmark: 'School Entrance', terminal: true },
      { name: 'West Cross Junction', time: '7:22 AM', landmark: 'Opp. Canara Bank' },
      { name: 'Palm Grove Estate', time: '7:28 AM', landmark: 'Estate Main Gate' },
      { name: 'Hilltop View Towers', time: '7:36 AM', landmark: 'Tower 3 Ground Floor' },
      { name: 'Old Market Road', time: '7:43 AM', landmark: 'Near Municipality Office' },
      { name: 'Railway Station West Gate', time: '7:50 AM', landmark: 'Station West Entrance' },
      { name: 'West Hills End', time: '7:58 AM', landmark: 'Last stop — West zone', terminal: true },
    ],
  },
];

const POLICIES = [
  { icon: '⏱️', title: 'Be on Time', desc: 'Buses will not wait more than 2 minutes at any stop. Parents are advised to reach the stop 5 minutes early.' },
  { icon: '🔒', title: 'ID Card Mandatory', desc: 'All students must carry their school ID card and bus pass while boarding.' },
  { icon: '🤫', title: 'Code of Conduct', desc: 'Students must maintain discipline on the bus. Shouting, standing while in motion, or misuse of emergency exits is strictly prohibited.' },
  { icon: '🚨', title: 'Emergency Contact', desc: 'For transport emergencies, call the school transport coordinator at +91 94001 10000.' },
  { icon: '🌧️', title: 'Weather Delays', desc: 'In case of severe weather, delays will be communicated via the school app and official WhatsApp groups.' },
];

export default function Transport() {
  const [activeRoute, setActiveRoute] = useState('R1');

  const route = ROUTES.find((r) => r.id === activeRoute);

  return (
    <div className="transport-page">
      {/* ── Hero ─────────────────────────────────── */}
      <div className="tp-hero">
        <div className="tp-hero-glow" aria-hidden="true" />
        <div className="tp-hero-content">
          <p className="tp-eyebrow">Loyalo School</p>
          <h1 className="tp-title">Transport &amp; Bus Routes</h1>
          <p className="tp-subtitle">
            Safe, punctual, and well-managed school transport serving all corners of the city — because
            your child's journey to knowledge starts before they reach our gates.
          </p>
          <div className="tp-hero-chips">
            <span>🚌 {ROUTES.length} Active Routes</span>
            <span>📍 {ROUTES.reduce((a, r) => a + r.totalStops, 0)} Stops Covered</span>
            <span>✅ GPS Tracked</span>
          </div>
        </div>

        {/* Animated bus strip */}
        <div className="tp-bus-strip" aria-hidden="true">
          {ROUTES.map((r) => (
            <div key={r.id} className="tp-bus-badge" style={{ '--rc': r.color }}>
              <span>🚌</span>
              <span>{r.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Route Selector ──────────────────────── */}
      <div className="tp-wrap">
        <div className="tp-route-tabs">
          {ROUTES.map((r) => (
            <button
              key={r.id}
              className={`tp-route-tab${activeRoute === r.id ? ' is-active' : ''}`}
              style={{ '--rc': r.color }}
              onClick={() => setActiveRoute(r.id)}
            >
              <span className="tp-tab-dot" aria-hidden="true" />
              <span className="tp-tab-id">{r.id}</span>
              <span className="tp-tab-name">{r.name}</span>
            </button>
          ))}
        </div>

        {/* ── Route Detail ──────────────────────── */}
        {route && (
          <div className="tp-route-detail" key={route.id}>
            {/* Info bar */}
            <div className="tp-info-bar" style={{ '--rc': route.color }}>
              <div className="tp-info-item">
                <span className="tp-info-label">Bus No.</span>
                <span className="tp-info-value">{route.busNo}</span>
              </div>
              <div className="tp-info-item">
                <span className="tp-info-label">Driver</span>
                <span className="tp-info-value">{route.driver}</span>
              </div>
              <div className="tp-info-item">
                <span className="tp-info-label">Contact</span>
                <a href={`tel:${route.contact.replace(/\s/g, '')}`} className="tp-info-link">
                  {route.contact}
                </a>
              </div>
              <div className="tp-info-item">
                <span className="tp-info-label">Morning Pickup</span>
                <span className="tp-info-value highlight">{route.morningPickup}</span>
              </div>
              <div className="tp-info-item">
                <span className="tp-info-label">Afternoon Departure</span>
                <span className="tp-info-value highlight">{route.departureTime}</span>
              </div>
            </div>

            {/* Route map timeline */}
            <div className="tp-timeline-wrap">
              <h3 className="tp-timeline-heading">
                <span className="tp-timeline-line-swatch" style={{ background: route.color }} />
                Stop-by-Stop Route — {route.name}
              </h3>

              <div className="tp-timeline">
                {route.stops.map((stop, i) => (
                  <div
                    key={i}
                    className={`tp-stop${stop.terminal ? ' is-terminal' : ''}`}
                    style={{ '--rc': route.color }}
                  >
                    {/* Connector */}
                    <div className="tp-stop-connector">
                      <div className="tp-stop-node">
                        {stop.terminal ? (
                          <span className="tp-node-star">★</span>
                        ) : (
                          <span className="tp-node-num">{i}</span>
                        )}
                      </div>
                      {i < route.stops.length - 1 && (
                        <div className="tp-stop-line" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="tp-stop-card">
                      <div className="tp-stop-top">
                        <div>
                          <p className="tp-stop-name">{stop.name}</p>
                          <p className="tp-stop-landmark">📍 {stop.landmark}</p>
                        </div>
                        <span className="tp-stop-time">{stop.time}</span>
                      </div>
                      {stop.terminal && (
                        <span className="tp-terminal-badge">
                          {i === 0 ? '🏫 School' : '🔚 Terminal Stop'}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Transport Policies ─────────────────── */}
        <div className="tp-policies-section">
          <div className="tp-section-header">
            <p className="tp-section-tag">Rules &amp; Guidelines</p>
            <h2 className="tp-section-title">Transport Policies</h2>
          </div>
          <div className="tp-policies-grid">
            {POLICIES.map((p) => (
              <div key={p.title} className="tp-policy-card">
                <span className="tp-policy-icon">{p.icon}</span>
                <div>
                  <h4 className="tp-policy-title">{p.title}</h4>
                  <p className="tp-policy-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
