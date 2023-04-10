import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Footer from './pages/Footer'
function App() {
  return (

    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
