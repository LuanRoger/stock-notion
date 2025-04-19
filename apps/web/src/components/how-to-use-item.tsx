import { ReactNode } from "react";

interface HowToUseItemProps {
  title: string;
  step: number;
  description: ReactNode;
}

export default function HowToUseItem({
  title,
  step,
  description,
}: HowToUseItemProps) {
  return (
    <span>
      <HowToUseItemIndicator title={title} step={step} />
      <span className="mx-3">{description}</span>
    </span>
  );
}

interface HowToUseItemIndicatorProps {
  title: string;
  step: number;
}

export function HowToUseItemIndicator({
  title,
  step,
}: HowToUseItemIndicatorProps) {
  return (
    <h3 className="font-bold font-serif text-xl">{`${step}. ${title}`}</h3>
  );
}
