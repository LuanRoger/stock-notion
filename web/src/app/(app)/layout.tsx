import AppSidebar from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider open>
      <AppSidebar />
      <main className="p-4">{children}</main>
    </SidebarProvider>
  );
}
