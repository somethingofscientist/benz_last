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
                <video src={video}
                    loop
                    muted
                    playsInline
                    autoPlay={true}
                    controls={false}
                    preload='auto'
                    controlsList="nodownload"
                ></video>
                {/* <img src={header_heading} alt="" />
                <div className={styles.imageContainer}></div> */}
                <div className={styles.header}>
                    {t("Products")}
                </div>
                <div className={styles.sub_header}>
                    {t("Explore our extensive range of desiccants, each tailored to unique industry needs. From silica gel to clay and molecular sieve desiccants, BENZ Packaging offers a comprehensive selection. Our desiccants effectively combat moisture, preserving product quality and shelf life. Whether you require moisture control for electronics, pharmaceuticals, or any other industry, our solutions ensure optimal protection. By choosing BENZ Packaging's desiccant solutions, you gain a competitive edge through reliable moisture control, reducing the risk of damage, and increasing your product's reliability.")}
                </div>
            </div>
        </>
    )
}

export default Heading_header_industry