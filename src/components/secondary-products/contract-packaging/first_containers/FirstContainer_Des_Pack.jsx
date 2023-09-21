import React from 'react'
import styles from './Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Contract_packaging_sec = () => {

  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      page_link: "/secondary-contract-packaging-items",
      heading: "Sea Worthy Packaging",
      image: vci_film,
      isSlider: true,
      content: "When it comes to shipping goods overseas, ensuring the safety and integrity of your products is paramount. BENZ Packaging specializes in sea-worthy packaging solutions that are specifically designed to withstand the rigors of long-distance transportation by sea. With our expertise in packaging and knowledge of international shipping requirements, we can provide you with reliable and robust packaging solutions for your export needs.",
      subProducts: [
        {
          image: tape,
          items: "Export Packaging",
          item_text: "BENZ Packaging - Export Packaging Secure Your Products for International Shipment",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Machine Packaging",
          item_text: "BENZ Packaging - Machine Packaging Efficient and Automated Packaging Solutions",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "On Site Packaging",
          item_text: "BENZ Packaging - On-Site Packaging Convenient and Efficient Packaging Services at Your Location",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Long Term Packaging",
          item_text: "BENZ Packaging - Long-Term Packaging Reliable Solutions for Extended Storage and Transportation",
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
          {t("Contract Packaging")}
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

export default Contract_packaging_sec;