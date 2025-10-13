import { redis } from "bun";

export async function publishToChannel(exchange: string, message: unknown) {
  const jsonMessage = JSON.stringify(message);

  await redis.publish(exchange, jsonMessage);
}
