import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

function App() {
  return (

    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
