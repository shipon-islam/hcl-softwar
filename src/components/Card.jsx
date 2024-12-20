/* eslint-disable react/prop-types */
import React from "react";

export default function Card({ children, className }) {
  return <div className={`p-10 ${className}`}>{children}</div>;
}
