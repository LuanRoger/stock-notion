import { cn } from "@/utils/tailwind";
import { SiNotion } from "@icons-pack/react-simple-icons";

interface SubtitleProps {
  className?: string;
}

export default function Subtitle({ className }: SubtitleProps) {
  return (
    <h2 className={cn("text-muted-foreground text-lg", className)}>
      Os principais indicadores de fundos de investimento sempre atualizado no {" "}
      <SiNotion className="inline-block" /> Notion.
    </h2>
  );
}
