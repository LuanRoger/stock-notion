import { cn } from "@/utils/tailwind";
import NextLink from "next/link";

interface LinkProps extends React.ComponentProps<"a"> {
  href: string;
}

export default function Link({ className, ...props }: LinkProps) {
  return (
    <NextLink
      className={cn("underline", className)}
      {...props}
    ></NextLink>
  );
}
