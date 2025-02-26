import { cn } from "@/utils/tailwind";
import { SiNotion } from "@icons-pack/react-simple-icons";

interface SubtitleProps {
  className?: string;
}

export default function Subtitle({ className }: SubtitleProps) {
  return (
    <h2
      className={cn(
        "text-muted-foreground font-mono text-lg text-center lg:text-left",
        className
      )}
    >
      <span>
        Preço de fundos imobiliarios direto no{" "}
        <SiNotion className="inline-block" /> Notion.
      </span>
    </h2>
  );
}
