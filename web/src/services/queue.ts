import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";

export function createClient() {
  return new SQSClient({
    region: process.env.AWS_REGION,
  });
}

export function createSendCommand(message: unknown) {
  const jsonMessage = JSON.stringify(message);

  return new SendMessageCommand({
    MessageBody: jsonMessage,
    QueueUrl: process.env.SQS_QUEUE_URL,
  });
}
