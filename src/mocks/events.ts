import { IEvent } from "@/interfaces";
import { randomTime } from "@/libs/utils";
import { eventData } from "./db";

interface Options {
  type?: "offline" | "opening" | "business";
}
export const getAllEvents = async <Response = IEvent[]>(options?: Options): Promise<Response | undefined> => {
  const { type = "offline" } = options || {};
  const result = eventData[type];

  return new Promise((resolve) => {
    const timer = randomTime();
    setTimeout(() => {
      resolve(result || []);
    }, timer);
  });
};
