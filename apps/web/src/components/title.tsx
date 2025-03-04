import { cn } from "@/utils/tailwind";
import Subtitle from "./subtitle";
import ProductIcon from "./product-icon";

interface TitleProps {
  className?: string;
}

export default function Title({ className }: TitleProps) {
  return (
    <div className={cn("flex flex-row items-center gap-3", className)}>
      <ProductIcon className="flex-none size-12" />
      <div className="flex-1 flex flex-col">
        <h1 className="text-4xl font-serif tracking-tight">Stock</h1>
        <Subtitle />
      </div>
    </div>
  );
}
