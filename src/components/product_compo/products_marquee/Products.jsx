import React, { useState } from "react";
import styles from "./Product.module.css";
import Marquee from "react-fast-marquee";
import pic1 from "../../images/humidity.svg";
import pic2 from "../../images/corrosion.svg";
import pic3 from "../../images/handling.svg";
import pic4 from "../../images/traditional.svg";
import { HiArrowNarrowRight } from "react-icons/hi";

import Rust from "../Anti-Humidity/Aerospace";
import Accessories from "../Anti-Corrosion/Aerospace";
import Handle from "../Handling/Aerospace";
import Traditional from "../Traditional/Aerospace";
import { useTranslation } from "react-i18next";

const Products = () => {

  const { t, i18n } = useTranslation();
  const [page, setPage] = useState("");
  const [containerVisible, setContainerVisible] = useState(true);

  const handleCardClick = (page) => {
    setPage(page);
    setContainerVisible(false);
    // window.scrollX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackClick = () => {
    setPage("");
    setContainerVisible(true);
  };

  return (
    <>
      {containerVisible && (
        <div className={styles.product_container}>
          <div className={styles.products_tag}>
            <Marquee speed={200} loop={0}>
              <p>{t("Products")} &nbsp; </p>
              <p>{t("Products")} &nbsp; </p>
            </Marquee>
          </div>
          <div className={styles.card_container}>
            <div className={styles.card_up}
              onClick={(e) => { setPage('humidity') }}
            >
              <div className={styles.card_text}>{t("INDUSTRIAL")}</div>
              <div className={styles.card_subtext}>{t("Anti - Humidity")} </div>
              <img src={pic1} alt="pic1_humidity" />
              <div className={styles.card_icon}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
            <div className={styles.card_down}
              onClick={(e) => { setPage('corrosion') }}>
              <div className={styles.card_text}>{t("INDUSTRIAL")}</div>
              <div className={styles.card_subtext}>{t("Anti - Corrosion")} </div>
              <img src={pic2} alt="pic1_humidity" />
              <div className={styles.card_icon2}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
            <div className={styles.card_up}
              onClick={(e) => { setPage('handling') }}
            >
              <div className={styles.card_text}>{t("INDUSTRIAL")}</div>
              <div className={styles.card_subtext}>{t("Handling")}</div>
              <img src={pic3} alt="pic1_handling" />
              <div className={styles.card_icon}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
            <div className={styles.card_down}
              onClick={(e) => { setPage('traditional') }}>
              <div className={styles.card_text}>{t("INDUSTRIAL")}</div>
              <div className={styles.card_subtext}>{t("Traditional Packaging")}</div>
              <img src={pic4} alt="pic1_traditional" />
              <div className={styles.card_icon2}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
          </div>
        </div>
      )}


      {
        page === "humidity" ?
          <>
            <Rust />
          </>
          : page === "corrosion" ?
            <>
              <Accessories />
            </>
            : page === "handling" ?
              <>
                <Handle />
              </>
              : page === "traditional" ?
                <>
                  <Traditional />
                </>
                :
                <div className={styles.para}>
                  <p>{t("For more Content click on our Products")} &nbsp; </p>
                </div>
      }


      {/* {!containerVisible && (
        <div className={styles.product_container}>
          {page === "humidity" && <Rust />}
          {page === "corrosion" && <Accessories />}
          {page === "handling" && <Handle />}
          {page === "traditional" && <Traditional />}
          <button onClick={handleBackClick}>Back</button>
        </div>
      )} */}
    </>
  );
};

export default Products;
