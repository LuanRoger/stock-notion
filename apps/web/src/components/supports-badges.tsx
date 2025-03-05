import { Badge } from "./ui/badge";

export default function SupportsBadges() {
  return (
    <div className="flex flex-row items-center gap-2">
      <Badge>FII</Badge>
      <Badge>FIAGRO</Badge>
    </div>
  );
}