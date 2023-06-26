import React, { useState } from 'react'
import styles from './Aerospace.module.css';
import dessicants from '../../images/des.jpeg';
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../images/tape.svg'

const Aerospace = () => {


    const arr = [
        {
            number: "1",
            page_link:"/descicants",
            heading: "Desiccants",
            image: dessicants,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
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
            page_link:"/indicators",
            heading: "Indicators",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
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
            page_link:"/vacuum",
            heading: "Vacuum Barrier",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
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