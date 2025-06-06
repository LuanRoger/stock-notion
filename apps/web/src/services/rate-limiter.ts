import { RateLimit, ms } from "@diiiazote/redis-rate-limit";
import { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";
import { createRedisClient } from "./redis";

export function createRateLimiter() {
  const client = createRedisClient();
  if (!client) {
    return null;
  }

  return new RateLimit({
    redis: client,
    prefix: "stock/web",
    window: ms("1m"),
    limit: 1,
  });
}

export async function checkLimit(
  requestHeaders: ReadonlyHeaders,
  rateLimiter?: RateLimit
) {
  const rateLimiterClient = rateLimiter ?? createRateLimiter();
  if (!rateLimiterClient) {
    return false;
  }

  const ip = requestHeaders.get("x-forwarded-for") ?? "Unknown";
  console.log("Checking limit for IP:", ip);

  const limit = await rateLimiterClient.limit(ip);

  return !limit?.success;
}
