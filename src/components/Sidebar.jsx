import React from "react";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();
  const hiddenPath = ["/login", "/signup", "/join"];
  return (
    <div
      className={`sticky top-[4rem] hidden h-[calc(100vh-4rem)] w-[284px] md:flex md:shrink-0 md:flex-col md:justify-between bg-hcl-slate ${
        hiddenPath.includes(pathname) && "md:hidden"
      }`}
    >
      <div className="text-white px-4">
        <ul>
          <li>home </li>
          <li>home </li>
          <li>home </li>
          <li>home </li>
          <li>home </li>
        </ul>
      </div>
    </div>
  );
}
