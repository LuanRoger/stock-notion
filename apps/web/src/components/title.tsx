import { cn } from "@/utils/tailwind";
import Subtitle from "./subtitle";
import ProductIcon from "./product-icon";
import SupportsBadges from "./supports-badges";

interface TitleProps {
  className?: string;
}

export default function Title({ className }: TitleProps) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="inline-flex gap-2 items-center">
        <ProductIcon className="flex-none size-12 items-center" />
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-serif tracking-tight">Stock</h1>
          <Subtitle />
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-1">
        <p className="text-sm text-muted-foreground">Suporte a</p>
        <SupportsBadges />
      </div>
    </div>
  );
}
