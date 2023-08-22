import React, { useState } from "react";
import styles from "./Industries.module.css";
import bmw from "../../images/bmw.svg";
import bmw2 from "../../images/bmw2.jpg";
import nasa from "../../images/nasa.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import { FaArrowRightLong } from "react-icons/fa";
import { object } from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { NavHashLink } from "react-router-hash-link";
import Automobile from "../../images/automobile.jpg";
import { useTranslation } from "react-i18next";


const Industries = () => {
  const [arr, setArr] = useState([
    {
      choti_image: bmw2,
      image: bmw,
      heading: "Automobile",
      text:
        "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components.",
      hovered: false,
    },
    {
      choti_image: bmw2,
      image: bmw,
      heading: "Military",
      hovered: false,
      text:
        "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components.",
    },
    {
      choti_image: bmw2,
      image: bmw,
      heading: "Aerospace",
      hovered: false,
      text:
        "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components.",
    },
    {
      choti_image: bmw2,
      image: bmw,
      heading: "Electronics",
      hovered: false,
      text:
        "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components.",
    },
  ]);

  function replaceAt(array, index, value) {
    const ret = array.slice(0);
    ret[index].hovered = value;
    return ret;
  }
  const handleHover = (index) => {
    setArr(replaceAt(arr, index, true));
  };

  const handleLeave = (index) => {
    setArr(replaceAt(arr, index, false));
  };

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.map_whole_container}>
        <div className={styles.map}>
          <div className={styles.map_flexbox}>
            <div className={styles.map_heading}>
              {t("Industries to meet your needs.")}
            </div>
            <div className={styles.map_sub_heading}>
              {t(
                "Our packaging products are environmentally conscious, innovative, and cater to a variety of industries."
              )}
            </div>
          </div>
        </div>
        {/* scale div */}
        <div className={styles.hover_container}>
          {arr.map((value, index) =>
            value.hovered ? (
              <div
                className={styles.car_container}
                //   onMouseEnter={() => handleHover(0)}
                onMouseLeave={() => handleLeave(index)}
                onBlur={() => handleLeave(index)}
              >
                <img src={value.image} alt="" />
                <div className={styles.car_container_text}>
                  {t(`${value.text}`)}
                  <div className={styles.learn_more_button}>
                    <Link
                      to="/industry"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {t("LEARN MORE")}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={styles.car_container2}
                onMouseEnter={() => handleHover(index)}
                onFocus={() => handleHover(index)}
                // onMouseLeave={handleHover}
              >
                <img src={value.choti_image} alt="Image" />
                <div className={styles.car_inner_container}>
                  <div className={styles.car_heading}>
                    {t(`${value.heading}`)}
                  </div>
                  <div className={styles.car_container_text2}>
                    {t(
                      "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components."
                    )}
                  </div>
                  <div className={styles.learn_more_button}>
                    {t("LEARN MORE")}{" "}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
        {/* scale div */}

        {/* view all industreis */}
        <div className={styles.view_all_container}>
          <Link to="/industry">
            <div className={styles.view_all}>
              {t("View All Industries")}
              <span>
                <HiOutlineArrowNarrowRight />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Industries;
