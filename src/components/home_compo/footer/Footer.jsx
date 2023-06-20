import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Footer.module.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import footer_logo from "../../images/footer_logo_new.svg";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import axios from 'axios'
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");


  const handleSubscribe = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:9000/subscribe`, { firstName, email });
      toast.dismiss();
      toast.success("Thank you for subscribing!");
      setFirstName("");
      setEmail("");

    } catch (error) {
      toast.dismiss();
      toast.error("Email is not in the correct format", {
        position: "top-center",
        autoClose: 3000,
        theme: "dark",
      });
      console.log(error.message);
    }
  };


  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

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
                  required
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  pattern='^[^-\s][a-zA-Z0-9_\s-]+$'
                />
                <input
                  className={styles.first_name}
                  type="email"
                  pattern='^([\w]*[\w\.]*(?!\.)@gmail.com)'
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <button
                  className={styles.input_subscribe_button}
                  type="submit"
                  onClick={handleSubscribe}
                >
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
                INDUSTRIES
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Military Applications
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Aerospace
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contract Packaging
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section1"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Automobile
                </HashLink>
              </div>
            </div>
            <div className={styles.footer_main_four}>
              <div className={styles.footer_heading}>Quick Links</div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Home
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/services"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Services
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/news"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  News
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/resources"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Resources
                </HashLink>
              </div>
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
