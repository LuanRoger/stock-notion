import { cn } from "@/utils/tailwind";

interface ProductIconProps {
  className?: string;
  textClassName?: string;
}

export default function ProductIcon({
  className,
  textClassName,
}: ProductIconProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-primary flex items-center justify-center transition-colors",
        className
      )}
    >
      <h1
        className={cn(
          "font-serif text-primary-foreground text-3xl",
          textClassName
        )}
      >
        S
      </h1>
    </div>
  );
}
