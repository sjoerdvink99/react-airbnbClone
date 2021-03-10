import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

const tijd = "02.05.00";

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
