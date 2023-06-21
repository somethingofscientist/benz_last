import React from 'react'
import styles from './Heading.module.css';
import header_heading from '../../images/service_heading.svg'
import video from '../../videos/service_video.mp4'

const heading_header_industry = () => {
    return (
        <>
            <div className={styles.header_bg}>
                <video autoPlay loop muted src={video}></video>
                {/* <img src={header_heading} alt="" /> */}
                {/* <div className={styles.imageContainer}></div> */}
                <div className={styles.header}>
                    Services
                </div>
            </div>
        </>
    )
}

export default heading_header_industry