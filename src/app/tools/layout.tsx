import TopBar from "@/ui/topbar";
import SideNav from "@/ui/tools/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-[family-name:var(--font-main)]">
      <TopBar />
      <div className="flex flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
          <div className="flex-grow p-6 md:overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}