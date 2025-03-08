import { subscriberRedisClient } from "./redis";

export function subscribeToChannel<T>(
  queueName: string,
  callback: (message: T) => Promise<void>
) {
  subscriberRedisClient.subscribe(queueName, async (error, count) => {
    if (error) {
      console.error("Error on queue: ", error);
      return;
    }

    console.log(`Subscribed to ${queueName} queues`);
  });

  subscriberRedisClient.on("message", async (channel, message) => {
    if (channel !== queueName) {
      return;
    }

    const parsedMessage = JSON.parse(message) as T;
    await callback(parsedMessage);
  });
}
