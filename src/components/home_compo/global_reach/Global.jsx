import React from "react";
import styles from "./Global.module.css";
import worker from "../../images/box_fact.jpeg";
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
        <div className={styles.map_sub_heading}>{t("This is our guiding principle, representing our commitment to making a positive difference on a global scale through individual actions at the local level. We firmly believe that even the smallest actions can have far-reaching effects, and we strive to be a catalyst for change in our interconnected world.")}
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
            {t("As a packaging company, we take pride in offering cutting-edge and top-notch packaging solutions tailored to businesses of all scales. Our unwavering commitment to sustainability is evident in our eco-conscious practices. By utilizing the highest quality materials and employing sustainable manufacturing processes, we prioritize minimizing our environmental footprint.")}
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
