import React from "react";

import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./Components/About";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";


function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/Menu" element={<Menu />} />
      

     </Routes>
     </BrowserRouter>
      </>
  );
}

export default App;