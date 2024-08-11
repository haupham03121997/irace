import { eventApi } from "@/apis/events";
import { IEvent } from "@/interfaces";
import { UseQueryOptions, useQuery } from "@tanstack/react-query";
type UseListMoviesOptions = Omit<UseQueryOptions<IEvent[]>, "queryKey" | "queryFn">;

export const useBusinessEvents = (type: "offline" | "opening" | "business", options?: UseListMoviesOptions) => {
  const queryResult = useQuery({
    queryKey: ["events", type],
    queryFn: async () => {
      const events = await eventApi.getBusinessEvents();
      if (!events) {
        throw new Error("No events found");
      }
      return events;
    },
    ...options,
  });
  return queryResult;
};