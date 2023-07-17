import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";



function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/Menu" element={<Menu />} />
       <Route path="/about" element={<About />} />
       
      

     </Routes>
     </BrowserRouter>
      </>
  );
}

export default App;

