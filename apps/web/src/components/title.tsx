import { DatabaseIcon } from "lucide-react";

export default function Title() {
  return (
    <h1 className="inline-flex gap-2 items-center font-bold text-3xl">
      <DatabaseIcon size={32} />
      Stock
    </h1>
  );
}
