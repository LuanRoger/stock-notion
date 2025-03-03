import { DEFAULT_PAGE_PROPERTIES_NAME } from "@/constants";
import type { PropertiesNameOption } from "@/models/properties-options";

export function mergePropertiesNameOption(
  providedOption?: PropertiesNameOption
): PropertiesNameOption {
  if (!providedOption) return DEFAULT_PAGE_PROPERTIES_NAME;

  return {
    actualValue:
      providedOption.actualValue ?? DEFAULT_PAGE_PROPERTIES_NAME.actualValue,
    dividendYield:
      providedOption.dividendYield ??
      DEFAULT_PAGE_PROPERTIES_NAME.dividendYield,
    pvp: providedOption.pvp ?? DEFAULT_PAGE_PROPERTIES_NAME.pvp,
    lastYieldValue:
      providedOption.lastYieldValue ??
      DEFAULT_PAGE_PROPERTIES_NAME.lastYieldValue,
    lastYieldPercentage:
      providedOption.lastYieldPercentage ??
      DEFAULT_PAGE_PROPERTIES_NAME.lastYieldPercentage,
    lastYieldBasePrice:
      providedOption.lastYieldBasePrice ??
      DEFAULT_PAGE_PROPERTIES_NAME.lastYieldBasePrice,
    lastYieldDate:
      providedOption.lastYieldDate ??
      DEFAULT_PAGE_PROPERTIES_NAME.lastYieldDate,
    nextYieldValue:
      providedOption.nextYieldValue ??
      DEFAULT_PAGE_PROPERTIES_NAME.nextYieldValue,
    nextYieldPercentage:
      providedOption.nextYieldPercentage ??
      DEFAULT_PAGE_PROPERTIES_NAME.nextYieldPercentage,
    nextYieldBasePrice:
      providedOption.nextYieldBasePrice ??
      DEFAULT_PAGE_PROPERTIES_NAME.nextYieldBasePrice,
    nextYieldDate:
      providedOption.nextYieldDate ??
      DEFAULT_PAGE_PROPERTIES_NAME.nextYieldDate,
  };
}
