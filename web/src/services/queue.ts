import { SendMessageCommand, SQSClient } from "@aws-sdk/client-sqs";

export function createClient() {
  return new SQSClient({
    region: process.env.AWS_REGION,
  });
}

export function createSendCommand(message: string | undefined) {
  return new SendMessageCommand({
    MessageBody: message,
    QueueUrl: process.env.SQS_QUEUE_URL,
  });
}
