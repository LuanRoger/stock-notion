"use client";

import { DATA_SOURCE_HISTORY_KEY } from "@/constants/local-storage";
import { getLocalStorage } from "@/utils/local-storage";
import { HistoryIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { DataSourceHistoryItem } from "./data-source-history-item";

export function NotionDataSourceHistory() {
  const [history, setHistory] = useState<string[] | null>([]);

  useEffect(() => {
    const storedOrder = getLocalStorage<string[]>(DATA_SOURCE_HISTORY_KEY);
    setHistory(storedOrder);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <span className="inline-flex gap-1 items-center">
        <HistoryIcon size={18} />
        <h3>Historico</h3>
      </span>
      {history ? (
        <ul className="flex flex-col divide-y">
          {history.map((dataSourceId) => (
            <DataSourceHistoryItem
              key={dataSourceId}
              dataSourceId={dataSourceId}
            />
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground mt-2">
          Não há histórico de fontes de dados.
        </p>
      )}
    </div>
  );
}
