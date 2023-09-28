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
              {t("Partnering with BENZ Packaging offers a multitude of advantages. Our commitment to tailored solutions ensures your packaging needs are met with precision, backed by our unwavering dedication to quality assurance. Choose ecofriendly options to reduce your environmental impact, and leverage our global reach for packaging solutions that transcend borders. Our innovative designs give you a competitive edge, and our reliable partnership guarantees consistency and on-time delivery. Experience these benefits first-hand with BENZ Packaging and elevate your packaging game to new heights.")}
            </div>
          </div>
          <div className={styles.global_container}>
            <div className={styles.global_image_text_container}>
              <p>
                {t("At BENZ Packaging, we're an innovative, forward-thinking company seeking passionate individuals who share our commitment to excellence and sustainability. As a member of our team, you'll have the opportunity to contribute to cutting-edge packaging solutions, work in a collaborative environment, and make a meaningful impact. Explore our current openings and embark on a rewarding career journey with BENZ Packaging today.")}
              </p>


              <Link
                to="/career"
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
            {t("Prepare to delve into our expansive global enterprise. BENZ Packaging stands as a prominent multinational corporation, boasting an extensive network of state-ofthe-art manufacturing facilities, a robust global operational infrastructure, multiple strategically-located warehouses, a diverse and far-reaching clientele, and a comprehensive portfolio of packaging solutions catering to a myriad of global industries.")}
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
                  {t("Manufacturing Units")}
                </div>
                <p>
                  {t(" Over six cutting-edge manufacturing units strategically located within the Indo-Pacific region, ensuring efficiency and proximity for global operations.")}
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
                  {t("Experience convenience and accessibility with our extensive network of strategically positioned warehouses, enhancing our global reach for seamless logistics.")}
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
                 {t("Join our extensive network of satisfied customers worldwide, benefiting from our tailored packaging solutions and exceptional service")}
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
                  {t("Explore our diverse portfolio of cutting-edge packaging products, designed to meet the unique needs of industries across the globe.")}
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
