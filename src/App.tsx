import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Banner />
      <Navbar />
    </div>
  );
}

export default App;
