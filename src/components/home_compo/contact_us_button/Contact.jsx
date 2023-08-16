import React, { useEffect, useState } from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRef } from 'react';
import { AiFillWechat, AiOutlineReload, AiOutlineWhatsApp } from "react-icons/ai";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [showIcons, setShowIcons] = useState(!true); // State to control icon display
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const handleButtonClick = () => {
    setShowIcons(!showIcons); // Toggle icons visibility
    setScriptLoaded(!scriptLoaded);
    // setShowIcons(false); 
  }

  useEffect(() => {
    if (showIcons && scriptLoaded) {
      const script = document.createElement("script");
      script.src = "//code.tidio.co/onhsgcjqs9p42d5kyyaked49940olgot.js";
      script.onload = () => {
        console.log('TidioChat script loaded');
        setScriptLoaded(true); // Mark script as loaded
        console.log('first')
      };
      script.onerror = () => {
        console.log('Error loading TidioChat script');
      };
      document.body.appendChild(script);
    } else if (!showIcons && scriptLoaded) {
      // Remove the script element when icons are hidden
      const scriptElement = document.querySelector("script[src='//code.tidio.co/onhsgcjqs9p42d5kyyaked49940olgot.js']");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
        setScriptLoaded(false); // Mark script as not loaded
      }
    }
  }, [showIcons]);

  const handleIconClick = (iconType) => {
    if (iconType === 'whatsapp') {
      const phoneNumber = '1234567890'; // Replace with your phone number
      window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}`, '_blank');
      // setShowIcons(false);
    }
  }

  return (
    <>
      <button
        className={styles.click_me_button}
        onClick={handleButtonClick} // Toggle icons visibility
      >
        {/* {showIcons ? (<>Reload <AiOutlineReload /> </>) : (<>Chat <AiFillWechat /></>)} */}
        Chat <AiFillWechat /> 
      </button>


      {showIcons && scriptLoaded && (
        <div className={styles.icons_container}>
          <div
            className={styles.icon}
            onClick={() => handleIconClick('whatsapp')}
          >
            <AiOutlineWhatsApp /> Chat with us
            {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png" alt="WhatsApp Icon" /> */}
          </div>
        </div>
      )}

      {/* <Link to='/contact_page'>
        <div className={styles.contact_us_button}>
          {t("CONTACT US")}
        </div>
      </Link> */}
    </>
  );
};

export default Contact;

