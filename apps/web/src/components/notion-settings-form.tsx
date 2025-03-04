"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  NotionSettings,
  notionSettingsSchema,
} from "@/utils/schemas/forms/notion";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { notionSettingsDefaultValues } from "@/constants";
import { getLocalStorage, setLocalStorage } from "@/utils/local-storage";
import { NOTION_FIELDS_MAPPING_KEY } from "@/constants/local-storage";
import { showToast } from "@/utils/toast";
import {
  mergeWithDefaults,
  setUndefinedForEmptyStrings,
} from "@repo/shared/utils";

export default function NotionSettingsForm() {
  const form = useForm<NotionSettings>({
    resolver: zodResolver(notionSettingsSchema),
    defaultValues: mergeWithDefaults(
      getLocalStorage(NOTION_FIELDS_MAPPING_KEY),
      notionSettingsDefaultValues
    ),
  });

  function onSubmit(data: NotionSettings) {
    const sanitizedData = setUndefinedForEmptyStrings(data);
    setLocalStorage(NOTION_FIELDS_MAPPING_KEY, sanitizedData);
    showToast("Configurações salvas com sucesso!");
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <div className="grid grid-cols-2 gap-4">
          <FormField
            name="actualValue"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valor Atual</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="dividendYield"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dividend Yield (%)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="lastYieldValue"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Último Rendimento</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="lastYieldPercentage"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Último Rendimento (%)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="lastYieldBasePrice"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Último Rendimento Preço Base</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="lastYieldDate"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Último Rendimento Data</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="nextYieldValue"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Próximo Rendimento</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="nextYieldPercentage"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Próximo Rendimento (%)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="nextYieldBasePrice"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Próximo Rendimento Preço Base</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
          <FormField
            name="nextYieldDate"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Próximo Rendimento Data</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          ></FormField>
        </div>

        <Button className="self-end">Salvar</Button>
      </form>
    </Form>
  );
}
