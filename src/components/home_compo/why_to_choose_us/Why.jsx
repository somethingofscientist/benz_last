import React, { useState } from "react";
import styles from "./Why.module.css";
import team from "../../images/worker.jpg";

import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Why = () => {
  const [counter1, setCounter1] = useState(false);
  const [counter2, setCounter2] = useState(false);
  const [counter3, setCounter3] = useState(false);
  const [counter4, setCounter4] = useState(false);

  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={styles.right}>
        <div className={styles.map}>
          <div className={styles.map_flexbox}>
            <div className={styles.map_heading}>{t("Benefits of working with us")}</div>
            <div className={styles.map_sub_heading}>
              {t("By selecting our packaging solutions, you not only gain access to the finest quality materials, cutting-edge technology, and a globally available network, but you also become an active participant in shaping a more sustainable future. We believe in the strength of collective efforts, and through our eco-friendly materials and practices, we can collectively reduce waste and preserve our precious natural resources. With our expert team by your side, we are dedicated to providing unparalleled support and expertise as we work together towards a more sustainable and responsible world.")}
            </div>
          </div>
          <div className={styles.global_container}>
            <div className={styles.global_image_text_container}>
              <p>
                {t("At BENZ Packaging, we foster a dynamic environment that prioritizes growth and development. Joining our team means embracing a culture where individuals are encouraged to expand their knowledge, skills, and expertise. We provide abundant opportunities for professional advancement, allowing you to shape your career trajectory. As we explore new frontiers in the packaging industry, your contributions will be pivotal in driving the future of our organization. Together, we can chart a path of innovation and success.")}
              </p>


              <Link
                to="/contact_page"
                style={{ textDecoration: "none", color: "white" }}
              >
                {/* PACK WITH US */}
                <div className={styles.pack_button}>
                  {t("JOIN OUR TEAM")}
                </div>
              </Link>
            </div>
            <div className={styles.global_image_container}>
              <img src={team} alt="man" />
            </div>
          </div>
          <div className={styles.why_para}>
            {t("By collaborating tirelessly with our clients, partners, and subcontractors, our team members continually challenge the limits of the packaging industry. We wholeheartedly value each opportunity presented to us, as it allows us to embark on new projects and transform them into vibrant realities.")}
          </div>

          <div className={styles.counter_section}>
            <div className={styles.counter}>
              <div className={styles.counter_subheading}>
                <ScrollTrigger
                  onEnter={() => setCounter1(true)}
                  onExit={() => setCounter1(false)}
                >
                  <h1>
                    {counter1 && (
                      <CountUp start={0} end={6} duration={0} delay={0} />
                    )}{" "}
                    +
                  </h1>
                </ScrollTrigger>
                <div className={styles.counter_heading}>
                  {t("Manufacturing Units in Indo-Pacific Region")}
                </div>
                <p>
                  {t("Manufacturing units play a vital role in creating products that cater to the needs of consumers")}
                </p>
              </div>
            </div>
            <div className={styles.counter2}>
              <div className={styles.counter_subheading}>
                <ScrollTrigger
                  onEnter={() => setCounter2(true)}
                  onExit={() => setCounter2(false)}
                >
                  <h1>
                    {counter2 && (
                      <CountUp start={0} end={38} duration={1} delay={0} />
                    )}{" "}
                    +
                  </h1>
                </ScrollTrigger>
                <div className={styles.counter_heading}>{t("Warehouses")}</div>
                <p>
                  {t("Warehouses are essential facilities for storing and organizing goods before they are distributed to customers")}
                </p>
              </div>
            </div>
            <div className={styles.counter}>
              <div className={styles.counter_subheading}>
                <ScrollTrigger
                  onEnter={() => setCounter3(true)}
                  onExit={() => setCounter3(false)}
                >
                  <h1>
                    {counter3 && (
                      <CountUp start={0} end={2500} duration={1} delay={0} />
                    )}{" "}
                    +
                  </h1>
                </ScrollTrigger>
                <div className={styles.counter_heading}>{t("Customers")}</div>
                <p>
                 {t("Happy customers are the lifeblood of any successful business.")}
                </p>
              </div>
            </div>
            <div className={styles.counter2}>
              <div className={styles.counter_subheading}>
                <ScrollTrigger
                  onEnter={() => setCounter4(true)}
                  onExit={() => setCounter4(false)}
                >
                  <h1>
                    {counter4 && (
                      <CountUp start={0} end={225} duration={1} delay={0} />
                    )}{" "}
                    +
                  </h1>
                </ScrollTrigger>
                <div className={styles.counter_heading}>{t("Products")}</div>
                <p>
                  {t("Products are goods or services that are created and offered for sale to meet the needs and wants of customers.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
