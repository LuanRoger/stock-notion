import { subscriberRedisClient } from "./redis";

export function subscribeToChannel<T>(
  channelName: string,
  callback: (message: T) => Promise<void>
) {
  subscriberRedisClient.subscribe(channelName, async (error, _) => {
    if (error) {
      console.error("Error on subscriber: ", error);
      return;
    }

    console.log(`Subscribed to ${channelName} subscriber`);
  });

  subscriberRedisClient.on("message", async (channel, message) => {
    if (channel !== channelName) {
      return;
    }

    const parsedMessage = JSON.parse(message) as T;
    await callback(parsedMessage);
  });
}
