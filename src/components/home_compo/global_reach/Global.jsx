import React from "react";
import styles from "./Global.module.css";
import oldman from "../../images/olman.svg";
import worker from "../../images/worker.svg";
import { Link } from "react-router-dom";

const Global = () => {
  return (
    <>
      <div className={styles.map_flexbox}>
        <div className={styles.map_heading}>Global reach, local impact.</div>
        <div className={styles.map_sub_heading}>
          This is our guiding principle, representing our commitment to making a
          positive difference on a global scale through individual actions at
          the local level. We firmly believe that even the smallest actions can
          have far-reaching effects, and we strive to be a catalyst for change
          in our interconnected world.
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
            Welcome to our packaging company, where we specialize in providing
            innovative and high-quality packaging solutions for businesses of
            all sizes. We believe in the importance of sustainability and strive
            to make our packaging as eco-friendly as possible. We use recyclable
            materials and employ sustainable manufacturing processes to minimize
            our impact on the environment.
          </p>

          <div className={styles.pack_button}>
            <Link
              to="/contact_page"
              style={{ textDecoration: "none", color: "white" }}
            >
              PACK WITH US
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Global;
