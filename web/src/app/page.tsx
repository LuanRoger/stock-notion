import ConfigureNotionField from "@/components/configure-notion-fields";
import NotionDatabaseForm from "@/components/notion-database-form";
import Title from "@/components/title";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Title />
      <h2 className="text-muted-foreground font-mono text-lg text-center lg:text-left">
        Preço de fundos imobiliarios direto no Notion, atualizado a qualquer
        momoento
      </h2>
      <NotionDatabaseForm className="w-full" />
      <ConfigureNotionField className="w-full" />
      <Separator />
    </div>
  );
}
