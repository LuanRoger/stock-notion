import { subscriberRedisClient } from "./redis";

export function subscribeToChannel<T>(
  channelName: string,
  callback: (message: T) => Promise<void>
) {
  subscriberRedisClient.subscribe(channelName, async (message, channel) => {
    console.log(`Received message on channel ${channel}: ${message}`);

    const parsedMessage = JSON.parse(message) as T;
    await callback(parsedMessage);
  });

  console.log(`Subscribed to channel ${channelName}`);
}
