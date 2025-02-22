"use client";

import { useTransition } from "react";
import { sendStockMessage } from "@/app/actions/queue";
import LoadingButton from "./loading-button";

interface StandaloneSendButtonProps {
  children: React.ReactNode;
}

export default function StandaloneSendButton({
  children,
}: StandaloneSendButtonProps) {
  const [isPending, startAction] = useTransition();

  function action() {
    startAction(async () => {
      await sendStockMessage("Hello, world!");
    });
  }

  return (
    <LoadingButton isLoading={isPending} onClick={action}>
      {children}
    </LoadingButton>
  );
}
