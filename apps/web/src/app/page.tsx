import Sections from "@/components/sections";
import Title from "@/components/title";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Title className="px-16 mb-16" />
      <Sections />
      <Separator />
    </div>
  );
}
