import React from "react";
import styles from "./Contact.module.css";
import drop from "../../images/Avatar group.svg";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";


const Contact_Page = () => {
  // e.prevent.default()
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
      const res = await axios.post(`http://localhost:9000/message`, {
        name,
        email,
        phone,
        message,
      });
      if (res.status === 200) {
        toast.dismiss();
        toast.success("Thank you for subscribing!", {
          position: "top-center",
          autoClose: 3000,
          theme: "dark",
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
      console.log(error.message);
    }
  };
  return (
    <>
      <div className={styles.contact_container}>
        <div className={styles.flex_box}>
          <div className={styles.box}>
            <div className={styles.image}>
              <img src={drop} alt="" />
            </div>
            <div className={styles.heading}>Drop Us A Line</div>
            <div className={styles.line}>
              Get in touch with customer support for assistance with our
              products.
            </div>
            <div className={styles.q_link}>
              <a href="">CARE@BENZ-PACKAGING.COM</a>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <img src={drop} alt="" />
            </div>
            <div className={styles.heading}>COMMERCIAL</div>
            <div className={styles.line}>
              Schedule a One-to-One meeting with our Team and get suggestions,
              packaging advice, or answer to any of your questions!
            </div>
            <div className={styles.q_link}>
              <a href="">SCHEDULE A MEETING</a>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.image}>
              <img src={drop} alt="" />
            </div>
            <div className={styles.heading}>VISIT OUR OFFICE</div>
            <div className={styles.line}>
              BENZ Packaging Solutions Pvt. Ltd. 83, Sector - 5, IMT Manesar,
              Gurgaon - 122050 INDIA
            </div>
            <div className={styles.q_link}>
              <a href="">GET DIRECTIONS</a>
            </div>
          </div>
        </div>
        {/* NEW PART OF FORM */}
        <div className={styles.input_container}>
          <div className={styles.requirements}>DESCRIBE YOUR REQUIREMENT</div>
          <div className={styles.sub_require}>
            We thrive when coming up with innovative ideas but also understand
            that a smart concept should be supported with measurable results.
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
                pattern="^[^-\s][a-zA-Z0-9_\s-]+$"
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
                // pattern='^([\w]*[\w\.]*(?!\.)@gmail.com)'
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                Message{" "}
              </label>
              <textarea
                id="message"
                name="message"
                value={data.message}
                required
                onChange={handleInputs}
              />
              <button type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact_Page;