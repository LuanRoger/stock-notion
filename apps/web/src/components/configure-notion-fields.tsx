import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NotionSettingsForm from "./notion-settings-form";
import { DatabaseIcon } from "lucide-react";

interface ConfigureNotionFieldProps {
  className?: string;
}

export default function ConfigureNotionField({
  className,
}: ConfigureNotionFieldProps) {
  return (
    <Accordion type="single" collapsible className={className}>
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="flex items-center gap-2">
            <DatabaseIcon />
            Mapeamento dos campos
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <NotionSettingsForm />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
