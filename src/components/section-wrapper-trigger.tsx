import { ArrowRightIcon } from "lucide-react";
import { AccordionTrigger } from "./ui/accordion";

interface SectionWrapperTriggerProps {
  title: string;
  collapsible: boolean;
  icon?: React.ReactNode;
}

export default function SectionWrapperTrigger({
  title,
  collapsible,
  icon,
}: SectionWrapperTriggerProps) {
  return (
    <AccordionTrigger disabled={!collapsible}>
      <div className="inline-flex items-center gap-2">
        <ArrowRightIcon size={18} />
        {icon}
        <h2 className="font-bold">{title}</h2>
      </div>
    </AccordionTrigger>
  );
}
