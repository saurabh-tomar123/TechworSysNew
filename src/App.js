import React from "react";
import Header from "./components/Header";
import './index.css'
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ overflowX: "hidden"}} >
 <Header />
 <Hero />
 <Footer />
    </div>
  );
}

export default App;
