import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { authApi } from '../api/authApi';
import { setUser } from './authSlice';

export function useLogin() {
  const dispatch = useDispatch();

  const login = useCallback(
    async (credentials) => {
      const { data } = await authApi.login(credentials);
      dispatch(setUser(data.user));
    },
    [dispatch],
  );

  return { login };
}
