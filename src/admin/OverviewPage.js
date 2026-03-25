import { useEffect, useState } from 'react';
import { publicApi } from '../api/public';

export default function OverviewPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    publicApi
      .getDashboardStats()
      .then((data) => {
        if (mounted) setStats(data);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section>
      <div className="admin-topbar">
        <h1>Dashboard Overview</h1>
      </div>
      {loading && <p>Loading stats...</p>}
      {stats && (
        <div className="admin-grid">
          <div className="admin-card"><h3>Programs</h3><p>{stats.programs}</p></div>
          <div className="admin-card"><h3>Faculty</h3><p>{stats.faculty}</p></div>
          <div className="admin-card"><h3>Gallery Items</h3><p>{stats.gallery}</p></div>
          <div className="admin-card"><h3>Notices/News/Events</h3><p>{stats.notices}</p></div>
          <div className="admin-card"><h3>Testimonials</h3><p>{stats.testimonials}</p></div>
        </div>
      )}
    </section>
  );
}
