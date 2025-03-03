import { APP_MESSAGES } from "@/constants";
import { CACHE_DURATION } from "@/constants/cache";
import { dateReviver } from "@/utils/date";
import { createClient } from "redis";

export function initRedis() {
  const connectionString = process.env.REDIS_URL;
  if (!connectionString) {
    console.log(APP_MESSAGES.REDIS_CONNECTION_STRING_NOT_SET);
  }

  const client = createClient({
    url: connectionString,
  });
  client.connect();

  return client;
}

export const redisClient = initRedis();

export async function getValueCache<T>(key: string): Promise<T | null> {
  const value = await redisClient.get(key);
  if (!value) {
    return null;
  }

  const valueToReturn = JSON.parse(value, dateReviver) as T;
  return valueToReturn;
}

export async function setValueCache(key: string, value: unknown) {
  const jsonValue = JSON.stringify(value);
  await redisClient.set(key, jsonValue, {
    EX: CACHE_DURATION,
    NX: true,
  });
}
