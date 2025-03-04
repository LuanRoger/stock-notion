import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface DatabaseIdInfoIconProps {
  className?: string;
  iconSize?: number;
}

export default function DatabaseIdInfoIcon({
  className,
  iconSize = 16,
}: DatabaseIdInfoIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={className} type="button">
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
