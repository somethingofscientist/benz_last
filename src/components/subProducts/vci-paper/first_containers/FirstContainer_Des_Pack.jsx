import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import vci_plain1 from '../../../images/vci_plain1.jpeg'
import vci_plain2 from '../../../images/vci_plain2.jpeg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

const Descicannt = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Laminated Paper",
            image: engine,
            image_text: "Benz Packaging is pleased to introduce our Laminated Paper, a versatile solution designed to provide enhanced protection for a wide range of products. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods.",
            image_text2: "Our Laminated Paper combines multiple layers of paper with a laminated coating, creating a durable and protective barrier. This unique construction offers increased strength and resistance to tearing, ensuring your products are well-protected during storage and transportation."
        },

        {
            id: "section2",
            number: "2",
            heading: "VCI Plain Paper",
            image: [vci_plain1, vci_plain2],
            image_text: "Benz Packaging is proud to present our VCI Plain Paper, a reliable solution designed to provide effective corrosion protection for a wide range of products. With our expertise in packaging technology, we offer a trusted and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2: "Our VCI Plain Paper is infused with Volatile Corrosion Inhibitor (VCI) technology, making it an excellent choice for corrosion protection during storage and transportation. The VCI molecules released by the paper create a protective shield around your products, preventing corrosion and ensuring their long-term preservation. "
        },

        {
            id: "section3",
            number: "3",
            heading: "VCI Crepe Paper",
            image: engine,
            image_text: "Benz Packaging is delighted to introduce our VCI Crepe Paper, a flexible solution designed to provide effective corrosion protection for a wide range of products. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2: "Our VCI Crepe Paper features a crepe texture, which enhances its flexibility and conformability. This unique characteristic allows the paper to adapt to various product shapes and sizes, ensuring optimal coverage and protection. The paper is infused with Volatile Corrosion Inhibitor (VCI) technology, creating a protective shield that prevents corrosion and preserves your assets."
        },
        {
            id: "section4",
            number: "4",
            heading: "VCI Chips",
            image: engine,
            image_text: "Benz Packaging is excited to introduce our VCI Crepe Paper, a flexible solution designed to provide effective corrosion protection for a wide range of products. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2: "Our VCI Crepe Paper features a creped texture, which enhances its flexibility and conformability. This unique characteristic allows the paper to adapt to various product shapes and sizes, ensuring optimal coverage and protection. The paper is infused with Volatile Corrosion Inhibitor (VCI) technology, creating a protective shield that prevents corrosion and preserves your assets."
        },
        {
            id: "section5",
            number: "5",
            heading: "VCI HD Paper",
            image: engine,
            image_text: "Benz Packaging is pleased to introduce our VCI HD Paper, a heavy-duty solution designed to provide exceptional corrosion protection for demanding applications. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2: "Our VCI HD Paper is specifically engineered to withstand rugged environments and handle heavy loads. It is infused with Volatile Corrosion Inhibitor (VCI) technology, creating a protective shield that prevents corrosion and preserves your assets, even in challenging conditions."
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
                                {/* <img src={item.image} alt="engine" /> */}

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