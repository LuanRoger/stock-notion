"use server";

import { EnvVariableNotSetError } from "@/models/errors";
import { FiiData } from "./schemas";

export async function getFiiById(fiiId: string) {
  const baseUrl = process.env.FII_API_URL;
  const apiKey = process.env.FII_API_KEY;
  if (!baseUrl) {
    throw new EnvVariableNotSetError("FII_API_URL");
  }
  if (!apiKey) {
    throw new EnvVariableNotSetError("FII_API_KEY");
  }

  const url = `${baseUrl}/fiis/${fiiId}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch FII: ${response.statusText}`);
  }

  const data = await response.json();
  return data as FiiData;
}

export async function getFiagroById(fiagroId: string) {
  const baseUrl = process.env.FII_API_URL;
  const apiKey = process.env.FII_API_KEY;
  if (!baseUrl) {
    throw new EnvVariableNotSetError("FII_API_URL");
  }
  if (!apiKey) {
    throw new EnvVariableNotSetError("FII_API_KEY");
  }

  const url = `${baseUrl}/fiagro/${fiagroId}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch Fiagro: ${response.statusText}`);
  }

  const data = await response.json();
  return data as FiiData;
}
