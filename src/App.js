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

import Secondary_products from "./components/secondary-products/Secondary_prod";
import Boxes_Secondary from "./components/secondary-products/boxes/first_containers/FirstContainer_Des_Pack";
import Paper_box from "./components/secondary-products/boxes/paper-box/Paper_box";
import Wooden_box from "./components/secondary-products/boxes/wooden-box/Wooden_box";
import Plastic_box from "./components/secondary-products/boxes/plastic-box/Plastic_box";
import Secondary_Tapes from "./components/secondary-products/tapes/Secondary_Tapes";
import Secondary_ldpe from "./components/secondary-products/ldpe/Secondary_ldpe";
import Secondary_Lables from "./components/secondary-products/labels/plastic/Label_Plastic";
import Secondary_pouches_Rolls from "./components/secondary-products/pouches_rolls/mono-layer/Mono_Layer";
import Labels_Secondary from "./components/secondary-products/labels/first_containers/FirstContainer_Des_Pack";
import Label_Plastic from "./components/secondary-products/labels/plastic/Label_Plastic";
import Label_paper from "./components/secondary-products/labels/paper/Label_Paper";
import Pouches_Rolls_Secondary from "./components/secondary-products/pouches_rolls/first_containers/FirstContainer_Des_Pack";
import Mono_Layer from "./components/secondary-products/pouches_rolls/mono-layer/Mono_Layer";
import Multi_Layer from "./components/secondary-products/pouches_rolls/multi-layer/Multi_Layer";
import Secondary_others from "./components/secondary-products/others/Secondary_others";
import Secondary_blister from "./components/secondary-products/blister-tray/Secondary_blister";
import Secondary_benzepolene from "./components/secondary-products/benzepolene/Secondary_benze";
import Contract_packaging from "./components/industry_compo/contract_packaging_industry/Contract_packaging";
import Contract_packaging_sec from "./components/secondary-products/contract-packaging/first_containers/FirstContainer_Des_Pack";
import Secondary_export from "./components/secondary-products/contract-packaging/export-pack/Export";
import Stretch_Films_Secondary from "./components/secondary-products/stretch-film/first_containers/FirstContainer_Des_Pack";
import MachineGrade from "./components/secondary-products/stretch-film/machine-grade/MachineGrade";


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



        {/* Secondary Products */}
        {/* ---> boxes */}
        <Route path="/secondary-products" element={<Secondary_products />} />
        <Route path="/secondary-boxes" element={<Boxes_Secondary />} />
        <Route path="/secondary-boxes-wooden" element={<Wooden_box />} />
        <Route path="/secondary-boxes-paper" element={<Paper_box />} />
        <Route path="/secondary-boxes-plastic" element={<Plastic_box />} />

        {/* ---> tapes */}
        <Route path="/secondary-tapes" element={<Secondary_Tapes />} />

        {/* ---> labels */}
        <Route path="/secondary-labels" element={<Labels_Secondary />} />
        <Route path="/secondary-label-plastic" element={<Label_Plastic />} />
        <Route path="/secondary-label-paper" element={<Label_paper />} />

        {/* ---> Pouches & Rolls */}
        <Route path="/secondary-rolls" element={<Pouches_Rolls_Secondary />} />
        <Route path="/secondary-rolls-mono" element={<Mono_Layer />} />
        <Route path="/secondary-rolls-multi" element={<Multi_Layer />} />

        {/* ---> ldpe */}
        <Route path="/secondary-ldpe" element={<Secondary_ldpe />} />

        {/* ---> others */}
        <Route path="/secondary-others" element={<Secondary_others />} />

        {/* ---> blister tray */}
        <Route path="/secondary-blister" element={<Secondary_blister />} />

        {/* ---> benzepolene */}
        <Route path="/secondary-benze" element={<Secondary_benzepolene/>} />

        {/* ---> stretch-film */}
        <Route path="/secondary-stretch-film" element={<Stretch_Films_Secondary />} />
        <Route path="/secondary-stretch-film-main" element={<MachineGrade />} />

        {/* ---> contract-packaging */}
        <Route path="/secondary-contract-packaging" element={<Contract_packaging_sec/>} />
        <Route path="/secondary-contract-packaging-items" element={<Secondary_export/>} />


      </Routes>
      <Footer />
      <Contact />

      <ToastContainer />
    </>
  );
}

export default App;
