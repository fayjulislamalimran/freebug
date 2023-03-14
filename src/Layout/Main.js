import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer.js";
import Navbar from "../Shared/Navbar/Navbar.js";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
