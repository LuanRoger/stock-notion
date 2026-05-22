import NotionDataSourceForm from "./notion-data-source-form";
import { NotionDataSourceHistory } from "./notion-data-source-history";
import NotionUpdateStatus from "./notion-update-status";

export function UpdateNotionSection() {
  return (
    <div className="flex flex-col gap-2">
      <NotionDataSourceForm />
      <NotionUpdateStatus className="self-start" />
      <NotionDataSourceHistory />
    </div>
  );
}
