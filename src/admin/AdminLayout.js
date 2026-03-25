import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { sidebarLinks } from './moduleConfig';
import { clearAuthSession, getAuthUser } from './auth';

export default function AdminLayout() {
  const user = getAuthUser();
  const navigate = useNavigate();

  const logout = () => {
    clearAuthSession();
    navigate('/admin/login');
  };

  return (
    <div className="admin-root">
      <aside className="admin-sidebar">
        <div className="admin-brand">Loyalo CMS</div>
        <p>{user?.name || 'Admin'}</p>
        <nav className="admin-nav">
          {sidebarLinks.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/admin'}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="admin-actions">
          <button className="admin-btn secondary" onClick={logout} type="button">
            Logout
          </button>
        </div>
      </aside>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
