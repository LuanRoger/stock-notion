import NotionSettingsForm from "@/components/notion-settings-form";

export default function Settings() {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-lg">Settings</h1>
      <NotionSettingsForm />
    </div>
  );
}
