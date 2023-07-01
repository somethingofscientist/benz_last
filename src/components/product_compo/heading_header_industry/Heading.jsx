import React from 'react'
import styles from './Heading.module.css';
import header_heading from '../../images/product_header.svg'
import video from '../../videos/product_video1.mp4'
import { useTranslation } from 'react-i18next';

const Heading_header_industry = () => {
    
  const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.header_bg}>
                <video autoPlay loop muted src={video}></video>
                {/* <img src={header_heading} alt="" />
                <div className={styles.imageContainer}></div> */}
                <div className={styles.header}>
                    {t("Products")}
                </div>
                <div className={styles.sub_header}>
                    {t("BENZ Packaging backed by its parent company – New Sales Corporation has been in the field of packaging for over 38 years. BENZ Packaging has delivered safe and effective corrosion solutions across the globe. Our Technical Partners- Propagroup (Italy) are the leading manufactures of Protective Packaging Products and have onsite representation in over 90-plus countries, to provide seamless support wherever you need it. We can help you get over any challenging corrosion prevention need such as overseas shipping in corrosive environments to storage in high humidity conditions.")}
                </div>
            </div>
        </>
    )
}

export default Heading_header_industry