import React, { useState } from 'react'
import styles from './Aerospace.module.css';
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../images/tape.svg'
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';

import air1 from '../../images/new_images_client/air_cushions/IMG_9054.jpg'
import air2 from '../../images/new_images_client/air_cushions/IMG_9056.jpg'
import air3 from '../../images/new_images_client/air_cushions/IMG_9061.jpg'

const Aerospace = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            number: "1",
            page_link: "/paper-system",
            heading: "Paper Systems",
            image: engine,
            isSlider: true,
            content: "BENZ Packaging takes pride in offering innovative paper systems that provide sustainable packaging solutions for various industries. With our commitment to environmental responsibility, we provide high-quality paper-based packaging solutions that are both eco-friendly and efficient.",
            subProducts: [
                {
                    image: tape,
                    items: "Paper Cushioning",
                    item_text: "BENZ Packaging - Paper Cushioning: Ensuring Safe Transit for Your Delicate Items",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Paper Void Fill",
                    item_text: "BENZ Packaging - Paper Void Fill: Efficient and Sustainable Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Paper Wrapping",
                    item_text: "BENZ Packaging - Paper Wrapping: Secure and Eco-Friendly Protection for Your Products",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "2",
            page_link: "/inflatable-air-systems",
            heading: "Inflatable Air Systems",
            image: [air1, air2, air3],
            isSlider: true,
            content: "BENZ Packaging understands the importance of efficient and reliable packaging solutions, which is why we offer Inflatable Air Systems. Our Inflatable Air Systems provide an innovative and effective way to protect your products during transit and storage.",
            subProducts: [
                {
                    image: tape,
                    items: "Air Cushion Bubble",
                    item_text: "BENZ Packaging - Air Cushion Bubble: Versatile Protection for Your Valuable Items",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Air Cushion Void Fill",
                    item_text: "BENZ Packaging - Air Cushion Void Fill: Efficient and Reliable Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Air Cushion Wrap",
                    item_text: "BENZ Packaging - Air Cushion Wrap: Versatile Protection for Your Products",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "3",
            page_link: "/foam-systems",
            heading: "Foam Systems",
            image: engine,
            isSlider: true,
            content: "BENZ Packaging is pleased to introduce our Foam Systems, a state-of-the-art packaging solution designed to provide advanced protection for your valuable and delicate products. Our Foam Systems combine innovative foam materials with customizable packaging designs to ensure that your items are safeguarded during shipping, storage, and handling.",
            subProducts: [
                {
                    image: tape,
                    items: "Inst-Expa Foam Bag",
                    item_text: "BENZ Packaging - Inst-Expa Foam Bag: Convenient and Reliable Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "EPE Foam",
                    item_text: "BENZ Packaging - EPE Foam: Versatile Protection for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "EVA Foam",
                    item_text: "BENZ Packaging - EVA Foam: Superior Protection for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Foam Bag & Sheet",
                    item_text: "BENZ Packaging - Foam Bag & Sheet: Flexible and Reliable Packaging Solutions",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "4",
            page_link: "/mailer-systems",
            heading: "Mailer Systems",
            image: engine,
            isSlider: true,
            content: "BENZ Packaging is pleased to introduce our Mailer Systems, a range of packaging solutions designed to provide secure and convenient shipping for your products.",
            subProducts: [
                {
                    image: tape,
                    items: "Plastic Mailers",
                    item_text: "BENZ Packaging - Plastic Mailers: Reliable Shipping Solutions for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Paper Mailer",
                    item_text: "BENZ Packaging - Paper Mailer: Sustainable Shipping Solutions for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Custom Printed Mailers",
                    item_text: "BENZ Packaging - Custom Printed Mailers: Enhance Your Branding and Secure Shipping Solutions",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Paper Bags",
                    item_text: "BENZ Packaging - Paper Bags: Sustainable and Versatile Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Plastic Bags",
                    item_text: "BENZ Packaging - Plastic Bags: Convenient and Reliable Packaging Solutions",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "5",
            page_link: "/protective-paper",
            heading: "Protective Paper Rolls & Sheets",
            image: engine,
            isSlider: true,
            content: "BENZ Packaging is pleased to offer Protective Paper Rolls & Sheets, a trusted solution for providing reliable cushioning and protection to your valuable products during storage and transportation.",
            subProducts: [
                {
                    image: tape,
                    items: "Void Fill Paper Packaging",
                    item_text: "BENZ Packaging - Void Fill Paper Packaging: Efficient and Sustainable Solution for Fillers",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Surface Protection Paper",
                    item_text: "BENZ Packaging - Surface Protection Paper: Reliable Shield for Delicate Surfaces",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Grocery & Food Service Paper",
                    item_text: "BENZ Packaging - Grocery & Food Service Paper: Reliable Packaging for Freshness and Convenience",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Water Barier PLA Coated Paper",
                    item_text: "BENZ Packaging - Water Barrier PLA Coated Paper: Sustainable Solution for Moisture Resistance",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "PE Coated Paper",
                    item_text: "BENZ Packaging - PE Coated Paper: Reliable Protection for Various Applications",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Machine Glazed Paper",
                    item_text: "BENZ Packaging - Machine Glazed Paper: Smooth and Reliable Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "SBS Boards",
                    item_text: "BENZ Packaging - SBS Boards: Sturdy and Versatile Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Propaflex",
                    item_text: "BENZ Packaging - Propaflex: Flexible and Protective Packaging Solution",
                    date: "8 June 2023"
                },
            ]
        }
    ]
    return (
        <>
            {
                arr.map((item) => (
                    <div className={styles.automobile_container} id='section3'>
                        <div className={styles.auto_heading}>
                            <div className={styles.auto_number}>
                                {t(`${item.number}`)}
                            </div>
                            <div className={styles.auto_letter}>
                                {t(`${item.heading}`)}
                            </div>
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>
                                {/* <img src={item.image} alt="engine" /> */}

                                <Carousel
                                    autoPlay={true}
                                    interval={3000}
                                    infiniteLoop
                                    showStatus={false}
                                    showThumbs={false}
                                    showArrows={false}
                                >
                                    {Array.isArray(item.image) ? (
                                        item.image.map((image, idx) => (
                                            <div className={styles.images} key={idx}>
                                                <img src={image} alt={image} />
                                            </div>
                                        ))
                                    ) : (
                                        <div className={styles.images}>
                                            <img src={item.image} alt={item.image} />
                                        </div>
                                    )}
                                </Carousel>

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

                        {/* {
                            item.isSlider && <Slider subProducts={item.subProducts.map(subItem => ({ ...subItem, item_text: t(subItem.item_text) }))} />
                        } */}

                        <Link to={item.page_link}>
                            {
                                item.isSlider && (
                                    <Slider subProducts={item.subProducts.map(subItem => ({
                                        ...subItem,
                                        item_text: t(subItem.item_text),
                                        page_link: item.page_link, // Pass the main page link to subItems
                                    }))} />
                                )
                            }
                        </Link>
                    </div>
                ))
            }
        </>
    )
}

export default Aerospace