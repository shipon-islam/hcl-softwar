/* eslint-disable react/prop-types */
import React from "react";

export default function TextInput({ className = "", ...rest }) {
  return (
    <input
      {...rest}
      className={`shadow-custom outline-none focus:border-none focus:outline-none border-none py-2 w-full rounded-md pl-4 placeholder:text-gray-400 ${className}`}
    />
  );
}
