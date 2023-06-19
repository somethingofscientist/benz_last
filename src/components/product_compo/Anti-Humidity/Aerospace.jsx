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
            heading: "Desiccants",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "BE-DRY",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "C-DRY",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Propasec",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Propadry",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Silica Gel",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },

            ]
        },
        {
            number: "2",
            heading: "Indicators",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Temperature & Humidity",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Shockwatch",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Tiltwatch",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "3",
            heading: "Vacuum Barrier",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Propamatic",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Benzmatic",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
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

                                <Link to="/descicants">
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