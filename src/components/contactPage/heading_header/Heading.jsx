import React from 'react'
import styles from './Heading.module.css';
import header_heading from '../../images/header_heading.svg'
import compnay from '../../images/compnay.jpeg'
import video from '../../videos/contact_video.mp4'

const Heading = () => {
    return (
        <>
            <div className={styles.header_bg}>
                {/* <video autoPlay loop muted src={video}></video> */}
                <img src={compnay} alt="" />
                <div className={styles.imageContainer}></div>
                <div className={styles.header}>
                    Contact Us
                </div>
            </div>
        </>
    )
}

export default Heading