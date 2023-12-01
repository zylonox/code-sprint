import React from "react";
import { Toaster } from "react-hot-toast";

import Footer from "./Footer";
import Header from "./Header";
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "50vh" }}>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
