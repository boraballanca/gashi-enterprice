import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Navbar from "./pages/Navbar";
import Footer from './pages/Footer'
import Contact from "./pages/Contact";
import FAQs from "./components/FAQs";
import ServiceForm from "./pages/ServiceForm"
function App() {
  return (

    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
          <Route path={'about'} element={<About/>}></Route>
          <Route path={'gallery'} element={<Gallery/>}></Route>
          <Route path={'contact'} element={<Contact/>}></Route>
          <Route path={'faqs'} element={<FAQs/>}></Route>
          <Route path={'service'} element={<ServiceForm/>}></Route>
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
