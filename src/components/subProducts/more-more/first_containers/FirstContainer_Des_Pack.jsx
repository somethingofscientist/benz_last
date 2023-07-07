import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import scotchtape from '../../../images/scotchtape.jpg'
import tape1 from '../../../images/main_tapes.jpg'
import tape2 from '../../../images/main_tapes2.jpg'
import tape3 from '../../../images/main_tapes3.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

const Descicannt = () => {
    
    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "BENZpolene",
            image: engine,
            image_text: "Benz Packaging introduces BENZpolene, a cutting-edge range of polyethylene products designed to address various packaging needs across industries. BENZpolene stands as a testament to our commitment to delivering high-quality, versatile, and sustainable packaging solutions.",
            image_text2: "Unmatched Versatility: BENZpolene encompasses a diverse portfolio of polyethylene products that can be tailored to meet specific packaging requirements. Whether you need flexible films, rigid containers, or protective wraps, BENZpolene offers a wide range of options to suit various applications, ensuring optimal performance and compatibility."
        },

        {
            id: "section2",
            number: "2",
            heading: "Ice Pack Gels",
            image: engine,
            image_text: "Introducing Benz Packaging's Ice Pack Gels, the ultimate solution for maintaining the freshness and quality of your perishable products. Our Ice Pack Gels are specially designed to provide reliable and long-lasting cold temperatures, ensuring that your goods stay cool throughout their journey.",
            image_text2: "Unmatched Cooling Performance: Our Ice Pack Gels are formulated with advanced cooling technology to deliver optimal temperature control. The gel composition allows for efficient distribution of coldness, effectively maintaining low temperatures for extended periods. Whether you're shipping food, pharmaceuticals, or any temperature-sensitive products, our Ice Pack Gels are up to the task."
        },

        {
            id: "section3",
            number: "3",
            heading: "Blister Trays",
            image: engine,
            image_text: "Introducing Benz Packaging's Blister Trays, the perfect packaging solution to protect, display, and enhance the presentation of your products. Our blister trays are designed with precision and attention to detail, providing a secure and visually appealing package for a wide range of items.",
            image_text2: "Product Protection: Our blister trays offer excellent product protection by creating a barrier between your items and external factors such as dust, moisture, and handling. The sturdy and durable construction of the trays ensures that your products remain safe during transportation and storage, minimizing the risk of damage or contamination."
        },
        {
            id: "section4",
            number: "4",
            heading: "Labels",
            image: engine,
            image_text: "Introducing Benz Packaging's high-quality labels, the perfect solution to effectively communicate important information, enhance product identification, and reinforce your brand image. Our labels are designed with precision and attention to detail, ensuring clear and reliable messaging on a wide range of products.",
            image_text2: "Clear Communication: Our labels are designed to provide clear and concise communication to consumers. Whether it's product information, usage instructions, warnings, or branding elements, our labels are crafted to effectively convey the intended message. We offer a variety of label sizes, shapes, and materials to accommodate different packaging requirements."
        },
        {
            id: "section5",
            number: "5",
            heading: " Tapes",
            image: [scotchtape, tape1, tape2, tape3],
            image_text: "Introducing Benz Packaging's wide range of tapes, designed to provide secure and reliable packaging solutions for various industries. Our high-quality tapes offer excellent adhesion, durability, and versatility, ensuring that your packages are sealed and protected during transit and storage.",
            image_text2: "Secure Sealing: Our tapes are specifically engineered to provide strong and secure sealing for different types of packaging materials, including cardboard, plastic, and more. Whether you need to seal boxes, cartons, or envelopes, our tapes offer reliable adhesion to keep your packages intact and protected."
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