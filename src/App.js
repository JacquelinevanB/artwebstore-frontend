import React from 'react';
import './App.css';
import Navigation from "./layouts/nav-and-footer/Navigation";
import Homepage from "./layouts/homepage/Homepage";
import Footer from "./layouts/nav-and-footer/Footer";

function App() {
  return (
    <>
        <Navigation/>
        <Homepage/>
        <Footer/>
    </>
  );
}

export default App;
