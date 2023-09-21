import React from 'react'
import styles from './Descicannt.module.css'
import Slider from '../../../product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../images/tape.svg'
import vci_film from '../../../images/film_sheet1.jpeg'
import header_heading from '../../../images/des_heading.svg';
import { useTranslation } from 'react-i18next';


const Stretch_Films_Secondary = () => {
  
  const { t, i18n } = useTranslation();

  const arr = [
    {
      number: "1",
      page_link: "/secondary-stretch-film-main",
      heading: "Hand Grade Stretch Film",
      image: vci_film,
      isSlider: true,
      content: "Welcome to BENZ Packaging, your trusted supplier of high-quality hand grade stretch film. Our hand grade stretch film is designed specifically for manual applications, providing an easy-to-use packaging solution for various industries and needs. With BENZ Packaging, you can rely on our hand grade stretch film to securely wrap and protect your products with convenience and efficiency.",
      subProducts: [
        {
          image: tape,
          items: "PreStretch Film",
          item_text: "PreStretch Film: Advanced Packaging Solution for Optimal Load Stability",
          date: "8 June 2023"
        },
        {
          image: tape,
          items: "Machine Grade Stretch Film",
          item_text: "Machine Grade Stretch Film Optimal Packaging Solution for Automated Applications",
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
          {t("Stretch Films")}
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

export default Stretch_Films_Secondary;