import React from "react";
import styles from "./Contact.module.css";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <Link to="/contact_page">
        <div className={styles.contact_us_button}>
          Contact Us
        </div>
      </Link>
    </>
  );
};

export default Contact;
