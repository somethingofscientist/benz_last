import React from "react";
import styles from "./Global.module.css";
import worker from "../../images/box_fact.jpg";
import oldman from "../../images/oldman.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const Global = () => {
  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
  }
  return (
    <>
      <div className={styles.map_flexbox}>
        <div className={styles.map_heading}>{t("Global reach, local impact.")}</div>
        <div className={styles.map_sub_heading}>{t("At BENZ Packaging, our global reach and local impact define our commitment. We provide innovative packaging solutions worldwide, with a focus on sustainability and community engagement. Experience excellence in packaging that makes a difference in your neighbourhood and beyond.")}
        </div>
      </div>
      <div className={styles.global_container}>
        <div className={styles.global_image_container}>
          <img src={oldman} alt="man" />
        </div>
        <div className={styles.global_image_container2}>
          <img src={worker} alt="man" />
        </div>
        <div className={styles.global_image_text_container}>
          <p>
            {t("At BENZ Packaging, we are your trusted partner for premium packaging solutions. Our expertise and dedication ensure your products are packaged with precision and care. From custom designs to eco-friendly options, we offer a wide range of packaging solutions tailored to your needs. Join hands with us for packaging excellence that sets you apart in the market. Let's package success together")}
          </p>

          <div className={styles.pack_button}>
            <Link
              to="/contact_page"
              style={{ textDecoration: "none", color: "white" }}
            >
              {t("PACK WITH US")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Global;
