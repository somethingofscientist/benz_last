import React from "react";
import styles from "./Contact.module.css";
import d1 from "../../images/contact1.svg";
import d2 from "../../images/contact2.svg";
// import d3 from "../../images/contact3.svg";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

import { SlEnvolopeLetter } from 'react-icons/sl'
import { IoIosPeople } from 'react-icons/io';
import { HiOutlineOfficeBuilding } from 'react-icons/hi';
import { useTranslation } from "react-i18next";


const Contact_Page = () => {
  // e.prevent.default();
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = data;
    try {
      const res = await axios.post(`/message`, {
        name,
        email,
        phone,
        message,
      });
      if (res.status === 200) {
        toast.dismiss();
        toast.success("Thank you!", {
          position: "top-center",
          autoClose: 1500,
          theme: "dark",
        });
        setData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
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
      // console.log(error.message);
    }
  };
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.contact_container}>
        <div className={styles.flex_box}>
          <div className={styles.box}>
            <div className={styles.image}>
              {/* <img src={d1} alt="" /> */}
              <SlEnvolopeLetter />
            </div>
            <div className={styles.heading}>
              {t("Drop Us A Line")}
            </div>
            <div className={styles.line}>
              {t("Get in touch with customer support for assistance with our products.")}
            </div>
            <div className={styles.q_link}>
              <a href="mailto:care@benz-packaging.com">CARE@BENZ-PACKAGING.COM</a>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              {/* <img src={d1} alt="" /> */}
              <IoIosPeople />
            </div>
            <div className={styles.heading}>{t("COMMERCIAL")}</div>
            <div className={styles.line}>
              {t("Schedule a One-to-One meeting with our Team and get suggestions, packaging advice, or answer to any of your questions!")}
            </div>
            <div className={styles.q_link}>
              <a href="https://calendly.com/benzpack/15min?month=2023-06">
                {t("SCHEDULE A MEETING")}
              </a>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              {/* <img src={d1} alt="" /> */}
              <HiOutlineOfficeBuilding />
            </div>
            <div className={styles.heading}>{t("VISIT OUR OFFICE")}</div>
            <div className={styles.line}>
              {t("BENZ Packaging Solutions Pvt. Ltd. 83, Sector - 5, IMT Manesar, Gurgaon - 122050 INDIA")}
            </div>
            <div className={styles.q_link}>
              <a href="https://www.google.co.in/maps/dir/''/BENZ+Packaging+Solutions+Pvt.+Ltd.84,+Sector+-+6,+IMT+Manesar,+Gurgaon+-+122050INDIA/@28.3689787,76.8544095,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390d3dd03b68dd91:0x13e9a162be88ce77!2m2!1d76.9244498!2d28.3689966?entry=ttu">
                {t("GET DIRECTIONS")}
              </a>
            </div>
          </div>
        </div>
        {/* NEW PART OF FORM */}
        <div className={styles.input_container}>
          <div className={styles.requirements}>{t("DESCRIBE YOUR REQUIREMENT")}</div>
          <div className={styles.sub_require}>
            {t("We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.")}
          </div>
          <div className={styles.form_fields}>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" className={styles.form_label}>
                Name <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                // pattern="^[^-\s][a-zA-Z0-9_\s-]+$"
                pattern="^[a-zA-Z]+$"
                title="White Space Not Allowed"
                value={data.name}
                onChange={handleInputs}
              />
              <label htmlFor="email" className={styles.form_label}>
                Email <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                // pattern='^([\w]*[\w\.]*(?!\.)@gmail.com)'
                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
                value={data.email}
                onChange={handleInputs}
              />
              <label htmlFor="phone" className={styles.form_label}>
                Phone <span style={{ color: "red" }}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                minlength="10"
                maxlength="10"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                pattern="[789][0-9]{9}"
                required
                value={data.phone}
                onChange={handleInputs}
              />
              <label htmlFor="message" className={styles.form_label}>
                Message{" "} <span style={{ color: "red" }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={data.message}
                required
                onChange={handleInputs}
              />
              <div className={styles.submit}>
                <button type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact_Page;