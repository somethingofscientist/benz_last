import React from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const Contact = () => {
  const { t, i18n } = useTranslation();
  const tawkMessengerRef = useRef();

  const handleMinimize = () => {
    tawkMessengerRef.current.minimize();
  };

  return (
    <>
      <Link to='/contact_page'>
        <div className={styles.contact_us_button} onClick={handleMinimize} >
          {t("CONTACT US")}
        </div>
      </Link>

      <TawkMessengerReact
        propertyId="64d4897594cf5d49dc6987ce"
        ref={tawkMessengerRef}
        widgetId="1h7f3ht4j"
      />
    </>
  );
};

export default Contact;
