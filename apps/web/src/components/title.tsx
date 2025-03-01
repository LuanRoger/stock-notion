import { cn } from "@/utils/tailwind";
import { DatabaseIcon } from "lucide-react";
import Subtitle from "./subtitle";

interface TitleProps {
  className?: string;
}

export default function Title({ className }: TitleProps) {
  return (
    <div className={cn("flex flex-row items-center gap-3", className)}>
      <div className="size-12 bg-[#37352F] rounded-lg flex items-center justify-center group-hover:bg-[#2E2C27] transition-colors">
        <DatabaseIcon size={24} color="white" />
      </div>
      <div className="flex flex-col">
        <h1 className="text-4xl font-serif tracking-tight">Stock</h1>
        <Subtitle />
      </div>
    </div>
  );
}
