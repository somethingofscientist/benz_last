import React from 'react'
import styles from './Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Labels_Secondary = () => {

  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      page_link: "/secondary-label-plastic",
      heading: "Plastic",
      image: vci_film,
      isSlider: true,
      content: "Welcome to Benz Packaging, your trusted provider of high-quality plastic packaging solutions. We specialize in offering a wide range of plastic packaging products designed to meet your specific needs and requirements. With our commitment to excellence and customer satisfaction, we provide reliable and innovative plastic packaging solutions for various industries.At Benz Packaging, we understand the importance of plastic packaging in preserving and protecting products. That's why we offer a comprehensive selection of plastic packaging options that are known for their durability, versatility, and functionality. Whether you need plastic containers, bottles, pouches, or other packaging solutions, we have the right products to suit your needs.",
      subProducts: [
        {
          image: tape,
          items: "PP Clear Labels",
          item_text: "High-Quality PP Clear Labels for Transparent and Professional Branding",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Pearls PET Labels",
          item_text: "Pearlescent PET Labels for Elegant and Eye-Catching Branding",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "PVC Labels",
          item_text: "High-Quality PVC Labels for Durable and Vibrant Branding",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Foil Labels",
          item_text: "Premium Foil Labels for Luxurious and Eye-Catching Branding",
          date: "8 June 2023"
        },
      ]
    },
    {
      number: "2",
      page_link: "/secondary-label-paper",
      heading: "Paper",
      image: vci_film,
      isSlider: true,
      content: "Welcome to Benz Packaging, your trusted provider of sustainable and versatile paper packaging solutions. We offer a wide range of paper-based packaging products designed to meet your specific needs and promote eco-friendly practices. With our high-quality paper materials and customizable options, we provide packaging solutions that are both functional and environmentally conscious.At Benz Packaging, we understand the importance of sustainable packaging in today's world. That's why we offer a comprehensive selection of paper-based packaging options to help reduce the environmental impact of your business. Our paper products are sourced from responsibly managed forests and are produced using eco-friendly manufacturing processes.",
      subProducts: [
        {
          image: tape,
          items: "Chromo Printed",
          item_text: "Vibrant and High-Quality Chromo Printed Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "DT Labels",
          item_text: "Dynamic and Eye-Catching DT Labels for Enhanced Branding",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Barcode Labels",
          item_text: "Accurate and Reliable Barcode Labels for Efficient Product Tracking",
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
          {t("Labels")}
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

export default Labels_Secondary;