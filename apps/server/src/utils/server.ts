import { subscribeNotionDataSourceFi } from "@/modules/notion/channel";

export function onServerStarts() {
  subscribeNotionDataSourceFi();
}
