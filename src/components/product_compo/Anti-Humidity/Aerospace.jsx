import React, { useState } from 'react'
import styles from './Aerospace.module.css';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';

import dessicants from '../../images/des.jpg';
import silica_gel1 from '../../images/silica_gel1.jpg';
import tape from '../../images/tape.svg';
import engine from '../../images/engine.svg';
import img from '../../images/BEDry.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';


const Aerospace = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            number: "1",
            page_link: "/descicants",
            heading: "Desiccants",
            image: [dessicants, silica_gel1],
            isSlider: true,
            content: "Welcome to Benz Packaging, your trusted source for high-quality desiccants for packaging. We understand the critical role that moisture control plays in preserving the integrity and extending the shelf life of your products. With our comprehensive range of desiccant solutions, we provide effective moisture absorption to safeguard your goods from humidity-related damage. Trust Benz Packaging for reliable desiccant products that ensure optimal product quality and customer satisfaction.",
            subProducts: [
                {
                    image: tape,
                    items: "BE-DRY",
                    item_text: "Introducing BE-Dry by Benz Packaging: Superior Moisture Control for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "C-DRY",
                    item_text: "Introducing Benz Packaging's C-Dry: Advanced Moisture Control for Sensitive Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Propasec",
                    item_text: "Introducing Benz Packaging's Propasec: Effective Protection for Your Valuable Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Propadry",
                    item_text: "Introducing Benz Packaging's Propadry: Advanced Moisture Absorption for Optimal Product Preservation",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Silica Gel",
                    item_text: "Introducing Benz Packaging's Silica Gel: Reliable Moisture Absorption for Product Protection",
                    date: "8 June 2023"
                },

            ]
        },
        {
            number: "2",
            page_link: "/indicators",
            heading: "Indicators",
            image: [img, tape, dessicants],
            isSlider: true,
            content: "Benz Packaging is proud to offer a comprehensive range of indicators designed to monitor and safeguard the quality and integrity of your products. Our indicators provide visual cues and reliable data to help you assess environmental conditions, ensuring that your goods are stored and transported under optimal conditions.",
            subProducts: [
                {
                    image: tape,
                    items: "Temperature & Humidity",
                    item_text: "Benz Packaging - Temperature & Humidity Monitoring for Product Preservation",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Shockwatch",
                    item_text: "Introducing Benz Packaging's Shockwatch: Protecting Your Goods from Impact and Mishandling",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Tiltwatch",
                    item_text: "Introducing Benz Packaging's Tiltwatch: Ensuring Proper Handling of Your Valuable Goods",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "3",
            page_link: "/vacuum",
            heading: "Vacuum Barrier",
            image: [img, tape],
            isSlider: true,
            content: "Benz Packaging is delighted to present our state-of-the-art Vacuum Barrier technology, designed to create a protective barrier against oxygen and moisture, ensuring the preservation of freshness and extending the shelf life of your products.",
            subProducts: [
                {
                    image: tape,
                    items: "Propamatic",
                    item_text: "Introducing Benz Packaging's Propamatic: Advanced Propellant Technology for Aerosol Packaging",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Benzmatic",
                    item_text: "Introducing Benz Packaging's Benzmatic: Cutting-Edge Automation for Packaging Efficiency",
                    date: "8 June 2023"
                }
            ]
        }
    ]
    return (
        <>
            {
                arr.map((item) => (
                    <div className={styles.automobile_container} id='section3'>
                        <div className={styles.auto_heading}>
                            <div className={styles.auto_number}>{item.number}</div>
                            <div className={styles.auto_letter}>
                                {t(`${item.heading}`)}
                            </div>
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>

                                <Carousel
                                    autoPlay={true}
                                    interval={3000}
                                    infiniteLoop
                                    showStatus={false}
                                    showThumbs={false}
                                    showArrows={false}
                                >
                                    {item.image.map((image, idx) => (
                                        <div className={styles.images} key={idx}>
                                            <img src={image} alt={image} />
                                        </div>
                                    ))}
                                </Carousel>
                                {/* <img src={item.image} alt="engine" /> */}

                                <Link to={item.page_link}>
                                    <div className={styles.auto_pack}>
                                        {t("PACK WITH US")}
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.auto_img_text}>
                                {t(`${item.content}`)}
                            </div>
                        </div>

                        {
                            item.isSlider && <Slider subProducts={item.subProducts.map(subItem => ({ ...subItem, item_text: t(subItem.item_text) }))} />
                        }
                    </div>
                ))
            }
        </>
    )
}

export default Aerospace