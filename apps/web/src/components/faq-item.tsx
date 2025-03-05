import { ReactNode } from "react";

interface FaqItemProps {
  title: string;
  description: ReactNode;
}

export default function FaqItem({ title, description }: FaqItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <span className="inline-flex items-center gap-1">
        <FaqItemIndicator />
        <h2 className="font-bold">{title}</h2>
      </span>
      <span className="text-sm text-muted-foreground mx-3">{description}</span>
    </div>
  );
}

function FaqItemIndicator() {
  return <div className="size-2 rounded-full ring-1 ring-primary" />;
}
