import { Client } from "@upstash/qstash";

export function createClient() {
  return new Client({ token: process.env.QSTASH_TOKEN! });
}
