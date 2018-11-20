import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../../components/Home/Home";
export default function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <div className="container">
          <Route path="/" exact component={Home} />
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}
