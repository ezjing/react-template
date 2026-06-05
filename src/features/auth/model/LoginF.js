import { setUser } from './authSlice';
import { authApi } from '../api/authApi';

export async function SaveLogic1({ credentials, dispatch }) {
  const { data } = await authApi.login(credentials);
  dispatch(setUser(data.user));
}
