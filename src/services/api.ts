import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
});

interface OpenMPServer {
  ip: string;
  hn: string;
  pc: number;
  pm: number;
  gm: string;
  la: string;
  pa: boolean;
  vn: string;
  omp: boolean;
  pr: boolean;
}

export const serverAPI = {
  getStatus: async () => {
    try {
      const response = await axios.get<OpenMPServer[]>('https://api.open.mp/servers');
      const emeraldServer = response.data.find(server =>
        server.hn.toLowerCase().includes('emerald')
      );
      return emeraldServer || null;
    } catch (error) {
      console.error('Error fetching server status:', error);
      throw error;
    }
  }
};

export const authAPI = {
  register: (userData: RegisterData) =>
    api.post('/auth/register', userData),

  login: (credentials: LoginCredentials) =>
    api.post('/auth/login', credentials),

  logout: () =>
    api.post('/auth/logout'),

  getProfile: () =>
    api.get('/auth/profile'),
};

export const newsAPI = {
  getNews: (page: number = 1, limit: number = 10) =>
    api.get('/news', { params: { page, limit } }),

  getEvent: (id: string) =>
    api.get(`/events/${id}`),

  getAllEvents: (page: number = 1, limit: number = 10) =>
    api.get('/events', { params: { page, limit } }),
};

export const formAPI = {
  submitJoinRequest: (formData: JoinRequestData) =>
    api.post('/forms/join', formData),

  contactSupport: (formData: ContactData) =>
    api.post('/forms/contact', formData),
};

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  discord?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface JoinRequestData {
  username: string;
  email: string;
  discord: string;
  message: string;
}

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default api;