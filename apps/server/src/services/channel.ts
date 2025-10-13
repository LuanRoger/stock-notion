import { redis } from "bun";

export function subscribeToChannel<T>(
  channelName: string,
  callback: (message: T) => Promise<void>
) {
  redis.subscribe(channelName, async (message) => {
    const parsedMessage = JSON.parse(message) as T;
    await callback(parsedMessage);
  });
}
