import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home/Home";
import Routing from "./Routing";
import Portfolio from "./components/portfolio/Portfolio";
// import { CursorProvider } from "./context/CursorContext";
import AboutUs from "./components/about/AboutUs";
import Blog from "./components/blog/Blog";
import Terms from "./components/terms/Terms";
import Team from "./components/team/Team";
import ContactUs from "./components/contact/ContactUs";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Routing />} />
        <Route index element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="terms" element={<Terms />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<ContactUs />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
