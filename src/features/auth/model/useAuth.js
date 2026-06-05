import { useSelector } from 'react-redux';

export function useAuth() {
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return { user, isAuthenticated };
}
