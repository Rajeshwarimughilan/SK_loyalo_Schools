import { Navigate } from 'react-router-dom';
import { getAuthToken, getAuthUser } from './auth';

export default function ProtectedAdminRoute({ children }) {
  const token = getAuthToken();
  const user = getAuthUser();

  if (!token || !user) {
    return <Navigate to="/admin/login" replace />;
  }

  if (user.role !== 'ADMIN') {
    return <Navigate to="/" replace />;
  }

  return children;
}
