import React from "react";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { MobileNavbar } from "./components/mobile/MobileNavbar";
import RoutesHandler from "./routers/RoutesHandler";

export default function App() {
  return (
    <>
      <Header />
      <MobileNavbar />
      <Layout>
        <RoutesHandler />
      </Layout>
    </>
  );
}
