import { apiRequest } from './client';

export const publicApi = {
  getSiteSettings: () => apiRequest('/public/site-settings'),
  getHeroSlides: () => apiRequest('/public/hero-slides'),
  getAbout: () => apiRequest('/public/about'),
  getPrograms: () => apiRequest('/public/programs'),
  getFaculty: (department) =>
    apiRequest(`/public/faculty${department ? `?department=${encodeURIComponent(department)}` : ''}`),
  getGallery: (category) =>
    apiRequest(`/public/gallery${category ? `?category=${encodeURIComponent(category)}` : ''}`),
  getNotices: ({ type, page = 1, pageSize = 10 } = {}) => {
    const query = new URLSearchParams({ page: String(page), pageSize: String(pageSize) });
    if (type) query.set('type', type);
    return apiRequest(`/public/notices?${query.toString()}`);
  },
  getTestimonials: () => apiRequest('/public/testimonials'),
  getAdmissions: () => apiRequest('/public/admissions'),
  getDashboardStats: () => apiRequest('/public/dashboard-stats'),
};
