import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import silica from '../../../images/silica.jpeg'
import Cdry from '../../../images/CDry.jpg'
import BEDry from '../../../images/BEDry.jpg'
import BEDry2 from '../../../images/BEDry2.jpg'
import BEDry3 from '../../../images/BEDry3.jpg'
import BEDry4 from '../../../images/BEDry4.jpg'

import Cdry2 from '../../../images/Cdry2.jpg'
import propadry from '../../../images/propadry.jpg'

import propadry2 from '../../../images/propadry2.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Descicannt = () => {
    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "BE-Dry",
            image: [BEDry, BEDry2, BEDry3, BEDry4],
            image_text: "Humidity poses a significant threat to a wide range of industries, including electronics, pharmaceuticals, textiles, and more. Excess moisture can lead to product degradation, mold growth, and compromised quality, resulting in financial losses. At Benz Packaging, we understand these challenges, and that's why we've developed BE-Dry.",
            image_text2: "BE-Dry utilizes state-of-the-art technology and advanced materials to create a highly effective moisture control system. Our solution features a range of desiccant products, each tailored to meet specific moisture control requirements. Whether you need moisture absorption, moisture adsorption, or both, BE-Dry has the ideal solution for your packaging needs."
        },

        {
            id: "section2",
            number: "2",
            heading: "C-Dry",
            image: [Cdry, Cdry2],
            image_text: "Benz Packaging is excited to unveil our latest innovation in moisture control solutions: C-Dry. Designed specifically for sensitive products, C-Dry offers advanced protection against moisture, ensuring that your goods remain in pristine condition throughout their storage and transportation.",
            image_text2: "For industries dealing with delicate electronics, pharmaceuticals, precision instruments, and other moisture-sensitive goods, maintaining an optimal moisture environment is crucial. Excess humidity can lead to malfunctions, deterioration, and irreversible damage. That's why Benz Packaging has developed C-Dry, a cutting-edge solution to combat moisture-related issues."
        },

        {
            id: "section3",
            number: "3",
            heading: "Propasec",
            image: engine,
            image_text: "Benz Packaging is thrilled to present our latest innovation in product protection: Propasec. Designed to safeguard your valuable goods from moisture, oxygen, and other harmful elements, Propasec offers reliable and comprehensive protection throughout their storage and transportation.",
            image_text2: "When it comes to industries such as electronics, pharmaceuticals, aerospace, and food, preserving product integrity is of utmost importance. Exposure to moisture and oxygen can lead to oxidation, degradation, and compromised quality. Recognizing these challenges, Benz Packaging has developed Propasec, a cutting-edge solution to ensure your products remain in optimal condition."
        },

        {
            id: "section4",
            number: "4",
            heading: "Propadry",
            image: [propadry, propadry2],
            image_text: "Benz Packaging is delighted to unveil our latest breakthrough in moisture control solutions: Propadry. Developed to address the challenges posed by moisture, Propadry offers cutting-edge moisture absorption capabilities to ensure your products remain dry, fresh, and well-preserved.",
            image_text2: "Moisture can have detrimental effects on a wide range of industries, including electronics, textiles, leather goods, and more. Excess humidity can lead to product deterioration, mold growth, and compromised quality. At Benz Packaging, we understand the importance of combating moisture-related issues, and that's why we have introduced Propadry."
        },

        {
            id: "section5",
            number: "5",
            heading: "Silica Gel",
            image: silica,
            image_text: "Benz Packaging is pleased to present our high-quality Silica Gel desiccants, designed to provide effective moisture control and protection for a wide range of products. With our Silica Gel desiccants, you can trust that your goods will remain dry, fresh, and well-preserved throughout their storage and transportation.",
            image_text2: "Moisture can be a significant threat to various industries, including electronics, pharmaceuticals, leather goods, and food products. Excess humidity can lead to corrosion, mold growth, and compromised quality. Recognizing the importance of moisture control, Benz Packaging offers Silica Gel desiccants to effectively combat these issues."
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
                            <div className={styles.auto_letter}>{item.heading}</div>
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>
                                {/* <img src={item.image} alt="engine" /> */}
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
                                {item.image_text}
                                <br />
                                {item.image_text2}
                            </div>
                        </div>
                    </div>
                )))
            }
        </>
    )
}

export default Descicannt