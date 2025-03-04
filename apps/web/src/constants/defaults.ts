import { NotionSettings } from "@/utils/schemas/forms/notion";
import {
  DEFAULT_NOTION_DATABASE_SECTION_KEY,
  DEFAULT_NOTION_SETTINGS_SECTION_KEY,
  DEFAULT_HOW_TO_USE_SECTION_KEY,
} from "./order";

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

export const DEFAULT_SECTIONS_ORDER = [
  DEFAULT_NOTION_DATABASE_SECTION_KEY,
  DEFAULT_NOTION_SETTINGS_SECTION_KEY,
  DEFAULT_HOW_TO_USE_SECTION_KEY,
];
