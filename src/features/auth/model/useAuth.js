import { useAppSelector } from '@/app/store/hooks';

export function useAuth() {
  const user = useAppSelector((state) => state.auth.user);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return { user, isAuthenticated };
}
