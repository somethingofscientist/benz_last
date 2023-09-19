import React from "react";
import styles from "./Events.module.css";
import pack from "../../images/packsummit.png";
import pack2 from "../../images/pack2.png";
import pack3 from "../../images/pack3.png";
import pack4 from "../../images/pack4.png";
import CurvedCarousel from "../carousel/curved_carousel";
import { useTranslation } from "react-i18next";

import img1 from '../../images/events_clients/IMG_6494.jpg'

const Events = () => {
  const { t, i18n } = useTranslation();

  const arr = [
    {
      image: img1,
      date: "24 May 2023",
      heading: "Chinaplas",
      subHeading: "A networking event that brings together packaging industry leaders, innovators and experts to discuss key topics and trends.",
    },
    {
      image: pack2,
      date: "24 May 2023",
      heading: "PackPalooza",
      subHeading: "A networking event that brings together packaging industry leaders, innovators and experts to discuss key topics and trends.",
    },
    {
      image: pack3,
      date: "24 May 2023",
      heading: "Pack Quest",
      subHeading: "A networking event that brings together packaging industry leaders, innovators and experts to discuss key topics and trends.",
    },
    {
      image: pack4,
      date: "24 May 2023",
      heading: "Packcon",
      subHeading: "A networking event that brings together packaging industry leaders, innovators and experts to discuss key topics and trends.",
    },
  ];
  return (
    <>
      <a id="section1">
        <div className={styles.award_container} >
          <div className={styles.award_heading}>{t("Events")}</div>
          <CurvedCarousel />
          <div className={styles.award_subheading}>{t("About Events")}</div>
          <div className={styles.award_para}>
            {t("BENZ Packaging backed by its parent company – New Sales Corporation has been in the field of packaging for over 38 years. BENZ Packaging has delivered safe and effective corrosion solutions across the globe. Our Technical Partners- Propagroup (Italy) are the leading manufactures of Protective Packaging Products and have onsite representation in over 90-plus countries, to provide seamless support wherever you require it. We can help you get over any challenging corrosion prevention need such as overseas shipping in corrosive environments to storage in high humidity conditions.")}
          </div>
          <div className={styles.award_subheading}>{t("Recent's")} </div>
          {arr.map((item) => (
            <>
              <div className={styles.award_flexbox}>
                <div className={styles.award_img}>
                  <img src={item.image} alt="pack_summit" />
                </div>
                <div className={styles.award_text}>
                  <div className={styles.award_texting}>
                    <div className={styles.award_text_heading}>
                      {t(`${item.heading}`)}
                    </div>
                    <div className={styles.award_text_subheading}>
                      {t(`${item.subHeading}`)}
                    </div>
                  </div>

                  <div className={styles.award_date}>
                    {t(`${item.date}`)}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </a>
    </>
  );
};

export default Events;
