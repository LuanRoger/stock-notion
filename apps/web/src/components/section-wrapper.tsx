import { cn } from "@/utils/tailwind";
import { Accordion, AccordionContent } from "./ui/accordion";
import { AccordionItem } from "@radix-ui/react-accordion";
import SectionWrapperTrigger from "./section-wrapper-trigger";
import { GripVerticalIcon } from "lucide-react";

interface SectionWrapperProps {
  className?: string;
  title: string;
  collapsible?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onDragStart?: (e: React.PointerEvent<Element> | PointerEvent) => void;
}

export default function SectionWrapper({
  className,
  title,
  collapsible = true,
  icon,
  children,
  onDragStart,
}: SectionWrapperProps) {
  return (
    <Accordion
      type="single"
      collapsible={collapsible}
      value={collapsible ? undefined : "item-1"}
      className={cn(
        "flex flex-col gap-4 p-4 px-7 hover:bg-muted transition-colors relative group",
        className
      )}
    >
      {onDragStart && (
        <div className="absolute left-1 inset-y-0 h-full hidden lg:inline-flex justify-center items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <GripVerticalIcon
            onPointerDown={onDragStart}
            size={18}
            className="cursor-grab"
          />
        </div>
      )}
      <AccordionItem value="item-1">
        <SectionWrapperTrigger
          title={title}
          icon={icon}
          collapsible={collapsible}
        />
        <AccordionContent className="px-4 lg:px-12">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
