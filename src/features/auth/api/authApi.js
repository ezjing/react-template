import client from '../../../shared/api/client';

export const authApi = {
  login: (credentials) => client.post('/auth/login', credentials),
  logout: () => client.post('/auth/logout'),
};
