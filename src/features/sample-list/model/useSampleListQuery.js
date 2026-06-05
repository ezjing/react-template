import { useQuery } from '@tanstack/react-query';
import { sampleListApi } from '../api/sampleListApi';
import { QUERY_KEYS } from '@/shared/constants/queryKeys';

export function useSampleListQuery(params) {
  return useQuery({
    queryKey: [QUERY_KEYS.SAMPLE_LIST, params],
    queryFn: () => sampleListApi.getList(params),
  });
}
