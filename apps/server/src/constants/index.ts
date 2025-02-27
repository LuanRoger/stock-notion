import { type PropertiesNameOption } from "@/models/properties-options";
import { type TimeZone } from "@/models/utils-options";

export const PROMISE_LIST_EXECUTION_DELAY_MS = 300;

export const DEFAULT_PAGE_PROPERTIES_NAME: PropertiesNameOption = {
  actualValue: "Valor Atual",
  dividendYield: "Dividend Yield (%)",
  lastYieldValue: "Último Rendimento",
  lastYieldPercentage: "Último Rendimento (%)",
  lastYieldBasePrice: "Último Rendimento Preço Base",
  lastYieldDate: "Último Rendimento Data",
  nextYieldValue: "Próximo Rendimento",
  nextYieldPercentage: "Próximo Rendimento (%)",
  nextYieldBasePrice: "Próximo Rendimento Preço Base",
  nextYieldDate: "Próximo Rendimento Data",
  pvp: "P/VP",
};

export const DEFAULT_NOTION_COLUMN_ID_NAME = "Nome do FII";

export const APP_RESPONSES = {
  SECRET_NOT_SET: "Secret not set",
  OK: "OK",
};

export const DEFAULT_NOTION_DATE_TIMEZONE: TimeZone = "America/Sao_Paulo";
