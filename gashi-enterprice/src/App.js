import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Navbar from "./pages/Navbar";
import Footer from './pages/Footer'
function App() {
  return (

    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
          <Route path={'about'} element={<About/>}></Route>
          <Route path={'gallery'} element={<Gallery/>}></Route>
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
