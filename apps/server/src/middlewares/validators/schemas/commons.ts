import { z } from "zod";

export const fiSchema = z.string().regex(/^[A-Z]{4}11$/);

export const stringSchema = z.string().min(1);

export const numberSchema = z.number().positive();
