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
  NotionDatabase,
  notionDatabaseSchema,
} from "@/utils/schemas/forms/notion";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { cn } from "@/utils/tailwind";
import DatabaseIdInfoIcon from "./database-id-info-icon";
import { useState } from "react";
import LoadingButton from "./loading-button";
import { sendStockMessage } from "@/app/actions/queue";
import { showErrorToast, showToast } from "@/utils/toast";

interface NotionDatabaseFormProps {
  className?: string;
}

export default function NotionDatabaseForm({
  className,
}: NotionDatabaseFormProps) {
  const form = useForm<NotionDatabase>({
    resolver: zodResolver(notionDatabaseSchema),
    defaultValues: {
      databaseId: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(data: NotionDatabase) {
    try {
      setIsLoading(true);
      await sendStockMessage(data);

      showToast("Atualização requisitada com sucesso!");
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
          name="databaseId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel className="inline-flex items-center gap-2">
                Notion Databse ID
                <DatabaseIdInfoIcon />
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <LoadingButton className="self-end transition-all" isLoading={isLoading}>
          Atualizar
        </LoadingButton>
      </form>
    </Form>
  );
}
