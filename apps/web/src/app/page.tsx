import HowToUseSection from "@/components/how-to-use-section";
import NotionDatabaseForm from "@/components/notion-database-form";
import NotionSettingsForm from "@/components/notion-settings-form";
import SectionWrapper from "@/components/section-wrapper";
import Title from "@/components/title";
import { Separator } from "@/components/ui/separator";
import { SettingsIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Title className="px-16 mb-16" />
      <SectionWrapper title="Banco de dados do Notion" collapsible={false}>
        <NotionDatabaseForm />
      </SectionWrapper>
      <SectionWrapper
        title="Configuração dos campos"
        icon={<SettingsIcon size={18} />}
      >
        <NotionSettingsForm />
      </SectionWrapper>
      <SectionWrapper title="Como usar" collapsible={false}>
        <HowToUseSection />
      </SectionWrapper>
      <Separator />
    </div>
  );
}
