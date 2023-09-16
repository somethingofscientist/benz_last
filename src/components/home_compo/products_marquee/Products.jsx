import React, { useEffect, useRef, useState } from "react";
import styles from "./Product.module.css";
import Marquee from "react-fast-marquee";
import pic1 from "../../images/humidity.jpg";
import pic2 from "../../images/corrossion.jpg";
import pic3 from "../../images/handling.jpg";
import pic4 from "../../images/traditional.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


const Products = () => {
  const { t, i18n } = useTranslation();


  return (
    <>
      <div className={styles.product_container} >
        <div className={styles.products_tag}>
          <Marquee speed={200} loop={0}>
            <p>{t("Products")} &nbsp; </p>
            <p>{t("Products")} &nbsp; </p>
          </Marquee>
        </div>
        <div className={styles.card_container}>
          <Link to="/products/humidity">
            <div className={styles.card_up}>
              {/* <div className={styles.card_text}>{t("INDUSTRIAL")} </div> */}
              <div className={styles.card_subtext}>{t("Anti - Humidity")}</div>
              <img src={pic1} alt="pic1_humidity" />
              <div className={styles.card_icon}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
          </Link>
          <Link to="/products/corrosion">
            <div className={styles.card_down}>
              {/* <div className={styles.card_text}>{t("INDUSTRIAL")}</div> */}
              <div className={styles.card_subtext}>{t("Anti - Corrosion")}</div>
              <img src={pic2} alt="pic1_humidity" />
              <div className={styles.card_icon2}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
          </Link>
          <Link to="/products/handling">
            <div className={styles.card_up}>
              {/* <div className={styles.card_text}>{t("INDUSTRIAL")}</div> */}
              <div className={styles.card_subtext}>{t("Handling")} </div>
              <img src={pic3} alt="pic1_humidity" />
              <div className={styles.card_icon}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
          </Link>
          <Link to="/products/traditional">
            <div className={styles.card_down}>
              {/* <div className={styles.card_text}>{t("INDUSTRIAL")}</div> */}
              <div className={styles.card_subtext}>{t("Traditional Packaging")} </div>
              <img src={pic4} alt="pic1_humidity" />
              <div className={styles.card_icon2}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
          </Link>
        </div>
      </div>


      {/* view all industreis */}
      <div className={styles.view_all_container}>
        <Link to="/secondary-products">
          <div className={styles.view_all}>
            {t("View All Secondary Products")}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Products;
