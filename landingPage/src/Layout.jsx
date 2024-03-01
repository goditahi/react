import React from "react";
import { Outlet } from "react-router-dom";
import Headers from "./Components/Headers";
import Footer from "./Components/Footer";

const Layout = () => {
  return (
    <>
      <Headers />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
