import { FiiHasInvalidData, FiiNotFound } from "@/models/errors";
import { FiiData } from "@/models/fii";
import { getFiiById as getFiiByIdStatusInvest } from "@/services";
import {
  STATUS_INVEST_CLASS_SELECTORS,
  STATUS_INVEST_NOT_FOUND_PAGE_ELEMENT,
  STATUS_INVEST_NOT_FOUND_PAGE_TEXT,
} from "@/services/status-invest/constants";
import { parseDate } from "@/utils/date";
import { parseNumber } from "@/utils/numbers";

export async function getFiiById(id: string) {
  const page = await getFiiByIdStatusInvest(id);

  const name = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.NAME
  )?.innerText;
  const actualValue = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.ACTUAL_VALUE
  )?.innerText;
  const dividendYield = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.DIVIDEND_YIELD
  )?.innerText;
  const segment = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.SEGMENT
  )?.innerText;
  const lastYieldValue = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.YIELD.LAST_YIELD_VALUE
  )?.innerText;
  const lastYieldPercentage = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.YIELD.LAST_YIELD_PERCENTAGE
  )?.innerText;
  const lastYieldBasePrice = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.YIELD.LAST_YIELD_BASE_PRICE
  )?.innerText;
  const lastYieldDate = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.YIELD.LAST_YIELD_DATE
  )?.innerText;
  const nextYieldValue = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.YIELD.NEXT_YIELD_VALUE
  )?.innerText;
  const nextYieldPercentage = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.YIELD.NEXT_YIELD_PERCENTAGE
  )?.innerText;
  const nextYieldBasePrice = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.YIELD.NEXT_YIELD_BASE_PRICE
  )?.innerText;
  const nextYieldDate = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.YIELD.NEXT_YIELD_DATE
  )?.innerText;

  const notFoundPageElement = page.querySelector(
    STATUS_INVEST_NOT_FOUND_PAGE_ELEMENT
  )?.innerText;
  const notFoundPageElementText = notFoundPageElement
    ?.trim()
    .includes(STATUS_INVEST_NOT_FOUND_PAGE_TEXT);
  if (notFoundPageElementText) {
    console.log("FII not found");
    throw new FiiNotFound(id);
  }

  console.log(lastYieldValue);

  if (!name || !actualValue || !dividendYield) {
    throw new FiiHasInvalidData(id);
  }
  const doesHaveLastYieldData =
    lastYieldValue &&
    lastYieldPercentage &&
    lastYieldBasePrice &&
    lastYieldDate;
  const doesHaveNextYieldData =
    nextYieldValue &&
    nextYieldPercentage &&
    nextYieldBasePrice &&
    nextYieldDate;

  const fiiData: FiiData = {
    name,
    actualValue: parseNumber(actualValue),
    dividendYield: parseNumber(dividendYield),
    segment,
    yield: {
      lastYield: doesHaveLastYieldData
        ? {
            value: parseNumber(lastYieldValue),
            percentage: parseNumber(lastYieldPercentage),
            basePrice: parseNumber(lastYieldBasePrice),
            date: parseDate(lastYieldDate),
          }
        : undefined,
      nextYield: doesHaveNextYieldData
        ? {
            value: parseNumber(nextYieldValue),
            percentage: parseNumber(nextYieldPercentage),
            basePrice: parseNumber(nextYieldBasePrice),
            date: parseDate(nextYieldDate),
          }
        : undefined,
    },
  };

  return fiiData;
}
