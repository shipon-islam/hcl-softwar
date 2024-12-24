import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <main className="flex layout-wrapper font-hcl bg-hcl-bg text-hcl-primary">
      <Sidebar />
      <div className="w-full">{children}</div>
    </main>
  );
}
