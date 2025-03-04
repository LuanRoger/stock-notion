import { cn } from "@/utils/tailwind";

interface ProductIconProps {
  className?: string;
}

export default function ProductIcon({ className }: ProductIconProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-primary flex items-center justify-center transition-colors",
        className
      )}
    >
      <h1 className="font-serif text-primary-foreground text-3xl">S</h1>
    </div>
  );
}
