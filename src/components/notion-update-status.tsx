"use client";

import { getNotionDataSourceUpdateRealtimeToken } from "@/app/actions/notion";
import { notionUpdateStatusPipeline } from "@/services/inngest/channels";
import { useRealtime } from "inngest/react";
import { useMemo } from "react";
import { TextAnimate } from "./ui/text-animate";
import { Badge } from "./ui/badge";
import { cn } from "@/utils/tailwind";
import { RouteIcon } from "lucide-react";

export interface NotionUpdateStatusProps {
  className?: string;
}

export default function NotionUpdateStatus({
  className,
}: NotionUpdateStatusProps) {
  const channel = useMemo(() => notionUpdateStatusPipeline, []);
  const topics = useMemo(() => ["status"] as const, []);

  const {
    connectionStatus,
    runStatus,
    messages: realtimeMessages,
  } = useRealtime({
    channel,
    topics,
    token: getNotionDataSourceUpdateRealtimeToken,
    bufferInterval: 500,
  });

  const messageText = useMemo(() => {
    const status = realtimeMessages.byTopic.status;
    if (!status) {
      return null;
    }

    switch (status.data.step) {
      case "creating-client":
        return "Creating client...";
      case "fetching-data":
        return "Fetching data...";
      case "updating-notion":
        return "Updating Notion...";
      case "done":
        return "Done";
      default:
        return null;
    }
  }, [realtimeMessages]);

  const isOk = useMemo(() => {
    return (
      (runStatus === "running" || runStatus === "completed") &&
      connectionStatus === "open"
    );
  }, [runStatus, connectionStatus]);

  return (
    <div
      className={cn(
        "flex flex-col gap-1 border border-border p-2 rounded-md",
        className,
      )}
    >
      <div className="flex gap-1 items-center">
        <RouteIcon size={16} />
        <p className="font-mono text-sm uppercase">Progress</p>
        <Badge>{isOk ? "Ready" : "Error"}</Badge>
      </div>
      {messageText && (
        <TextAnimate
          key={messageText}
          animation="blurInUp"
          by="character"
          once
          as="p"
          className="font-bold"
        >
          {messageText}
        </TextAnimate>
      )}
    </div>
  );
}
