import logo from "./logo.svg";
import { Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Homepage from "./screens/homepage/Homepage";
import About from "./screens/about_us/About";
import Product from "./screens/product/Product";
import Industry from "./screens/industry/Industry";
import Industries from "./components/home_compo/industries/Industries";
import Navbar from "./components/home_compo/navbar/Navbar";
import Footer from "./components/home_compo/footer/Footer";
import Contact from "./components/home_compo/contact_us_button/Contact";
import Descicannt from "./screens/desiccants/Desiccants.jsx";
import Services from "./screens/services/Services";
import Resource from "./screens/resource/Resource";
import News from "./screens/news/News";
import { useState } from "react";
import { useEffect } from "react";
import Contact_Page from "./screens/contact__page/ContactPage";


function App() {

  return (
    <>
      {/* <Homepage /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/industry" element={<Industry />} />
        <Route path="/products" element={<Product />} />
        <Route path="/descicants" element={<Descicannt />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resource />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact_page" element={<Contact_Page />} />
      </Routes>
      <Footer />
      <Contact />
    </>
  );
}

export default App;
