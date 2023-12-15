import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Home } from "./pages/home";
import { AboutUs } from './pages/about_us';
import { Contact } from './pages/contact';
import { Footer } from './components/footer';


function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className='h-[80vh]'>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
