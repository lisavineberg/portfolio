import React from "react";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <header>
        <Nav />
      </header>
      <main>
        {children}
      </main>
    </React.Fragment>
  )
}

export default Layout;
