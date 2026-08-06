import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <div className="flex-1 p-6">
        <TopBar />
        {children}
      </div>
    </div>
  );
}