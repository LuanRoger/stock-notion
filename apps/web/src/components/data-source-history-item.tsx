"use client";

import { CopyIcon } from "lucide-react";
import { Button } from "./ui/button";

interface DataSourceHistoryItemProps {
  dataSourceId: string;
}

export function DataSourceHistoryItem({
  dataSourceId,
}: DataSourceHistoryItemProps) {
  return (
    <li className="flex justify-between p-4">
      {dataSourceId}
      <Button variant="ghost" size="icon">
        <CopyIcon />
      </Button>
    </li>
  );
}
