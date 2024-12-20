import React from "react";

export default function Button({
  children,
  color = "bg-hcl-slate",
  className,
  ...rest
}) {
  return (
    <button
      className={`w-full  py-1.5 rounded-md hover:bg-slate-600 text-white capitalize ${color} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
