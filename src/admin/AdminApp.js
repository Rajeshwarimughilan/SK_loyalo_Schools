import { Navigate, Route, Routes } from 'react-router-dom';
import './Admin.css';
import AdminLogin from './AdminLogin';
import AdminLayout from './AdminLayout';
import ProtectedAdminRoute from './ProtectedAdminRoute';
import OverviewPage from './OverviewPage';
import CrudModulePage from './CrudModulePage';
import { AboutContentPage, AdmissionsPage, SiteSettingsPage } from './SingletonPages';

export default function AdminApp() {
  return (
    <Routes>
      <Route path="/login" element={<AdminLogin />} />
      <Route
        path="/*"
        element={
          <ProtectedAdminRoute>
            <AdminLayout />
          </ProtectedAdminRoute>
        }
      >
        <Route index element={<OverviewPage />} />
        <Route path="site-settings" element={<SiteSettingsPage />} />
        <Route path="about" element={<AboutContentPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="modules/:module" element={<CrudModulePage />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
}
