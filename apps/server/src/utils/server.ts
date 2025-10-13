import { subscribeNotionDataSourceFi } from "@/modules/notion/channel";
import type { AddressInfo } from "node:net";

export function onServerStarts(info: AddressInfo) {
  const { port } = info;

  subscribeNotionDataSourceFi();

  console.log(`Server started on port ${port}`);
}
