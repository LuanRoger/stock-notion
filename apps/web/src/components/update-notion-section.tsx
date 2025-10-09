import NotionDataSourceForm from "./notion-data-source-form";
import { NotionDataSourceHistory } from "./notion-data-source-history";

export function UpdateNotionSection() {
  return (
    <div className="flex flex-col">
      <NotionDataSourceForm />
      <NotionDataSourceHistory />
    </div>
  )
}