import React from "react";
import Navbar from "../components/Navbar";
import Router from "../routes/Router";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div>
      {/* nav and footer always appear in every page */}
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
};

export default Layout;
