import React, { useState } from "react";
import styles from "./Industries.module.css";
import bmw from "../../images/bmw.svg";
import bmw2 from "../../images/bmw2.svg";
import nasa from "../../images/nasa.svg";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import { FaArrowRightLong } from "react-icons/fa";
import { object } from "prop-types";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { NavHashLink } from 'react-router-hash-link';

const Industries = () => {
  const [hovered, setHovered] = useState([false, false, false]);
  function replaceAt(array, index, value) {
    const ret = array.slice(0);
    ret[index] = value;
    return ret;
  }
  const handleHover = (index) => {
    setHovered(replaceAt(hovered, index, !hovered[index]));
  };

  return (
    <>
      <div className={styles.map_whole_container}>
        <div className={styles.map}>
          <div className={styles.map_flexbox}>
            <div className={styles.map_heading}>
              Industries to meet your needs.
            </div>
            <div className={styles.map_sub_heading}>
              Our packaging products are environmentally conscious, innovative,
              and cater to a variety of industries.
            </div>
          </div>
        </div>
        {/* scale div */}
        <div className={styles.hover_container}>
          <div className={styles.car_container}>
            <img src={bmw} alt="" />
            <div className={styles.car_container_text}>
              Our packaging solutions for the automobile industry provide
              optimal protection and efficiency for transportation and storage
              of vehicle parts and components.
              <div className={styles.learn_more_button}>LEARN MORE</div>
            </div>
          </div>
          {hovered.map((value, index) =>
            value ? (
              <div
                className={styles.car_container}
                //   onMouseEnter={() => handleHover(0)}
                onMouseLeave={() => handleHover(index)}
              >
                <img src={bmw} alt="" />
                <div className={styles.car_container_text}>
                  Our packaging solutions for the automobile industry provide
                  optimal protection and efficiency for transportation and
                  storage of vehicle parts and components.
                  <div className={styles.learn_more_button}>LEARN MORE</div>
                </div>
              </div>
            ) : (
              <div
                className={styles.car_container2}
                onMouseEnter={() => handleHover(index)}
              // onMouseLeave={handleHover}
              >
                <img src={bmw2} alt="Image" />
                <div className={styles.car_inner_container}>
                  <div className={styles.car_heading}>Aerospace</div>
                  <div className={styles.car_container_text2}>
                    Our packaging solutions for the automobile industry provide
                    optimal protection and efficiency for transportation and
                    storage of vehicle parts and components.
                  </div>
                  <div className={styles.learn_more_button}>LEARN MORE</div>
                </div>
              </div>
            )
          )}
          {/* {!isHovered ? (
            <div
              className={styles.car_container}
              //   onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(0)}
            >
              <img src={bmw} alt="" />
              <div className={styles.car_container_text}>
                Our packaging solutions for the automobile industry provide
                optimal protection and efficiency for transportation and storage
                of vehicle parts and components.
              </div>
              <div className={styles.learn_more_button}>LEARN MORE</div>
            </div>
          ) : (
            <div
              className={styles.car_container2}
              onMouseEnter={() => handleHover(0)}
              // onMouseLeave={handleHover}
            >
              <img src={nasa} alt="Image" />
              <div className={styles.car_inner_container}>
                <div className={styles.car_heading}>Aerospace</div>
                <div className={styles.car_container_text2}>
                  Our packaging solutions for the automobile industry provide
                  optimal protection and efficiency for transportation and
                  storage of vehicle parts and components.
                </div>
                <div className={styles.learn_more_button}>LEARN MORE</div>
              </div>
            </div>
          )}

          {!isHovered ? (
            <div
              className={styles.car_container}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <img src={bmw} alt="" />
              <div className={styles.car_container_text}>
                Our packaging solutions for the automobile industry provide
                optimal protection and efficiency for transportation and storage
                of vehicle parts and components.
              </div>
              <div className={styles.learn_more_button}>LEARN MORE</div>
            </div>
          ) : (
            <div
              className={styles.car_container2}
              onMouseEnter={handleHover}
              // onMouseLeave={handleHover}
            >
              <img src={nasa} alt="Image" />
              <div className={styles.car_inner_container}>
                <div className={styles.car_heading}>Aerospace</div>
                <div className={styles.car_container_text2}>
                  Our packaging solutions for the automobile industry provide
                  optimal protection and efficiency for transportation and
                  storage of vehicle parts and components.
                </div>
                <div className={styles.learn_more_button}>LEARN MORE</div>
              </div>
            </div>
          )}

          {!isHovered ? (
            <div
              className={styles.car_container}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            >
              <img src={bmw} alt="" />
              <div className={styles.car_container_text}>
                Our packaging solutions for the automobile industry provide
                optimal protection and efficiency for transportation and storage
                of vehicle parts and components.
              </div>
              <div className={styles.learn_more_button}>LEARN MORE</div>
            </div>
          ) : (
            <div
              className={styles.car_container2}
              onMouseEnter={handleHover}
              // onMouseLeave={handleHover}
            >
              <img src={nasa} alt="Image" />
              <div className={styles.car_inner_container}>
                <div className={styles.car_heading}>Aerospace</div>
                <div className={styles.car_container_text2}>
                  Our packaging solutions for the automobile industry provide
                  optimal protection and efficiency for transportation and
                  storage of vehicle parts and components.
                </div>
                <div className={styles.learn_more_button}>LEARN MORE</div>
              </div>
            </div>
          )} */}
        </div>
        {/* scale div */}

        {/* view all industreis */}
        <div className={styles.view_all_container}>
          <Link to="/industry">
            <div className={styles.view_all}>
              View All Industries 
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Industries;
