import { cn } from "@/utils/tailwind";
import ProductIcon from "./product-icon";
import Link from "./link";

interface ExtendedProductIconProps {
  className?: string;
  logoClassName?: string;
  textClassName?: string;
  isLink?: boolean;
}

export default function ExtendedProductIcon({
  className,
  logoClassName,
  textClassName,
  isLink,
}: ExtendedProductIconProps) {
  const core = (
    <div className={cn("inline-flex items-center gap-2", className)}>
      <ProductIcon
        className={cn("size-8", logoClassName)}
        textClassName="text-xl"
      />
      <h1 className={cn("text-3xl font-serif tracking-tight", textClassName)}>
        Stock
      </h1>
    </div>
  );

  return isLink ? (
    <Link href="/" className={className}>
      {core}
    </Link>
  ) : (
    core
  );
}
