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
import ScrollToTop from "./components/ScrollToTop";
import FeedbackForm from "./pages/FeedbackForm";
function App() {
  return (

    <BrowserRouter>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
        <Route index element={<Home/>}/>
          <Route path={'about'} element={<About/>}></Route>
          <Route path={'our-work'} element={<Gallery/>}></Route>
          <Route path={'contact'} element={<Contact/>}></Route>
          <Route path={'faqs'} element={<FAQs/>}></Route>
          <Route path={'services'} element={<ServiceForm/>}></Route>
          <Route path={'feedback'} element={<FeedbackForm/>}></Route>
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
