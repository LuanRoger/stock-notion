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
} from "@/utils/schemas/forms/notion-settings";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function NotionSettingsForm() {
  const form = useForm<NotionSettings>({
    resolver: zodResolver(notionSettingsSchema),
    defaultValues: {
      databaseId: "",
    },
  });

  function onSubmit(data: NotionSettings) {
    console.log(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          name="databaseId"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Notion Databse ID</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <Button>Save</Button>
      </form>
    </Form>
  );
}
