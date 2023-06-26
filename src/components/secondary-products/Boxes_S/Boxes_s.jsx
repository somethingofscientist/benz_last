import React from 'react'
import styles from './Boxes.module.css';
import engine from '../../images/engine.svg';
import Slider from '../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../images/tape.svg'
import rp_oils from '../../images/rp_oils.jpeg'
import vci_film from '../../images/film_sheet1.jpeg'
import header_heading from '../../images/des_heading.svg';


const Boxex_s = () => {
  const arr = [
    {
      number: "1",
      page_link: "/secondary-boxes",
      heading: "Boxes",
      image: vci_film,
      isSlider: true,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
      subProducts: [
        {
          image: tape,
          items: "Wooden",
          item_text: "Benz Packaging - VCI Bio-Film: Environmentally Friendly Corrosion Protection",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Paper",
          item_text: "Benz Packaging - VCI Film: Advanced Corrosion Protection for Your Products",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Plastic",
          item_text: "Benz Packaging - VCI Stretch Film: Advanced Corrosion Protection with Stretchability",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "2 ",
      page_link: "/vci-paper",
      heading: "Tapes",
      image: engine,
      isSlider: true,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
      subProducts: [
        {
          image: tape,
          items: "Laminated Paper",
          item_text: "Benz Packaging - Laminated Paper: Enhanced Protection and Versatility for Your Packaging Needs",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "VCI Plain Paper",
          item_text: "Benz Packaging - VCI Plain Paper: Reliable Corrosion Protection in a Simple and Versatile Form",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "VCI Crepe Paper",
          item_text: "Benz Packaging - VCI Crepe Paper: Flexible Corrosion Protection with Enhanced Conformability",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "VCI Chips",
          item_text: "Benz Packaging - VCI Crepe Paper: Flexible Corrosion Protection with Creped Texture",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "VCI HD Paper ",
          item_text: "Benz Packaging - VCI HD Paper: Heavy-Duty Corrosion Protection for Demanding Applications",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "3",
      page_link: "/vci-emitters",
      heading: "Labels",
      image: engine,
      isSlider: true,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
      subProducts: [
        {
          image: tape,
          items: "VCI 25",
          item_text: "Benz Packaging - VCI 25: Long-Lasting Corrosion Protection for Metals",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Propatech VCI emitter",
          item_text: "Benz Packaging - Propatech VCI Emitter: Advanced Corrosion Protection with Controlled Emission",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "VCI Tablets",
          item_text: "Benz Packaging - VCI Tablets: Convenient Corrosion Protection for Metal Products",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "VCI Foam",
          item_text: "Benz Packaging - VCI Foam: Versatile Corrosion Protection with Cushioning Properties",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "VCI Noxy",
          item_text: "Benz Packaging - VCI Noxy: Advanced Corrosion Protection for Ferrous and Non-Ferrous Metals",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "4",
      page_link: "/rp-oils",
      heading: "Pouches & Rolls",
      image: rp_oils,
      isSlider: true,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
      subProducts: [
        {
          image: tape,
          items: "Short Term",
          item_text: "Benz Packaging - RP Oils Short Term: Temporary Lubrication for Various Applications",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Medium Term",
          item_text: "Benz Packaging - RP Oils Medium Term: Reliable Lubrication for Intermediate Durations",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Long Term",
          item_text: "Benz Packaging - RP Oils Long Term: Extended Protection for Long-Term Lubrication",
          date: "8 June 2023"
        }
      ]
    },
    {
      number: "5",
      page_link: "/rust-removers",
      heading: "LDPE Bags",
      image: engine,
      isSlider: true,
      content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
      subProducts: [
        {
          image: tape,
          items: "Acidic",
          item_text: "Benz Packaging - Acidic Rust Removers: Powerful Solutions for Stubborn Rust Removal",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Neutral",
          item_text: "Benz Packaging - Neutral Rust Removers: Safe and Effective Solutions for Rust Removal",
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
          Secondary products
        </div>
      </div>
      {
        arr.map((item) => (
          <div className={styles.automobile_container} id='section3'>
            <div className={styles.auto_heading}>
              <div className={styles.auto_number}>{item.number}</div>
              <div className={styles.auto_letter}>{item.heading} </div>
            </div>

            <div className={styles.auto_img_container}>
              <div className={styles.auto_img}>
                <img src={item.image} alt="engine" />

                <Link to={item.page_link}>
                  <div className={styles.auto_pack}>
                    Pack With Us
                  </div>
                </Link>
              </div>
              <div className={styles.auto_img_text}>{item.content}</div>
            </div>

            {
              item.isSlider && <Slider subProducts={item.subProducts} />
            }
          </div>
        ))
      }
    </>
  )
}

export default Boxex_s