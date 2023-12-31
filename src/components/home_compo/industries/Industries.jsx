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

import auto from '../../images/new_images_client/Industries/Automobile2.jpeg'
import auto1 from '../../images/new_images_client/Industries/Automobile2.jpeg'
import war from '../../images/new_images_client/Industries/Military.jpeg'
import war1 from '../../images/new_images_client/Industries/Military.jpeg'

import elect from '../../images/new_images_client/Industries/Electronics.jpeg'
import elect2 from '../../images/new_images_client/Industries/Electronics.jpeg'
import aero from '../../images/new_images_client/Industries/Machine Packaging.jpeg'
import aero2 from '../../images/new_images_client/Industries/Machine Packaging.jpeg'

const Industries = () => {
  const [arr, setArr] = useState([
    {
      choti_image: auto,
      image: auto1,
      heading: "Automobile",
      text:
        "Partnering with leading automakers, we deliver specialized packaging solutions that safeguard automotive components, enhancing supply chain efficiency and product protection.",
      hovered: false,
      link: "/industry#section1"
    },
    {
      choti_image: war,
      image: war1,
      heading: "Military",
      hovered: false,
      text:
        "We proudly support the military sector with precision-engineered packaging solutions, ensuring the safe transport of critical equipment and supplies for national defence.",
      link: "/industry#section2"
    },
    {
      choti_image: aero,
      image: aero2,
      heading: "Aerospace",
      hovered: false,
      text:
        "Collaborating with the aerospace industry, we provide advanced packaging solutions for delicate components, contributing to the success of cutting-edge aviation and space technologies.",
      link: "/industry#section3"
    },
    {
      choti_image: elect,
      image: elect2,
      heading: "Electronics",
      hovered: false,
      text:
        " In the electronics sector, we specialize in tailored packaging solutions, safeguarding sensitive electronics during transit, ensuring product integrity and customer satisfaction.",
      link: "/industry#section5"
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
                    <NavHashLink
                      // to="/industry"
                      to={value.link}
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      {t("LEARN MORE")}
                    </NavHashLink>
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
                    {/* {t(
                      "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components."
                    )} */}
                    {t(`${value.text}`)}
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


// const Industries = () => {
//   const [arr, setArr] = useState([
//     {
//       choti_image: bmw2,
//       image: bmw,
//       heading: "Automobile",
//       hovered: false,
//       text: "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components.",
//     },
//     {
//       choti_image: bmw2,
//       image: bmw,
//       heading: "Automobile",
//       hovered: false,
//       text: "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components.",
//     },
//     {
//       choti_image: bmw2,
//       image: bmw,
//       heading: "Automobile",
//       hovered: false,
//       text: "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components.",
//     },
//     {
//       choti_image: bmw2,
//       image: bmw,
//       heading: "Automobile",
//       hovered: false,
//       text: "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components.",
//     },

//     // Add other industry objects here
//   ]);

//   const { t, i18n } = useTranslation();

//   const handleHover = (index) => {
//     setArr((prevState) =>
//       prevState.map((item, i) =>
//         i === index ? { ...item, hovered: true } : item
//       )
//     );
//   };

//   const handleLeave = (index) => {
//     setArr((prevState) =>
//       prevState.map((item, i) =>
//         i === index ? { ...item, hovered: false } : item
//       )
//     );
//   };

//   return (
//     <div className={styles.map_whole_container}>
//       <div className={styles.map}>
//         <div className={styles.map_flexbox}>
//           <div className={styles.map_heading}>
//             {t("Industries to meet your needs.")}
//           </div>
//           <div className={styles.map_sub_heading}>
//             {t(
//               "Our packaging products are environmentally conscious, innovative, and cater to a variety of industries."
//             )}
//           </div>
//         </div>
//       </div>
//       <div className={styles.hover_container}>
//         {arr.map((value, index) => (
//           <div
//             key={index}
//             className={value.hovered ? styles.car_container : styles.car_container2}
//             onMouseEnter={() => handleHover(index)}
//             onMouseLeave={() => handleLeave(index)}
//           >
//             <img src={value.hovered ? value.image : value.choti_image} alt="Image" />
//             <div className={styles.car_inner_container}>
//               <div className={styles.car_heading}>
//                 {t(`${value.heading}`)}
//               </div>
//               <div className={styles.car_container_text2}>
//                 {t(
//                   "Our packaging solutions for the automobile industry provide optimal protection and efficiency for transportation and storage of vehicle parts and components."
//                 )}
//               </div>
//               <div className={styles.learn_more_button}>
//                 {t("LEARN MORE")}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className={styles.view_all_container}>
//         <Link to="/industry">
//           <div className={styles.view_all}>
//             {t("View All Industries")}
//             <span>
//               <HiOutlineArrowNarrowRight />
//             </span>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

export default Industries;
