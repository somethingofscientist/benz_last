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
import Services from "./screens/services/Services";
import Resource from "./screens/resource/Resource";
import News from "./screens/news/News";
import Contact_Page from "./screens/contact__page/ContactPage";
import { ToastContainer, toast } from "react-toastify";


import Descicannt from "./screens/subProducts/desiccants/Desiccants.jsx";
import Vacuums from "./screens/subProducts/vacuums/Vacuums";
import Indicators from "./screens/subProducts/indicators/Indicators";


import Vci_Films from "./screens/subProducts/vci-film/Vci_film";
import Vci_papers from "./screens/subProducts/vci-paper/Vci_paper";
import Vci_emitters from "./screens/subProducts/vci-emitters/Vci_emitters";
import Rp_oils from "./screens/subProducts/rp-oils/Rp_oils";
import Rust_removers from "./screens/subProducts/rust-removers/Rust_removers";
import Paper_System from "./screens/subProducts/paper-systems/Paper_system";
import Inflatable_air from "./screens/subProducts/inflatable-air/Inflatable_air";
import Foam_system from "./screens/subProducts/foam-system/Vacuums";
import Mailer_system from "./screens/subProducts/mailer-system/Vacuums";
import Protective_paper_roll from "./screens/subProducts/protective-paper-roll/Vacuums";
import Boxes from "./screens/subProducts/boxes/Vci_film";
import Rolls_pouches from "./screens/subProducts/rolls-pouches/Vci_film";
import Ldpe from "./screens/subProducts/ldpe/Vci_film";
import More_more from "./screens/subProducts/more-more/Vci_film";



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
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resource />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact_page" element={<Contact_Page />} />

        {/* anti humidity */}
        <Route path="/descicants" element={<Descicannt />} />
        <Route path="/indicators" element={<Indicators />} />
        <Route path="/vacuum" element={<Vacuums />} />

        {/* anti corrosion */}
        <Route path="/vci-film" element={<Vci_Films />} />
        <Route path="/vci-paper" element={<Vci_papers />} />
        <Route path="/vci-emitters" element={<Vci_emitters />} />
        <Route path="/rp-oils" element={<Rp_oils />} />
        <Route path="/rust-removers" element={<Rust_removers />} />

        {/* handling */}
        <Route path="/paper-system" element={<Paper_System />} />
        <Route path="/inflatable-air-systems" element={<Inflatable_air />} />
        <Route path="/foam-systems" element={<Foam_system />} />
        <Route path="/mailer-systems" element={<Mailer_system />} />
        <Route path="/protective-paper" element={<Protective_paper_roll />} />

        {/* traditional packaging */}
        <Route path="/boxes" element={<Boxes />} />
        <Route path="/rolls-pouches" element={<Rolls_pouches />} />
        <Route path="/ldpe" element={<Ldpe />} />
        <Route path="/more-more" element={<More_more />} />


      </Routes>
      <Footer />
      <Contact />

      <ToastContainer />
    </>
  );
}

export default App;
