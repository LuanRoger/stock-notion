import { Connection } from "rabbitmq-client";

function createConnection() {
  return new Connection(process.env.RABBITMQ_URL);
}

export function createPublisher(exchange: string) {
  const connection = createConnection();
  return connection.createPublisher({
    confirm: true,
    maxAttempts: 2,
    exchanges: [{ exchange, type: "topic" }],
  });
}
