import ConfigureNotionField from "@/components/configure-notion-fields";
import Footer from "@/components/footer";
import NotionDatabaseForm from "@/components/notion-database-form";
import Title from "@/components/title";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <Title />
      <h2 className="text-muted-foreground font-mono text-lg text-center lg:text-left">
        Preço de fundos imobiliarios direto no Notion.
      </h2>
      <Card className="w-full">
        <CardContent>
          <NotionDatabaseForm />
        </CardContent>
      </Card>
      <ConfigureNotionField className="w-full" />
      <Separator />
    </div>
  );
}
