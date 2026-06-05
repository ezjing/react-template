import client from '@/shared/api/client';

export const sampleListApi = {
  getList: (params) => client.get('/samples', { params }),
  create: (body) => client.post('/samples', body),
  update: (id, body) => client.put(`/samples/${id}`, body),
  remove: (id) => client.delete(`/samples/${id}`),
};
