import React from 'react'
import styles from './Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Boxes_Secondary = () => {

  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      page_link: "/secondary-boxes-wooden",
      heading: "Wooden",
      image: vci_film,
      isSlider: true,
      content: "Packaging plays a vital role in creating a lasting impression and enhancing the perceived value of a product. Benz Packaging, a leading provider of packaging solutions, offers a range of exquisite wooden packaging options that combine elegance, functionality, and sustainability. In this blog post, we will explore the world of Benz Packaging's wooden packaging, highlighting its features, benefits, and how it can elevate your packaging strategy.",
      subProducts: [
        {
          image: tape,
          items: "Ply wood Boxes",
          item_text: "Benz Packaging - Plywood Boxes Durable and Versatile Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Nailess Boxes",
          item_text: "Benz Packaging - Nailess Boxes Effortless Assembly for Convenient Packaging",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "wooden pallets",
          item_text: "Benz Packaging - Wooden Pallets Enhancing Efficiency and Safety in Material Handling",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Pine Wood boxes",
          item_text: "Benz Packaging - Pine Wood Boxes Timeless Elegance and Reliable Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Jungle Wood boxes",
          item_text: "Benz Packaging - Jungle Wood Boxes Exotic and Sustainable Packaging Solutions",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "2",
      page_link: "/secondary-boxes-paper",
      heading: "Paper",
      image: vci_film,
      isSlider: true,
      content: "In the realm of packaging, sustainability and versatility are becoming increasingly important considerations. Benz Packaging offers a wide range of paper packaging solutions that combine eco-friendliness with adaptability. In this blog post, we will explore the features and benefits of Benz Packaging's paper packaging options, highlighting their sustainable nature, versatility, and ability to cater to diverse packaging needs.",
      subProducts: [
        {
          image: tape,
          items: "5 Ply Corrugated Boxes",
          item_text: "5 Ply Corrugated Boxes - Benz Packaging Reliable and Versatile Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Duplex Mono-Carton",
          item_text: "Benz Packaging - Duplex Mono-Carton Superior Strength and Visual Appeal",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "3 Ply Corrugated Box",
          item_text: "Superior protection The triple-layered construction of our 3 Ply Corrugated Box provides robust protection for your products, safeguarding them against damage and ensuring their integrity.",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Honeycomb Boxes",
          item_text: "Superior protection The honeycomb structure of our boxes offers excellent shock absorption and impact resistance, providing reliable protection for your goods. This ensures that your products arrive in pristine condition, minimizing the risk of damage.",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "3",
      page_link: "/secondary-boxes-plastic",
      heading: "Plastic ",
      image: vci_film,
      isSlider: true,
      content: "Welcome to Benz Packaging, your trusted provider of plastic packaging solutions. We offer a wide range of plastic packaging options designed to meet the diverse needs of various industries. With our high-quality plastic packaging solutions, you can ensure the safe storage, transportation, and presentation of your products.",
      subProducts: [
        {
          image: tape,
          items: "PP Bins",
          item_text: "Benz Packaging - PP Bins for Efficient Storage and Organization",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Plastic Crates",
          item_text: "Welcome to Benz Packaging, your trusted provider of high-quality plastic crates. Our plastic crates are designed to offer secure and efficient storage solutions for wide range of industries and applications. With their durability, versatility, and practicality, our plastic crates are the ideal choice for optimizing your storage and transportation processes.",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Foldable Bins",
          item_text: "Benz Packaging - Foldable Bins for Convenient Storage and Transportation",
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
          {t("Boxes")}
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

export default Boxes_Secondary;