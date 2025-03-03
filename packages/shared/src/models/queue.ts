import { TimeZone } from "../types";

export interface UpdateNotionDatabaseFiMessage {
  databaseId: string;
  rowIdColumnName?: string;
  actualValue?: string;
  dividendYield?: string;
  pvp?: string;
  lastYieldValue?: string;
  lastYieldPercentage?: string;
  lastYieldBasePrice?: string;
  lastYieldDate?: string;
  nextYieldValue?: string;
  nextYieldPercentage?: string;
  nextYieldBasePrice?: string;
  nextYieldDate?: string;
  timeZone?: TimeZone;
}
