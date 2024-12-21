import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <main className="flex layout-wrapper font-hcl bg-hch-gray">
      <Sidebar />
      <div className="w-full">{children}</div>
    </main>
  );
}
