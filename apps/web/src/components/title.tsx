import { cn } from "@/utils/tailwind";
import { DatabaseIcon } from "lucide-react";

interface TitleProps {
  className?: string;
}

export default function Title({ className }: TitleProps) {
  return (
    <h1
      className={cn(
        "inline-flex gap-2 items-center font-bold text-3xl",
        className
      )}
    >
      <DatabaseIcon size={32} />
      Stock
    </h1>
  );
}
