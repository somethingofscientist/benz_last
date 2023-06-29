import React from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Link to="/contact_page">
        <div className={styles.contact_us_button}>
          {t("CONTACT US")}
        </div>
      </Link>
    </>
  );
};

export default Contact;
