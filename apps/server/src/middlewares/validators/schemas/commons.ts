import { z } from "zod";

export const fiiSchema = z.string().min(3).endsWith("11");

export const stringSchema = z.string().min(1);

export const numberSchema = z.number().positive();
