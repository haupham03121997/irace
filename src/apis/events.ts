import { IEvent } from '@/interfaces';
import { getAllEvents } from '@/mocks/events';

type QueryResult = {
  total: number;
  currentPage: number;
  limit: number;
  list: IEvent[];
};
export const eventApi = {
  getOfflineEvents: async () => {
    try {
      const response = await getAllEvents({ type: 'offline' });
      return response;
    } catch (error: any) {
      throw Error(error);
    }
  },
  getOpeningEvents: async () => {
    try {
      const response = await getAllEvents({ type: 'opening' });
      return response;
    } catch (error: any) {
      throw Error(error);
    }
  },
  getBusinessEvents: async () => {
    try {
      const response = await getAllEvents({ type: 'business' });
      return response;
    } catch (error: any) {
      throw Error(error);
    }
  },
  getAllEvents: async (options: { currentPage?: number; limit?: number }) => {
    try {
      const response: QueryResult | undefined = await getAllEvents({ type: 'all', ...options });
      return response;
    } catch (error: any) {
      throw Error(error);
    }
  },
};
