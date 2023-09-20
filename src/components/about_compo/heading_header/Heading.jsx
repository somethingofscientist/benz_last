import React from 'react'
import styles from './Heading.module.css';
import header_heading from '../../images/header_heading.svg'
import video from '../../videos/video_about.mp4'
import { useTranslation } from 'react-i18next';

const Heading = () => {

    const { t, i18n } = useTranslation();
    return (
        <>
            <div className={styles.header_bg}>
                <video
                    autoPlay
                    
                    loop
                    muted
                    src={video}></video>
                {/* <img src={header_heading} alt="" /> */}
                {/* <div className={styles.imageContainer}></div> */}
                <div className={styles.header}>
                    {t("Who we are")}
                </div>
            </div>
        </>
    )
}

export default Heading