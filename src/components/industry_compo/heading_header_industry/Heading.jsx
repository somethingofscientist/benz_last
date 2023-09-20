import React from 'react'
import styles from './Heading.module.css';
import header_heading from '../../images/header_heading.svg'
import video from '../../videos/industry_video.mp4'
import { useTranslation } from 'react-i18next';

const Heading_header_industry = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className={styles.header_bg}>
                <video
                    src={video}
                    loop
                    muted
                    playsInline
                    autoPlay={true}
                    controls={false}
                    preload='auto'
                    controlsList="nodownload"
                ></video>
                {/* <img src={header_heading} alt="" /> */}
                {/* <div className={styles.imageContainer}></div> */}
                <div className={styles.header}>
                    {t("Industries")}
                </div>
            </div>
        </>
    )
}

export default Heading_header_industry