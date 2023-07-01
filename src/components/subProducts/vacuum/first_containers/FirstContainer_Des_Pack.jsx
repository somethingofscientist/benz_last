import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import propmatic from '../../../images/propmatic.jpeg'
import benzmatic from '../../../images/benzmatic.jpg'
import { useTranslation } from 'react-i18next';

const Descicannt = () => {
    
    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Propamatic",
            image: propmatic,
            image_text: "Benz Packaging is proud to present Propamatic, our cutting-edge propellant technology designed specifically for aerosol packaging. With Propamatic, we offer a reliable and efficient solution for delivering aerosol products with precision and effectiveness.",
            image_text2: "Propamatic utilizes advanced propellant formulations that ensure consistent and controlled product dispensing. Our propellant technology is carefully engineered to provide optimal pressure and flow characteristics, ensuring smooth and accurate aerosol spray patterns. With Propamatic, you can achieve precise product distribution, enhancing user experience and product performance."
         },

        {
            id: "section2",
            number: "2",
            heading: "Benzmatic",
            image: benzmatic,
            image_text:"Benz Packaging is thrilled to present Benzmatic, our state-of-the-art automation technology designed to optimize packaging processes and enhance overall efficiency. With Benzmatic, we offer a reliable and innovative solution to streamline your packaging operations and maximize productivity.",
            image_text2: "Benzmatic combines advanced robotics and intelligent automation systems to revolutionize the way you package your products. Our technology is meticulously engineered to handle various packaging tasks, such as filling, sealing, labeling, and sorting, with precision and speed. By automating these processes, you can significantly reduce manual labor, minimize errors, and increase production throughput."
        },
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
                                <img src={item.image} alt="engine" />

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