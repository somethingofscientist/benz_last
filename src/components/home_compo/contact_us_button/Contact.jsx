import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <>
      <div className={styles.contact_us_button}>
        <Link to="">
          <a href="#footer" style={{ textDecoration: "none", color: "white" }}>
            Contact Us
          </a>
        </Link>
      </div>
    </>
  );
};

export default Contact;
