"use client";

import { CheckIcon, CopyIcon } from "lucide-react";
import { Item, ItemActions, ItemContent, ItemTitle } from "./ui/item";
import { CopyTextButton } from "./copy-text-button";

interface DataSourceHistoryItemProps {
  dataSourceId: string;
}

export function DataSourceHistoryItem({
  dataSourceId,
}: DataSourceHistoryItemProps) {
  return (
    <li>
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>{dataSourceId}</ItemTitle>
        </ItemContent>
        <ItemActions>
          <CopyTextButton
            text={dataSourceId}
            tooltipText="Copiar ID da fonte de dados"
            buttonProps={{ variant: "ghost", size: "icon" }}
            clicked={{ tooltipText: "Copiado!", children: <CheckIcon /> }}
          >
            <CopyIcon />
          </CopyTextButton>
        </ItemActions>
      </Item>
    </li>
  );
}
