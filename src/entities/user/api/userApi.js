import client from '../../../shared/api/client';

export const userApi = {
  getMe: () => client.get('/users/me'),
};
