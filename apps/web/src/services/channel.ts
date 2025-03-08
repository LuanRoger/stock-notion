import { createRedisClient } from "./redis";

export async function publishToChannel(exchange: string, message: unknown) {
  const redisClient = createRedisClient();
  const jsonMessage = JSON.stringify(message);

  await redisClient.publish(exchange, jsonMessage);
}
