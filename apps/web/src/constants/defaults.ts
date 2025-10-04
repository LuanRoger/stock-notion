import { NotionSettings } from "@/utils/schemas/forms/notion";
import {
  DEFAULT_NOTION_DATA_SOURCE_SECTION_KEY,
  DEFAULT_NOTION_SETTINGS_SECTION_KEY,
  DEFAULT_HOW_TO_USE_SECTION_KEY,
  DEFAULT_FAQ_SECTION_KEY,
} from "./order";
import { OrderKeys } from "@/types/order";

export const NOTION_SETTINGS_DEFAULT_VALUES: NotionSettings = {
  actualValue: "",
  dividendYield: "",
  pvp: "",
  lastYieldValue: "",
  lastYieldPercentage: "",
  lastYieldBasePrice: "",
  lastYieldDate: "",
  nextYieldValue: "",
  nextYieldPercentage: "",
  nextYieldBasePrice: "",
  nextYieldDate: "",
};

export const DEFAULT_SECTIONS_ORDER: OrderKeys[] = [
  DEFAULT_NOTION_DATA_SOURCE_SECTION_KEY,
  DEFAULT_NOTION_SETTINGS_SECTION_KEY,
  DEFAULT_HOW_TO_USE_SECTION_KEY,
  DEFAULT_FAQ_SECTION_KEY,
];
