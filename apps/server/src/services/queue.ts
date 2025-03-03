import { APP_MESSAGES } from "@/constants";
import { Connection } from "rabbitmq-client";

export function initRabbitMq() {
  const connectionString = process.env.RABBITMQ_URL;
  if (!connectionString) {
    console.log(APP_MESSAGES.RABBIT_MQ_CONNECTION_STRING_NOT_SET);
  }

  const rabbit = new Connection(connectionString);
  return rabbit;
}

export const rabbitMqConnection = initRabbitMq();

export function createConsumer<T>(
  queueName: string,
  callback: (message: T) => Promise<void>
) {
  const consumer = rabbitMqConnection.createConsumer(
    {
      queue: queueName,
      exchanges: [{ exchange: queueName, type: "topic" }],
      queueBindings: [{ exchange: queueName, routingKey: "*" }],
    },
    (message) => {
      const { body } = message;
      callback(body as T);
    }
  );

  return consumer;
}
