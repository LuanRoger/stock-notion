import { InfoIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface DataSourceIdInfoIconProps {
  className?: string;
  iconSize?: number;
}

export default function DataSourceIdInfoIcon({
  className,
  iconSize = 16,
}: DataSourceIdInfoIconProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className={className} type="button">
          <InfoIcon size={iconSize} />
        </TooltipTrigger>
        <TooltipContent>
          <p>
            Para obter um ID de fonte de dados diretamente do aplicativo Notion,
            o menu de configurações de um banco de dados inclui um botão
            &quot;Copiar ID de fonte de dados&quot; em &quot;Gerenciar fontes de
            dados&quot;:
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
