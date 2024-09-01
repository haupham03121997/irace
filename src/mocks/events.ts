import { IEvent } from '@/interfaces';
import { randomTime } from '@/libs/utils';
import { eventData } from './db';

interface Options {
  type?: 'offline' | 'opening' | 'business' | 'all';
  limit?: number;
  currentPage?: number;
}
export const getAllEvents = async <Response = IEvent[]>(options?: Options): Promise<Response | undefined> => {
  const { type = 'offline' } = options || {};
  let result = eventData[type];

  if (type === 'all') {
    const openingEvents = eventData['opening'];
    const businessEvents = eventData['business'];
    const offlineEvents = eventData['offline'];
    // pagination based on currentPage and limit
    const { currentPage = 1, limit = 10 } = options || {};
    const start = (currentPage - 1) * limit;
    const end = start + limit;
    const events = [...offlineEvents];

    const queryResult = {
      total: events.length,
      currentPage,
      limit,
      list: events.slice(start, end) || [],
    };

    result = queryResult;
  }

  return new Promise((resolve) => {
    const timer = randomTime();
    setTimeout(() => {
      resolve(result || []);
    }, timer);
  });
};
