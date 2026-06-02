import { authApi } from '../api/authApi';
import { setUser } from './authSlice';

export async function SaveLogic1({ credentials, dispatch }) {
  const { data } = await authApi.login(credentials);
  dispatch(setUser(data.user));
}
