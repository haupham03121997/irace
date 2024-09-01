import { eventApi } from '@/apis/events';
import { IEvent } from '@/interfaces';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';

type QueryResult = {
  total: number;
  currentPage: number;
  limit: number;
  list: IEvent[];
};

type UseListMoviesOptions = Omit<UseQueryOptions<QueryResult | undefined>, 'queryKey' | 'queryFn'>;

type OptionFilter = {
  currentPage?: number;
  limit?: number;
};

export const useGetAllEvents = (filterOptions: OptionFilter, options?: UseListMoviesOptions) => {
  const queryResult = useQuery({
    queryKey: ['all-events', { currentPage: filterOptions.currentPage, limit: filterOptions.limit }],
    queryFn: () => eventApi.getAllEvents(filterOptions),
    ...options,
  });
  return queryResult;
};
