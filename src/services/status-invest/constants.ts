export const STATUS_INVEST_BASE_URL = "https://statusinvest.com.br";
export const STATUS_INVEST_FII_PATH = "/fundos-imobiliarios";
export const STATUS_INVEST_FII_BASE_URL = `${STATUS_INVEST_BASE_URL}${STATUS_INVEST_FII_PATH}/`;

export const STATUS_INVEST_CLASS_SELECTORS = {
  NAME: "h1.lh-4",
  ACTUAL_VALUE:
    ".special > div:nth-child(1) > div:nth-child(1) > strong:nth-child(3)",
  DIVIDEND_YIELD:
    ".special > div:nth-child(1) > div:nth-child(1) > strong:nth-child(3)",
  SEGMENT:
    ".top-info-sm-2 > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > a:nth-child(1) > strong:nth-child(1)",
  YIELD: {
    LAST_YIELD_VALUE:
      "html body.main-nav-small main#main-2 div.container.pb-7 div.mt-5.d-flex.flex-wrap.flex-lg-nowrap.justify-between div#dy-info.chart.card.white-text.bg-main-gd.w-100.w-md-45.ml-lg-5.mr-lg-5.mt-3.mb-3.mt-md-0.mb-md-0 div.info div.d-flex.align-items-center strong.value.d-inline-block.fs-5.fw-900",
    LAST_YIELD_PERCENTAGE:
      "#dy-info > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > b:nth-child(1)",
    LAST_YIELD_BASE_PRICE:
      "#dy-info > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > b:nth-child(2)",
    LAST_YIELD_DATE:
      "#dy-info > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > b:nth-child(1)",
    NEXT_YIELD_VALUE:
      "div.bg-secondary:nth-child(3) > div:nth-child(2) > div:nth-child(1) > strong:nth-child(2)",
    NEXT_YIELD_PERCENTAGE:
      "div.bg-secondary:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > b:nth-child(1)",
    NEXT_YIELD_BASE_PRICE:
      "div.bg-secondary:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > b:nth-child(2)",
    NEXT_YIELD_DATE:
      "div.bg-secondary:nth-child(3) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > b:nth-child(1)",
  },
};

export const STATUS_INVEST_NOT_FOUND_PAGE_ELEMENT = "h1.fw-100_";
export const STATUS_INVEST_NOT_FOUND_PAGE_TEXT =
  "Não encontramos o que você está procurando";
