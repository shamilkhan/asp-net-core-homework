import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./header";
import Content from "./content";
import Routing from "./routing";

function Index() {
  return (
    <Router>
      <Header />
      <Content>
        <Routing />
      </Content>
    </Router>
  );
}

export default Index;
