import { useQuery } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/shared/constants/queryKeys';

import { sampleListApi } from '../api/sampleListApi';

export function useSampleListQuery(params) {
  return useQuery({
    queryKey: [QUERY_KEYS.SAMPLE_LIST, params],
    queryFn: () => sampleListApi.getList(params),
  });
}
