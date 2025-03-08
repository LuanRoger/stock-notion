import { EnvVariableNotSetError } from "@/models/errors";
import Redis from "ioredis";

export function createRedisClient() {
  const redisUrl = process.env.REDIS_URL;
  if (!redisUrl) {
    throw new EnvVariableNotSetError("REDIS_URL");
  }

  return new Redis(redisUrl);
}
