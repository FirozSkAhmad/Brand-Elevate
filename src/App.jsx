import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Routing from "./Routing";
import Portfolio from "./components/portfolio/Portfolio";
// import { CursorProvider } from "./context/CursorContext";
import AboutUs from "./components/about/AboutUs";
import Blog from "./components/blog/Blog";
import Terms from "./components/terms/Terms";
import Team from "./components/team/Team";
import ContactUs from "./components/contact/ContactUs";
import PortfolioSingle from "./components/PortfolioSingle";
import BlogPost from "../src/components/BlogPost";
import SharedState from "../src/context/SharedState";

// import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <SharedState>
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
          <Route path="PortfolioSingle" element={<PortfolioSingle />} />
          <Route path="blogpost" element={<BlogPost />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </SharedState>
  );
}

export default App;
