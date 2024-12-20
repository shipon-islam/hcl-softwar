// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "hcl-slate": "#203055",
        "hcl-teal": "#184680",
        "hcl-purple": "#551A8B",
        "hcl-blue": "#0086FF",
        "hcl-black": "#17182E",
        "hcl-gray": "#292929",
        "hch-slate-2": "#1C3366",
      },
      boxShadow: {
        custom: "-1px 2px 4px 1.5px rgba(67, 97, 166, 0.04)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
