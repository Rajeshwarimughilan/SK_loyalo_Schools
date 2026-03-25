import { apiRequest } from './client';

export const adminApi = {
  login: (payload) => apiRequest('/auth/login', { method: 'POST', body: JSON.stringify(payload) }),

  listModule: (module, page = 1, pageSize = 25) =>
    apiRequest(`/admin/${module}?page=${page}&pageSize=${pageSize}`),
  createModuleItem: (module, payload) =>
    apiRequest(`/admin/${module}`, { method: 'POST', body: JSON.stringify(payload) }),
  updateModuleItem: (module, id, payload) =>
    apiRequest(`/admin/${module}/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  deleteModuleItem: (module, id) => apiRequest(`/admin/${module}/${id}`, { method: 'DELETE' }),

  getSiteSettings: () => apiRequest('/admin/site-settings'),
  updateSiteSettings: (payload) => apiRequest('/admin/site-settings', { method: 'PUT', body: JSON.stringify(payload) }),

  getAbout: () => apiRequest('/admin/about-content'),
  updateAbout: (payload) => apiRequest('/admin/about-content', { method: 'PUT', body: JSON.stringify(payload) }),

  getAdmissions: () => apiRequest('/admin/admissions'),
  updateAdmissions: (payload) => apiRequest('/admin/admissions', { method: 'PUT', body: JSON.stringify(payload) }),

  uploadImage: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return apiRequest('/upload', {
      method: 'POST',
      body: formData,
    });
  },
};
