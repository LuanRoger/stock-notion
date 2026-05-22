import { PropertiesNameOption } from "@/models/notion";
import { TimeZone } from "@/types/time";

export const DEFAULT_NOTION_COLUMN_ID_NAME = "Nome do FII";

export const DEFAULT_NOTION_DATE_TIMEZONE: TimeZone = "America/Sao_Paulo";

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
