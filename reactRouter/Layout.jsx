import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./src/Components/Navbar";
import Footer from "./src/Components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
