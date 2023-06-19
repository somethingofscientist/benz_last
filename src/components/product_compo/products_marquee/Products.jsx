import React, { useState } from "react";
import styles from "./Product.module.css";
import Marquee from "react-fast-marquee";
import pic1 from "../../images/humidity.svg";
import pic2 from "../../images/corrosion.svg";
import pic3 from "../../images/handling.svg";
import pic4 from "../../images/traditional.svg";
import { HiArrowNarrowRight } from "react-icons/hi";
// import RustRemovers from "../Rust_Removers/Aerospace";
import Rust from "../Anti-Humidity/Aerospace";
import Accessories from "../Anti-Corrosion/Aerospace";

const Products = () => {
  const [page, setPage] = useState("");

  return (
    <>
      <div className={styles.product_container}>
        <div className={styles.products_tag}>
          <Marquee speed={200} loop={0}>
            <p>Products &nbsp; </p>
            <p>Products &nbsp; </p>
          </Marquee>
        </div>
        <div className={styles.card_container}>
          <div className={styles.card_up}
            onClick={(e) => { setPage('protective') }}
          >
            <div className={styles.card_text}>INDUSTRIAL</div>
            <div className={styles.card_subtext}>Anti - Humidity </div>
            <img src={pic1} alt="pic1_humidity" />
            <div className={styles.card_icon}>
              {/* <HiArrowNarrowRight size={20} color="white" /> */}
            </div>
          </div>
          <div className={styles.card_down}
            onClick={(e) => { setPage('industrial') }}>
            <div className={styles.card_text}>INDUSTRIAL</div>
            <div className={styles.card_subtext}>Anti - Corrosion </div>
            <img src={pic2} alt="pic1_humidity" />
            <div className={styles.card_icon2}>
              {/* <HiArrowNarrowRight size={20} color="white" /> */}
            </div>
          </div>
          <div className={styles.card_up}>
            <div className={styles.card_text}>INDUSTRIAL</div>
            <div className={styles.card_subtext}>Handling</div>
            <img src={pic3} alt="pic1_humidity" />
            <div className={styles.card_icon}>
              {/* <HiArrowNarrowRight size={20} color="white" /> */}
            </div>
          </div>
          <div className={styles.card_down}>
            <div className={styles.card_text}>INDUSTRIAL</div>
            <div className={styles.card_subtext}>Traditional Packaging</div>
            <img src={pic4} alt="pic1_humidity" />
            <div className={styles.card_icon2}>
              {/* <HiArrowNarrowRight size={20} color="white" /> */}
            </div>
          </div>
        </div>
      </div>


      {
        page === "protective" ?
          <>
            <Rust />
          </>
          : page === "industrial" ?
            <>
              <Accessories />
            </>
            :
            <div className={styles.para}>
                <p>For more Content click on our Products &nbsp; </p>
            </div>
      }
    </>
  );
};

export default Products;
