import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface DatabaseIdInfoIconProps {
  iconSize?: number;
}

export default function DatabaseIdInfoIcon({ iconSize = 16 }: DatabaseIdInfoIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <InfoIcon size={iconSize} />
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Ache o ID do banco de dados do Notion na URL do banco de dados:
            notion.so/username/database-id
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
