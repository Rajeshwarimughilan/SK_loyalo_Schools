const API_BASE = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

async function apiRequest(path, options = {}) {
  const token = localStorage.getItem('loyalo_admin_token');
  const headers = {
    ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  if (response.status === 204) {
    return null;
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message || 'Request failed');
    error.details = data.details || null;
    throw error;
  }

  return data;
}

function getApiBase() {
  return API_BASE;
}

export { apiRequest, getApiBase };
