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
  NotionDataSource,
  notionDataSourceeSchema,
} from "@/utils/schemas/forms/notion";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { cn } from "@/utils/tailwind";
import DataSourceIdInfoIcon from "./data-source-id-info-icon";
import { useState } from "react";
import LoadingButton from "./loading-button";
import { sendStockMessage } from "@/app/actions/channel";
import { showErrorToast, showToast } from "@/utils/toast";

interface NotionDataSourceFormProps {
  className?: string;
}

export default function NotionDataSourceForm({
  className,
}: NotionDataSourceFormProps) {
  const form = useForm<NotionDataSource>({
    resolver: zodResolver(notionDataSourceeSchema),
    defaultValues: {
      dataSourceId: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(data: NotionDataSource) {
    try {
      setIsLoading(true);
      const actionResult = await sendStockMessage(data);
      if (actionResult.success) {
        showToast("Atualização requisitada com sucesso");
      } else {
        showErrorToast("Um erro ocorreu", actionResult.error);
      }

      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        showErrorToast("Um erro ocorreu", error.message);
      } else {
        showErrorToast("Um erro ocorreu");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn("flex flex-col gap-4", className)}
      >
        <FormField
          name="dataSourceId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="inline-flex items-center gap-2">
                Notion Data Source ID
                <DataSourceIdInfoIcon />
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <LoadingButton
          className="self-end transition-all"
          isLoading={isLoading}
        >
          Atualizar
        </LoadingButton>
      </form>
    </Form>
  );
}
