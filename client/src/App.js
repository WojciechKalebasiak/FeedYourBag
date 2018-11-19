import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  componentDidMount() {
    axios.get("/api/current_user").then(data => {
      console.log(data);
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a href="/auth/google">Sign in With Google</a>
        </header>
      </div>
    );
  }
}

export default App;
