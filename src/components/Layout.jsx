import React from "react";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <main className="flex layout-wrapper">
      <Sidebar />
      <div className="w-full">{children}</div>
    </main>
  );
}
