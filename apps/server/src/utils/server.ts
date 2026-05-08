import { subscribeNotionDataSourceFi } from "@/services/notion/channel";

export function onServerStarts() {
  subscribeNotionDataSourceFi();
}
