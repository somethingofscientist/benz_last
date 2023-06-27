import React from 'react'
import styles from './Aerospace.module.css';
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../images/tape.svg'
import rp_oils from '../../images/rp_oils.jpeg'
import vci_film from '../../images/film_sheet1.jpeg'
import vci_Paper from '../../images/VCI_Paper.jpg'

const Aerospace = () => {
    const arr = [
        {
            number: "1",
            page_link:"/vci-film",
            heading: "VCI Film",
            image: vci_film,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "VCI Bio-Film",
                    item_text: "Benz Packaging - VCI Bio-Film: Environmentally Friendly Corrosion Protection",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Film",
                    item_text: "Benz Packaging - VCI Film: Advanced Corrosion Protection for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Stretch Film",
                    item_text: "Benz Packaging - VCI Stretch Film: Advanced Corrosion Protection with Stretchability",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Bubble Film",
                    item_text: "Benz Packaging - VCI Bubble Film: Comprehensive Corrosion Protection with Bubble Cushioning",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Woven Fabric Film",
                    item_text: "Benz Packaging - VCI Woven Fabric Film: Robust Corrosion Protection with Strength and Durability",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Anti static Film",
                    item_text: "Benz Packaging - VCI Anti-static Film: Advanced Corrosion Protection with Electrostatic Discharge Control",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Shrink Film",
                    item_text: "Benz Packaging - VCI Shrink Film: Superior Corrosion Protection with Secure Wrapping",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Non-Woven Film",
                    item_text: "Benz Packaging - VCI Non-Woven Film: Versatile Corrosion Protection with Non-Woven Material",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "2 ",
            page_link:"/vci-paper",
            heading: "VCI Paper",
            image: vci_Paper,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Laminated Paper",
                    item_text: "Benz Packaging - Laminated Paper: Enhanced Protection and Versatility for Your Packaging Needs",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Plain Paper",
                    item_text: "Benz Packaging - VCI Plain Paper: Reliable Corrosion Protection in a Simple and Versatile Form",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items:"VCI Crepe Paper",
                    item_text: "Benz Packaging - VCI Crepe Paper: Flexible Corrosion Protection with Enhanced Conformability",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Chips",
                    item_text: "Benz Packaging - VCI Crepe Paper: Flexible Corrosion Protection with Creped Texture",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI HD Paper ",
                    item_text: "Benz Packaging - VCI HD Paper: Heavy-Duty Corrosion Protection for Demanding Applications",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "3",
            page_link:"/vci-emitters",
            heading: "VCI Emitters",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "VCI 25",
                    item_text: "Benz Packaging - VCI 25: Long-Lasting Corrosion Protection for Metals",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Propatech VCI emitter",
                    item_text: "Benz Packaging - Propatech VCI Emitter: Advanced Corrosion Protection with Controlled Emission",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items:"VCI Tablets",
                    item_text: "Benz Packaging - VCI Tablets: Convenient Corrosion Protection for Metal Products",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Foam",
                    item_text: "Benz Packaging - VCI Foam: Versatile Corrosion Protection with Cushioning Properties",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "VCI Noxy",
                    item_text: "Benz Packaging - VCI Noxy: Advanced Corrosion Protection for Ferrous and Non-Ferrous Metals",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "4",
            page_link:"/rp-oils",
            heading: "RP Oils",
            image: rp_oils,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Short Term",
                    item_text: "Benz Packaging - RP Oils Short Term: Temporary Lubrication for Various Applications",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Medium Term",
                    item_text: "Benz Packaging - RP Oils Medium Term: Reliable Lubrication for Intermediate Durations",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Long Term",
                    item_text: "Benz Packaging - RP Oils Long Term: Extended Protection for Long-Term Lubrication",
                    date: "8 June 2023"
                }
            ]
        },
        {
            number: "5",
            page_link:"/rust-removers",
            heading: "Rust Removers",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "Acidic",
                    item_text: "Benz Packaging - Acidic Rust Removers: Powerful Solutions for Stubborn Rust Removal",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Neutral",
                    item_text: "Benz Packaging - Neutral Rust Removers: Safe and Effective Solutions for Rust Removal",
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

                                <Link to={item.page_link}>
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