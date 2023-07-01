import React from 'react'
import styles from './Heading.module.css';
import header_heading from '../../../images/des_heading.svg'
import product_video from '../../../videos/product_video.mp4'
import { useTranslation } from 'react-i18next';

const Heading_header_industry = () => {
    
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className={styles.header_bg}>

                <video autoPlay loop muted src={product_video}></video>
                {/* <img src={header_heading} alt="" /> */}
                {/* <div className={styles.imageContainer}></div> */}
                <div className={styles.header}>
                    {t("VCI Films")}
                </div>
            </div>
        </>
    )
}

export default Heading_header_industry