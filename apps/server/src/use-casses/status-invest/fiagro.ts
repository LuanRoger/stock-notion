import { FIAGRO_STORE_KEY } from "@/constants/cache";
import { FiHasInvalidData, FiNotFound, FiNotFoundRule } from "@/models/errors";
import type { FiData } from "@/models/fi";
import { getFiagroById as getFiagroByIdStatusInvest } from "@/services";
import { getValueCache, setValueCache } from "@/services/cache";
import { createCacheKey } from "@/utils/cache";
import { parseFiPage } from "@/utils/status-invest/html-parser";

export async function getFiagroById(id: string) {
  let fiData: FiData;
  const cacheKey = createCacheKey(FIAGRO_STORE_KEY, id);
  fiData = await getValueCache<FiData>(cacheKey);
  if (fiData) {
    return fiData;
  }

  const page = await getFiagroByIdStatusInvest(id);
  try {
    fiData = parseFiPage(page);
    await setValueCache(cacheKey, fiData);
  } catch (error) {
    if (error instanceof FiNotFoundRule) {
      throw new FiNotFound(id);
    }
    throw new FiHasInvalidData(id);
  }

  return fiData;
}
