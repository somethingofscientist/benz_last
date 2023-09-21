import React from 'react'
import styles from './Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Pouches_Rolls_Secondary = () => {

  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      page_link: "/secondary-rolls-mono",
      heading: "Mono Layer Pouches",
      image: vci_film,
      isSlider: true,
      content: "Welcome to BENZ Packaging, your trusted provider of mono layer pouches for simplified packaging solutions. Our mono layer pouches are designed to offer straightforward and efficient packaging options while maintaining product integrity and freshness. With their simplicity and versatility, our mono layer pouches are an ideal choice for various industries and applications.",
      subProducts: [
        {
          image: tape,
          items: "LDPE Pouches",
          item_text: "LDPE Pouches for Flexible and Durable Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "PP Pouches",
          item_text: "PP Pouches for Reliable and Secure Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "HDPE Pouches",
          item_text: "HDPE Pouches for Secure and Sustainable Packaging Solutions",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "2",
      page_link: "/secondary-rolls-multi",
      heading: "Multi Layer Laminate Pouches",
      image: vci_film,
      isSlider: true,
      content: "Welcome to BENZ Packaging, your trusted provider of multi-layer laminate pouches for advanced packaging solutions. Our multi-layer laminate pouches are designed to offer superior performance, exceptional product protection, and extended shelf life for a wide range of products. With their advanced construction and versatile features, our multi-layer laminate pouches are an ideal choice for various industries and applications.",
      subProducts: [
        {
          image: tape,
          items: "Mono Layer Pouches",
          item_text: "Mono Layer Pouches for Simple and Efficient Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Co-Extruded Laminate Pouches",
          item_text: "Co-Extruded Laminate Pouches for Enhanced Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Foil Laminates",
          item_text: "Foil Laminates for Premium Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Custom Engineered Laminates",
          item_text: "Custom Engineered Laminates for Tailored Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Adhesive Laminate Pouches",
          item_text: "Adhesive Laminate Pouches for Secure and Convenient Packaging",
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
          {t("Pouches & Rolls")}
        </div>
      </div>
      {
        arr.map((item) => (
          <div className={styles.automobile_container} id='section3'>
            <div className={styles.auto_heading}>
              <div className={styles.auto_number}>{item.number}</div>
              <div className={styles.auto_letter}>{t(`${item.heading}`)}</div>
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
              <div className={styles.auto_img_text}>{t(`${item.content}`)}</div>
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

export default Pouches_Rolls_Secondary;