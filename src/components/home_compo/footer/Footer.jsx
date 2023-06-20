import React from "react";
import styles from "./Footer.module.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import footer_logo from "../../images/footer_logo_new.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <div className={styles.footer_vol} id="footer">
        <div className={styles.footer}>
          <div className={styles.newsletter}>
            <div className={styles.blue_container}>
              <div className={styles.blue_container_heading}>
                Subscribe to our newsletter
              </div>
              <div className={styles.blue_container_flexbox}>
                <input
                  className={styles.first_name}
                  type="text"
                  placeholder="First name"
                />
                <input
                  className={styles.first_name}
                  type="text"
                  placeholder="Email Address"
                />
                <button className={styles.input_subscribe_button} type="submit">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
          <div className={styles.footer_main}>
            <div className={styles.footer_main_one}>
              <Link to="/">
                <div className={styles.logo}>
                  <img src={footer_logo} alt="logo" />
                </div>
              </Link>
              <div className={styles.footer_lines}>
                Your packaging partner for your all packaging needs.
              </div>
              <div className={styles.icon_container_t}>
                <div className={styles.footer_icons_container}>
                  <a href="https://twitter.com/BENZ_Packaging">
                    <FaTwitter />
                  </a>
                </div>
                <div className={styles.footer_icons_container}>
                  <a href="https://www.facebook.com/benzpackaging">
                    <FaFacebookF />
                  </a>
                </div>
                <div className={styles.footer_icons_container}>
                  <a href="https://www.instagram.com/benzpackaging/">
                    <AiOutlineInstagram />
                  </a>
                </div>
                {/* <div className={styles.footer_icons_container}> */}
                {/* <AiFillGithub /> */}
                {/* </div> */}
              </div>
            </div>
            <div className={styles.footer_main_two}>
              <div className={styles.footer_heading}>CONTACT</div>
              <div className={styles.footer_lines}>
                BENZ Packaging Solutions Pvt. Ltd.83, Sector - 5, IMT Manesar,
                Gurgaon - 122050 INDIA
              </div>

              <div className={styles.footer_lines}>
                <strong>Email:</strong> care@benz-packaging.com
              </div>
              <div className={styles.footer_lines}>
                <strong>Web:</strong> www.benz-packaging.com
              </div>
              <div className={styles.footer_lines}>
                <strong>Phone:</strong> +91-9899144488
              </div>
            </div>
            <div className={styles.footer_main_three}>
              <div className={styles.footer_heading}>
                <Link
                  to="/industry"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  INDUSTRIES
                </Link>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section1"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Military Applications
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Aerospace
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contract Packaging
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Automobile
                </HashLink>
              </div>
            </div>
            <div className={styles.footer_main_four}>
              <div className={styles.footer_heading}>Home</div>
              <div className={styles.footer_lines}>Services</div>
              <div className={styles.footer_lines}>Aerospace</div>
              <div className={styles.footer_lines}>News</div>
              <div className={styles.footer_lines}>Resources</div>
            </div>
          </div>
          <div className={styles.last_line}>
            © 2022 BENZ PACKAGING All Rights Reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
