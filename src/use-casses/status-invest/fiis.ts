import { FiiHasInvalidData, FiiNotFound } from "@/models/errors";
import { FiiData } from "@/models/fii";
import { getFiiById as getFiiByIdStatusInvest } from "@/services";
import {
  STATUS_INVEST_CLASS_SELECTORS,
  STATUS_INVEST_NOT_FOUND_PAGE_ELEMENT,
  STATUS_INVEST_NOT_FOUND_PAGE_TEXT,
} from "@/services/status-invest/constants";

export async function getFiiById(id: string) {
  const page = await getFiiByIdStatusInvest(id);

  const name = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.NAME
  )?.innerText;
  const actualValue = page.querySelector(
    STATUS_INVEST_CLASS_SELECTORS.ACTUAL_VALUE
  )?.innerText;
  console.log(actualValue);
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

  if (
    !name ||
    !actualValue ||
    !dividendYield ||
    !lastYieldValue ||
    !lastYieldPercentage ||
    !lastYieldBasePrice ||
    !lastYieldDate ||
    !nextYieldValue ||
    !nextYieldPercentage ||
    !nextYieldBasePrice ||
    !nextYieldDate
  ) {
    throw new FiiHasInvalidData(id);
  }

  const fiiData: FiiData = {
    name,
    actualValue: parseFloat(actualValue),
    dividendYield: parseFloat(dividendYield),
    segment,
    yield: {
      lastYield: {
        value: parseFloat(lastYieldValue),
        percentage: parseFloat(lastYieldPercentage),
        basePrice: parseFloat(lastYieldBasePrice),
        date: new Date(lastYieldDate),
      },
      nextYield: {
        value: parseFloat(nextYieldValue),
        percentage: parseFloat(nextYieldPercentage),
        basePrice: parseFloat(nextYieldBasePrice),
        date: new Date(nextYieldDate),
      },
    },
  };

  return fiiData;
}
