import React from 'react'
import styles from './Aerospace.module.css';
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../images/tape.svg'

const Aerospace = () => {
    const arr = [
        {
            number: "1",
            heading: "VCI Film",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "VCI Bio-Film",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Film",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Stretch Film",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Bubble Film",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Woven Fabric Film",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Anti static Film",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Shrink Film",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Non-Woven Film",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "2 ",
            heading: "VCI Paper",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Laminated Paper",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Plain Paper",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items:"VCI Crepe Paper",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Chips",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI HD Paper ",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "3",
            heading: "VCI Emitters",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "VCI 25",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Propatech VCI emitter",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items:"VCI Tablets",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Foam",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Noxy",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "4",
            heading: "RP Oils",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Short Term",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Medium Term",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Long Term",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                }
            ]
        },
        {
            number: "5",
            heading: "Rust Removers",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Acidic",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Neutral",
                    item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
                    date: "8 June 2023"
                },
            ]
        },
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
                            item.isSlider && <Slider subProducts={item.subProducts}/>
                        }
                    </div>
                ))
            }
        </>
    )
}

export default Aerospace