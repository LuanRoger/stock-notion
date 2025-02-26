import { FiHasInvalidData, FiNotFound, FiNotFoundRule } from "@/models/errors";
import type { FiData } from "@/models/fi";
import { getFiiById as getFiiByIdStatusInvest } from "@/services";
import { parseFiPage } from "@/utils/status-invest/html-parser";

export async function getFiiById(id: string) {
  const page = await getFiiByIdStatusInvest(id);

  let fiData: FiData;
  try {
    fiData = parseFiPage(page);
  } catch (error) {
    if (error instanceof FiNotFoundRule) {
      throw new FiNotFound(id);
    }
    throw new FiHasInvalidData(id);
  }

  return fiData;
}
