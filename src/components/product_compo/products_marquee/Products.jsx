import React, { useState } from "react";
import styles from "./Product.module.css";
import Marquee from "react-fast-marquee";
// import pic1 from "../../images/humidity.svg";
// import pic2 from "../../images/corrosion.svg";
// import pic3 from "../../images/handling.svg";
// import pic4 from "../../images/traditional.svg";

// import pic1 from "../../images/humidity.jpg";
// import pic2 from "../../images/corrossion.jpg";
// import pic3 from "../../images/handling.jpg";
// import pic4 from "../../images/traditional.jpg";

import { HiArrowNarrowRight } from "react-icons/hi";

import Rust from "../Anti-Humidity/Aerospace";
import Accessories from "../Anti-Corrosion/Aerospace";
import Handle from "../Handling/Aerospace";
import Traditional from "../Traditional/Aerospace";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


import pic1 from "../../images/new_images_client/cardsimages/Handling..jpeg";
import pic2 from "../../images/new_images_client/cardsimages/WhatsApp Image 2023-09-19 at 7.20.07 PM.jpeg";
import pic3 from "../../images/new_images_client/cardsimages/WhatsApp Image 2023-09-19 at 7.20.08 PM.jpeg";
import pic4 from "../../images/new_images_client/cardsimages/WhatsApp Image 2023-09-19 at 7.20.07 PM (1).jpeg";


const Products = () => {

  const { t, i18n } = useTranslation();
  const [page, setPage] = useState("");
  const [containerVisible, setContainerVisible] = useState(true);

  const handleCardClick = (page) => {
    setPage(page);
    const yOffset = window.pageYOffset + 900;
    window.scrollTo({ top: yOffset, behavior: 'smooth' });
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

            <Link to="/products/corrosion">
              <div className={styles.card_up}>
                {/* <div className={styles.card_text}>{t("INDUSTRIAL")}</div> */}
                <div className={styles.card_subtext}>{t("Anti - Corrosion")}</div>
                <img src={pic2} alt="pic1_humidity" />
                <div className={styles.card_icon}>
                  <HiArrowNarrowRight size={20} color="white" />
                </div>
              </div>
            </Link>
            <Link to="/products/humidity">
              <div className={styles.card_down}>
                {/* <div className={styles.card_text}>{t("INDUSTRIAL")} </div> */}
                <div className={styles.card_subtext}>{t("Anti - Humidity")}</div>
                <img src={pic1} alt="pic1_humidity" />
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




            {/* <div className={styles.card_down}
              onClick={(e) => { handleCardClick('corrosion') }}>
              <div className={styles.card_text}>{t("INDUSTRIAL")}</div>
              <div className={styles.card_subtext}>{t("Anti - Corrosion")} </div>
              <img src={pic2} alt="pic1_humidity" />
              <div className={styles.card_icon2}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
            <div className={styles.card_up}
              onClick={(e) => { handleCardClick('humidity') }}
            >
              <div className={styles.card_text}>{t("INDUSTRIAL")}</div>
              <div className={styles.card_subtext}>{t("Anti - Humidity")} </div>
              <img src={pic1} alt="pic1_humidity" />
              <div className={styles.card_icon}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
            <div className={styles.card_up}
              onClick={(e) => { handleCardClick('handling') }}
            >
              <div className={styles.card_text}>{t("INDUSTRIAL")}</div>
              <div className={styles.card_subtext}>{t("Handling")}</div>
              <img src={pic3} alt="pic1_handling" />
              <div className={styles.card_icon}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div>
            <div className={styles.card_down}
              onClick={(e) => { handleCardClick('traditional') }}>
              <div className={styles.card_text}>{t("INDUSTRIAL")}</div>
              <div className={styles.card_subtext}>{t("Traditional Packaging")}</div>
              <img src={pic4} alt="pic1_traditional" />
              <div className={styles.card_icon2}>
                <HiArrowNarrowRight size={20} color="white" />
              </div>
            </div> */}


          </div>
        </div>
      )}

      {/* functionality : -> showing content on same page  */}
      {/* {
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
                <div
                className={styles.para}
                >
                  <p>{t("For more Content click on our Products")} &nbsp; </p>
                </div>
      } */}

      <div
        style={{
          textAlign: "justify",
          width: "80%",
          fontSize: "20px",
          margin: "100px auto 0 auto"
        }}
      >
        With over 38 years of experience , Benz Packaging have grown the business by listening to our customers and adapting to their needs, Being locally owned, operated & present in multiple locations - allows us to be more flexible with our service and adapt to our customers needs when required. Since the time of conception, we have been providing complete packaging solutions to varied industries. These solutions not only involve protective packaging but traditional packaging also without which the packaging cannot be complete.
      </div>
      <br />
      <br />
      <div
        style={{
          textAlign: "justify",
          width: "80%",
          fontSize: "20px",
          margin: "auto"
        }}
      >
        Right from wooden pallets onwards to container stuffing, Benz packaging has all the products required to make the despatches. We have continued to evolve and remain relevant to our customers by expanding our products & service, making procurement easier to improve the customer to experience.
      </div>


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
