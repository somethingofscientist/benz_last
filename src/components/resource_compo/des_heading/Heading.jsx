import React from 'react'
import styles from './Heading.module.css';
import header_heading from '../../images/res_heading.svg'
import video from '../../videos/r_video.mp4'
import ReactPlayer from 'react-player'
import { useTranslation } from 'react-i18next';


const Heading_header_industry = () => {
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.header_bg}>
                <div>
                    <video
                        src={video}
                        loop
                        muted
                        playsInline
                        autoPlay={true}
                        controls={false}
                        preload='auto'
                        controlsList="nodownload"
                    >
                    </video>
                </div>
                {/* <img src={header_heading} alt="" /> */}
                {/* <div className={styles.imageContainer}></div> */}
                <div className={styles.header}>
                    {t("Resources")}
                </div>
            </div>
        </>
    )
}

export default Heading_header_industry;