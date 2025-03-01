import { cn } from "@/utils/tailwind";
import { ArrowRightIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionTrigger } from "./ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";

interface SectionWrapperProps {
  className?: string;
  title: string;
  collapsible?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export default function SectionWrapper({
  className,
  title,
  collapsible = true,
  icon,
  children,
}: SectionWrapperProps) {
  return (
    <Accordion
      type="single"
      collapsible={collapsible}
      value={collapsible ? undefined : "item-1"}
      className={cn(
        "flex flex-col gap-4 p-4 px-7 hover:bg-muted transition-colors",
        className
      )}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger disabled={!collapsible}>
          <div className="inline-flex items-center gap-2">
            <ArrowRightIcon size={16} />
            {icon}
            <h2>{title}</h2>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-7">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
