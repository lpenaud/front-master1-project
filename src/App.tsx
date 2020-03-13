import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/bulma/hero/hero";
import Body from "./components/body";
import "./app.css";

export default function App() {
  return (
    <Router>
      <Hero mainColor="is-light" height="is-fullheight">
        <Header />
        <Body />
        <Footer />
      </Hero>
    </Router>
  );
}
