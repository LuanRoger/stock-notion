import ConfigureNotionField from "@/components/configure-notion-fields";
import HowToUseSection from "@/components/how-to-use-section";
import NotionDatabaseForm from "@/components/notion-database-form";
import Subtitle from "@/components/subtitle";
import Title from "@/components/title";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col items-center gap-2">
        <Title className="text-center" />
        <Subtitle />
      </div>
      <Card className="w-full">
        <CardContent>
          <NotionDatabaseForm />
        </CardContent>
      </Card>
      <ConfigureNotionField className="w-full" />
      <Separator />
      <HowToUseSection />
      <Separator />
    </div>
  );
}
