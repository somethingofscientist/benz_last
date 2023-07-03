import React from 'react'
import styles from './Boxes.module.css';
import engine from '../../images/engine.svg';
import Slider from '../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../images/tape.svg'
import rp_oils from '../../images/rp_oils.jpeg'
import vci_film from '../../images/film_sheet1.jpeg'
import header_heading from '../../images/des_heading.svg';
import main_tapes from '../../images/main_tapes.jpg';
import { useTranslation } from 'react-i18next';


const Boxex_s = () => {

  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      page_link: "/secondary-boxes",
      heading: "Boxes",
      image: vci_film,
      isSlider: true,
      content: "At Benz Packaging, we offer customization options to meet your specific needs. Our boxes can be tailored in terms of size, shape, and design. Whether you require plain boxes for shipping or custom-printed boxes to promote your brand, we have the capabilities to fulfill your requirements.",
      subProducts: [
        {
          image: tape,
          items: "Wooden",
          item_text: "Benz Packaging - Wooden Packaging: Reliable and Sustainable Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Paper",
          item_text: "Benz Packaging - Wooden Packaging: Reliable and Sustainable Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Plastic",
          item_text: "Benz Packaging - Plastic: Durable and Flexible Packaging Solutions",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "2 ",
      page_link: "/secondary-tapes",
      heading: "Tapes",
      image: main_tapes,
      isSlider: true,
      content: "Welcome to Benz Packaging, your trusted provider of high-quality tapes for all your packaging needs. We offer a wide range of tapes designed to ensure secure and reliable packaging for various industries and applications. With our durable and versatile tapes, you can trust that your packages will be effectively sealed and protected.",
      subProducts: [
        {
          image: tape,
          items: "VCI HDPE Tapes",
          item_text: "VCI HDPE Tapes for Corrosion Protection and Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "BOPP Tapes",
          item_text: "BOPP Tapes for Secure and Reliable Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Paper Tapes",
          item_text: "Paper Tapes for Eco-Friendly Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Printed Tapes",
          item_text: "Printed Tapes for Branding and Security",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Low-VOC tapes",
          item_text: "Low-VOC Tapes for Environmentally Conscious Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Double Sided Tape",
          item_text: "Double-Sided Tape for Secure and Versatile Bonding",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Floor Marking Tapes",
          item_text: "Floor Marking Tapes for Safety and Organization",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "3",
      page_link: "/secondary-labels",
      heading: "Labels",
      image: engine,
      isSlider: true,
      content: "Welcome to Benz Packaging, your trusted provider of high-quality labels. Our labels are designed to offer clear identification, information, and branding solutions for a wide range of industries and products. With their superior print quality, durability, and customization options, our labels provide reliable and professional labeling solutions for your packaging needs.",
      subProducts: [
        {
          image: tape,
          items: "Plastic",
          item_text: "High-Quality Plastic Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Paper",
          item_text: "Sustainable and Versatile Paper Packaging Solutions",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "4",
      page_link: "/secondary-rolls",
      heading: "Pouches & Rolls",
      image: rp_oils,
      isSlider: true,
      content: "Welcome to Benz Packaging, your trusted provider of versatile and reliable pouches and rolls for all your packaging needs. We offer a wide range of packaging solutions in the form of pouches and rolls, designed to protect and preserve your products while providing convenience and flexibility in packaging.",
      subProducts: [
        {
          image: tape,
          items: "Mono Layer Pouches",
          item_text: "Mono Layer Pouches for Simple and Efficient Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Multi Layer Laminate Pouches",
          item_text: "Multi-Layer Laminate Pouches for Advanced Packaging Solutions",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "5",
      page_link: "/secondary-ldpe",
      heading: "LDPE Bags",
      image: engine,
      isSlider: true,
      content: "Welcome to Benz Packaging, your trusted provider of LDPE bags for reliable and versatile packaging solutions. Our LDPE (Low-Density Polyethylene) bags offer a wide range of benefits, including durability, flexibility, and excellent moisture resistance, making them an ideal choice for various industries and applications.",
      subProducts: [
        {
          image: tape,
          items: "Printed LD Bags",
          item_text: "Printed LD Bags for Customized Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Plain LD Bags",
          item_text: "Plain LD Bags for Reliable and Convenient Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Bags on Roll",
          item_text: "Perforated Bags on Roll for Convenient and Efficient Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Perforated Bags",
          item_text: "Perforated Bags for Easy Tear and Convenient Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Perforated Bags on Roll",
          item_text: "Perforated Bags on Roll for Convenient and Efficient Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Pre Open bags on Roll",
          item_text: "Pre-Opened Bags on Roll for Convenient and Efficient Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Pallet Covers",
          item_text: "Pallet Covers for Reliable Protection and Secure Shipping",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Stretch Films",
          item_text: "Stretch Films for Secure and Efficient Palletization",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Engine Covers",
          item_text: "Engine Covers for Superior Protection and Performance",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Garbage Bags",
          item_text: "Garbage Bags for Efficient Waste Management",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Zip Lock Bags",
          item_text: "Zip Lock Bags for Convenient and Secure Storage",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Bio Degradable Bags",
          item_text: "Biodegradable Bags for Eco-Friendly Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Compostable Bags",
          item_text: "Compostable Bags for Sustainable Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Mailer Bags",
          item_text: "Mailer Bags for Secure and Convenient Shipping",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Anti Static ESD Bags",
          item_text: "Anti-Static ESD Bags for Electrostatic Discharge Protection",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "6",
      page_link: "/secondary-others",
      heading: "Others",
      image: engine,
      isSlider: true,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
      subProducts: [
        {
          image: tape,
          items: "Ice Pack gels",
          item_text: "Ice Pack Gels for Reliable Temperature Control",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "7",
      page_link: "/secondary-blister",
      heading: "Blister Tray",
      image: engine,
      isSlider: true,
      content: "Welcome to Benz Packaging, your reliable source for high-quality blister trays. Our blister trays are designed to provide secure product display and protection, ensuring that your items are presented attractively and remain safe during transit and storage.",
      subProducts: [
        {
          image: tape,
          items: "APET Tray",
          item_text: "APET Trays for Secure Product Packaging and Display",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Food Grade PET Tray",
          item_text: "Food Grade PET Trays for Safe and Hygienic Food Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Injection Moulding Tray",
          item_text: "Injection Molding Trays for Efficient and Customized Product Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Thermoformed Tray",
          item_text: "Customized Packaging Solution for Product Protection and Display",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "8",
      page_link: "/secondary-benze",
      heading: "BENZpolene",
      image: engine,
      isSlider: true,
      content: "BENZpolene Sheets: Our BENZpolene sheets are designed for various applications, such as layering, cushioning, and separation. They offer superior strength and flexibility, making them ideal for protecting delicate items during transportation or storage. BENZpolene sheets are available in different thicknesses and sizes, and they can be custom-cut to meet your specific requirements. They are suitable for industries ranging from electronics and automotive to pharmaceuticals and cosmetics.",
      subProducts: [
        {
          image: tape,
          items: "Woven Tarpaulins",
          item_text: "Woven Tarpaulins: Durable and Versatile Protection for Your Outdoor Needs",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Cross Laminated Tarpaulin",
          item_text: "Cross Laminated Tarpaulin: Superior Strength and Durability for Heavy-Duty Protection",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "9",
      page_link: "/secondary-stretch-film",
      heading: "Stretch Film",
      image: engine,
      isSlider: true,
      content: "Our VCI Stretch Film combines the benefits of Volatile Corrosion Inhibitor (VCI) technology with the stretchability of film. This unique combination allows for easy application and excellent coverage around your products, ensuring maximum protection. The VCI molecules in the film create a protective shield, preventing the onset and progression of corrosion, while the stretchable nature of the film enables it to conform to different shapes and sizes.",
      subProducts: [
        {
          image: tape,
          items: "Hand Grade Stretch Film",
          item_text: "Easy-to-Use Packaging Solution for Manual Applications",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "10",
      page_link: "/secondary-contract-packaging",
      heading: "Contract Packaging",
      image: engine,
      isSlider: true,
      content: "Benz Packaging understands that every product is unique, and packaging plays a crucial role in its presentation, protection, and market appeal. That's why we offer comprehensive contract packaging services tailored to meet your specific requirements. With our expertise and state-of-the-art facilities, we can handle your packaging needs efficiently and effectively.",
      subProducts: [
        {
          image: tape,
          items: "Sea Worthy Packaging",
          item_text: "Benz Packaging - Sea Worthy Packaging: Protecting Your Products for Overseas Shipping",
          date: "8 June 2023"
        },
      ]
    },
  ]
  return (
    <>
      <div className={styles.header_bg}>
        <img src={header_heading} alt="" />
        <div className={styles.imageContainer}></div>
        <div className={styles.header}>
          {t("Secondary products")}
        </div>
      </div>
      {
        arr.map((item) => (
          <div className={styles.automobile_container} id='section3'>
            <div className={styles.auto_heading}>
              <div className={styles.auto_number}>{item.number}</div>
              <div className={styles.auto_letter}>
                {t(`${item.heading}`)}
              </div>
            </div>

            <div className={styles.auto_img_container}>
              <div className={styles.auto_img}>
                <img src={item.image} alt="engine" />

                <Link to={item.page_link}>
                  <div className={styles.auto_pack}>
                    {t("PACK WITH US")}
                  </div>
                </Link>
              </div>
              <div className={styles.auto_img_text}>
                {t(`${item.content}`)}
              </div>
            </div>

            {
              item.isSlider && <Slider subProducts={item.subProducts.map(subItem => ({ ...subItem, item_text: t(subItem.item_text) }))} />
            }
          </div>
        ))
      }
    </>
  )
}

export default Boxex_s