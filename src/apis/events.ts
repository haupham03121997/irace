import { getAllEvents } from "@/mocks/events";

export const eventApi = {
  getOfflineEvents: async () => {
    try {
      const response = await getAllEvents({ type: "offline" });
      return response;
    } catch (error: any) {
      throw Error(error);
    }
  },
  getOpeningEvents: async () => {
    try {
      const response = await getAllEvents({ type: "opening" });
      return response;
    } catch (error: any) {
      throw Error(error);
    }
  },
  getBusinessEvents: async () => {
    try {
      const response = await getAllEvents({ type: "business" });
      return response;
    } catch (error: any) {
      throw Error(error);
    }
  },
};
