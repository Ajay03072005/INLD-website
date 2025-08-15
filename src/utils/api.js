

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const API_ENDPOINTS = {
  JOIN: `${API_BASE_URL}/api/join`,
  VOLUNTEER: `${API_BASE_URL}/api/volunteer`,
  MEMBERSHIP: `${API_BASE_URL}/api/membership`,
  SUPPORT: `${API_BASE_URL}/api/support`,
  YOUTH: `${API_BASE_URL}/api/youth`,
  
  CONTACT: `${API_BASE_URL}/api/contact`,
  NEWSLETTER: `${API_BASE_URL}/api/newsletter`,
  EVENTS: `${API_BASE_URL}/api/events`,
  
  // Admin endpoints
  ADMIN_LOGIN: `${API_BASE_URL}/api/admin/login`,
  ADMIN_DASHBOARD: `${API_BASE_URL}/api/admin/dashboard`,
  ADMIN_REGISTRATIONS: `${API_BASE_URL}/api/admin/registrations`,
  ADMIN_EVENTS: `${API_BASE_URL}/api/admin/events`,
  ADMIN_NEWS: `${API_BASE_URL}/api/admin/news`,
};
export const apiRequest = async (url, options = {}) => {
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};
export const submitRegistration = async (formData) => {
  return apiRequest(API_ENDPOINTS.JOIN, {
    method: 'POST',
    body: JSON.stringify({
      ...formData,
      timestamp: new Date().toISOString(),
      source: 'website'
    }),
  });
};

export const submitContactForm = async (formData) => {
  return apiRequest(API_ENDPOINTS.CONTACT, {
    method: 'POST',
    body: JSON.stringify(formData),
  });
};

export const subscribeNewsletter = async (email) => {
  return apiRequest(API_ENDPOINTS.NEWSLETTER, {
    method: 'POST',
    body: JSON.stringify({ email }),
  });
};
