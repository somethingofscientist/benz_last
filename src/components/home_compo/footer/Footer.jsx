import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./Footer.module.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import footer_logo from "../../images/footer_logo_new.svg";
// import { FaTwitter } from "react-icons/fa";
import {BsTwitter} from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram, AiFillGithub } from "react-icons/ai";
import axios from "axios";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";



const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  
  // console.log("we are in footer ->")

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`/subscribe`, {
        name: firstName,
        email,
      });
      if (res.status === 200) {
        // toast.dismiss();
        toast.success("Thank you for subscribing!", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setFirstName("");
        setEmail("");

      } 
      else {
        toast.dismiss();
        toast.error("Some Error Occured");
      }
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

  const { t, i18n } = useTranslation();

  return (
    <>
      <a id="footer">
      <div className={styles.footer_vol} >
        <div className={styles.footer}>
          <div className={styles.newsletter}>
            <div className={styles.blue_container}>
              <div className={styles.blue_container_heading}>
                {t("Subscribe to our newsletter")}
              </div>
              <div className={styles.blue_container_flexbox}>
                <form onSubmit={handleSubscribe}>
                  <input
                    className={styles.first_name}
                    type="text"
                    required
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    pattern= "^[a-zA-Z]+$"
                  />
                  <input
                    className={styles.first_name}
                    type="email"
                    required
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    className={styles.input_subscribe_button}
                    type="submit"
                  >
                    {t("Subscribe Now")}
                  </button>
                </form>
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
                {t("Your packaging partner for your all packaging needs.")}
              </div>
              <div className={styles.icon_container_t}>
                <div className={styles.footer_icons_container}>
                  <a href="https://twitter.com/BENZ_Packaging">
                    <BsTwitter />
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
              <div className={styles.footer_heading}>{t("CONTACT")} </div>
              <div className={styles.footer_lines}>
                {t("BENZ Packaging Solutions Pvt. Ltd.83, Sector - 5, IMT Manesar, Gurgaon - 122050 INDIA")}
              </div>
              <div className={styles.footer_lines}>
                <strong>{t("Email:")} </strong> care@benz-packaging.com
              </div>
              <div className={styles.footer_lines}>
                <strong>{t("Web:")} </strong> www.benz-packaging.com
              </div>
              <div className={styles.footer_lines}>
                <strong>{t("Phone:")}</strong> +91-9899144488
              </div>
            </div>
            <div className={styles.footer_main_three}>
              <div className={styles.footer_heading}>{t("INDUSTRIES")}</div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section2"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("Military Applications")}
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section3"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("Aerospace")}
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section4"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("Contract Packaging")}
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/industry#section1"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("Automobile")}
                </HashLink>
              </div>
            </div>
            <div className={styles.footer_main_four}>
              <div className={styles.footer_heading}>{t("Quick Links")}</div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("Home")}
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/services"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("Services")}
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/news"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("News")}
                </HashLink>
              </div>
              <div className={styles.footer_lines}>
                <HashLink
                  smooth
                  to="/resources"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t("Resources")}
                </HashLink>
              </div>
            </div>
          </div>
          <div className={styles.last_line}>
            © {t("2022 BENZ PACKAGING All Rights Reserved")}
          </div>
        </div>
      </div>
      </a>
    </>
  );
};


export default Footer;