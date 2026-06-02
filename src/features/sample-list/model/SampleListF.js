import { sampleListApi } from '../api/sampleListApi';

export async function SearchLogic1(params) {
  const { data } = await sampleListApi.getList(params);
  return data;
}

export async function SaveLogic1(body) {
  const { data } = await sampleListApi.create(body);
  return data;
}
