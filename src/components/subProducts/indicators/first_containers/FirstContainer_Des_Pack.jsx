import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import temp_humi from '../../../images/temp_humi.jpg'
import temp_humi2 from '../../../images/temp_humi2.jpg'
import temp_humi3 from '../../../images/temp_humi3.JPG'
import temp_humi4 from '../../../images/temp_humi4.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';



const Descicannt = () => {
    
    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Temperature & Humidity",
            image: [temp_humi2, temp_humi3, temp_humi4],
            image_text: "Benz Packaging is pleased to introduce our advanced temperature and humidity monitoring solutions, designed to ensure optimal environmental conditions for the preservation of your products. With our reliable monitoring systems, you can have peace of mind knowing that your goods are stored and transported in the ideal temperature and humidity ranges.",
            image_text2: "Maintaining proper temperature and humidity levels is crucial in industries such as pharmaceuticals, food, and cosmetics. Fluctuations in these parameters can lead to product degradation, reduced shelf life, and compromised quality. At Benz Packaging, we offer innovative solutions to help you monitor and control these critical factors."
        },

        {
            id: "section2",
            number: "2",
            heading: "Shockwatch",
            image: engine,
            image_text: "Benz Packaging is thrilled to introduce Shockwatch, our cutting-edge solution for impact and mishandling detection. With Shockwatch, you can have real-time visibility into potential damages caused by rough handling during transportation, ensuring the quality and integrity of your valuable products.",
            image_text2: "During the transportation process, shocks and impacts can significantly impact the condition of your goods. Whether it's fragile electronics, delicate machinery, or sensitive equipment, proper handling is crucial. Shockwatch provides an effective way to monitor and deter mishandling, ultimately reducing the risk of product damage."
        },

        {
            id: "section3",
            number: "3",
            heading: "Tiltwatch",
            image: engine,
            image_text: "Benz Packaging is excited to present Tiltwatch, our innovative solution for monitoring and preventing improper handling during transportation. With Tiltwatch, you can have real-time visibility into potential tilting or tipping incidents that may compromise the safety and integrity of your products.",
            image_text2: "During transit, tilting or excessive angles can lead to product damage, spills, or other undesirable outcomes. Tiltwatch is specifically designed to detect and deter mishandling by monitoring the angle at which your goods are handled. It provides a reliable indicator of improper handling, allowing you to take corrective measures and ensure the highest level of product protection."
        }

    ]
    return (
        <>
            {
                arr.map((item => (
                    <div className={styles.automobile_container} id={item.id}>
                        <div className={styles.auto_heading}>
                            <div className={styles.auto_number}>
                                {item.number}
                            </div>
                            <div className={styles.auto_letter}>
                            {t(`${item.heading}`)}
                            </div>
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>
                                <Carousel
                                    autoPlay={true}
                                    interval={2000}
                                    infiniteLoop
                                    showStatus={false}
                                    showThumbs={false}
                                    showArrows={false}
                                >
                                    {Array.isArray(item.image) ? (
                                        item.image.map((imagePath, idx) => (
                                            <div className={styles.images} key={idx}>
                                                <img src={imagePath} alt={item.heading} />
                                            </div>
                                        ))
                                    ) : (
                                        <div className={styles.images}>
                                            <img src={item.image} alt={item.heading} />
                                        </div>
                                    )}

                                </Carousel>

                            </div>
                            <div className={styles.auto_img_text}>
                            {t(`${item.image_text}`)}
                                <br />
                                {t(`${item.image_text2}`)}
                            </div>
                        </div>
                    </div>
                )))
            }
        </>
    )
}

export default Descicannt