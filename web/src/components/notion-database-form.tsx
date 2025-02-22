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
import { Button } from "./ui/button";
import { cn } from "@/utils/tailwind";
import DatabaseIdInfoIcon from "./database-id-info-icon";
import { useActionState } from "react";
import { sendStockMessage } from "@/app/actions/queue";

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
  const [state, formAction, isPending] = useActionState(sendStockMessage, {});

  return (
    <Form {...form}>
      <form
        action={formAction}
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
                <Input required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        {state.error && (
          <div className="text-destructive-foreground">
            {state.error}
          </div>
        )}
        <Button className="self-end" disabled={isPending}>
          Atualizar
        </Button>
      </form>
    </Form>
  );
}
