import React, { useState } from 'react'
import styles from './Aerospace.module.css';
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../images/tape.svg'

const Aerospace = () => {


    const arr = [
        {
            number: "1",
            page_link: "/paper-system",
            heading: "Paper Systems",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Paper Cushioning",
                    item_text: "Benz Packaging - Paper Cushioning: Ensuring Safe Transit for Your Delicate Items",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Paper Void Fill",
                    item_text: "Benz Packaging - Paper Void Fill: Efficient and Sustainable Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Paper Wrapping",
                    item_text: "Benz Packaging - Paper Wrapping: Secure and Eco-Friendly Protection for Your Products",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "2",
            page_link: "/inflatable-air-systems",
            heading: "Inflatable Air Systems",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Air Cushion Bubble",
                    item_text: "Benz Packaging - Air Cushion Bubble: Versatile Protection for Your Valuable Items",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Air Cushion Void Fill",
                    item_text: "Benz Packaging - Air Cushion Void Fill: Efficient and Reliable Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Air Cushion Wrap",
                    item_text: "Benz Packaging - Air Cushion Wrap: Versatile Protection for Your Products",
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
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Inst-Expa Foam Bag ",
                    item_text: "Benz Packaging - Inst-Expa Foam Bag: Convenient and Reliable Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "EPE Foam ",
                    item_text: "Benz Packaging - EPE Foam: Versatile Protection for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "EVA Foam ",
                    item_text: "Benz Packaging - EVA Foam: Superior Protection for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Foam Bag & Sheet                    ",
                    item_text: "Benz Packaging - Foam Bag & Sheet: Flexible and Reliable Packaging Solutions",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "4",
            page_link: "/mailer-systems",
            heading: "Mailer Systems ",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Plastic Mailers ",
                    item_text: "Benz Packaging - Plastic Mailers: Reliable Shipping Solutions for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Paper Mailer ",
                    item_text: "Benz Packaging - Paper Mailer: Sustainable Shipping Solutions for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Custom Printed Mailers ",
                    item_text: "Benz Packaging - Custom Printed Mailers: Enhance Your Branding and Secure Shipping Solutions",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Paper Bags",
                    item_text: "Benz Packaging - Paper Bags: Sustainable and Versatile Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Plastic Bags",
                    item_text: "Benz Packaging - Plastic Bags: Convenient and Reliable Packaging Solutions",
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
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Void Fill Paper Packaging",
                    item_text: "Benz Packaging - Void Fill Paper Packaging: Efficient and Sustainable Solution for Fillers",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Surface Protection Paper                    ",
                    item_text: "Benz Packaging - Surface Protection Paper: Reliable Shield for Delicate Surfaces",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Grocery & Food Service Paper                    ",
                    item_text: "Benz Packaging - Grocery & Food Service Paper: Reliable Packaging for Freshness and Convenience",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Water Barier PLA Coated Paper                    ",
                    item_text: "Benz Packaging - Water Barrier PLA Coated Paper: Sustainable Solution for Moisture Resistance",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "PE Coated Paper                    ",
                    item_text: "Benz Packaging - PE Coated Paper: Reliable Protection for Various Applications",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Machine Glazed Paper                    ",
                    item_text: "Benz Packaging - Machine Glazed Paper: Smooth and Reliable Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "SBS Boards                    ",
                    item_text: "Benz Packaging - SBS Boards: Sturdy and Versatile Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Propaflex                    ",
                    item_text: "Benz Packaging - Propaflex: Flexible and Protective Packaging Solution",
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
                            <div className={styles.auto_number}>{item.number}</div>
                            <div className={styles.auto_letter}>{item.heading} </div>
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>
                                <img src={item.image} alt="engine" />

                                <Link to={item.page_link}>
                                    <div className={styles.auto_pack}>
                                        Pack With Us
                                    </div>
                                </Link>
                            </div>
                            <div className={styles.auto_img_text}>{item.content}</div>
                        </div>

                        {
                            item.isSlider && <Slider subProducts={item.subProducts} />
                        }
                    </div>
                ))
            }
        </>
    )
}

export default Aerospace