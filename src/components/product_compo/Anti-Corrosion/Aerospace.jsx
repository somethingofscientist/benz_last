import React from 'react'
import styles from './Aerospace.module.css';
import engine from '../../images/engine.svg';
import Slider from '../horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../images/tape.svg'
import rp_oils from '../../images/rp_oils.jpeg'
import vci_film from '../../images/film_sheet1.jpeg'
import vci_film2 from '../../images/vci_film2.JPG'
import vci_Paper from '../../images/VCI_Paper.jpg'

import oil from '../../images/motor_oil.jpeg'

import vci_emitter1 from '../../images/vci_emitter1.jpeg'
import vci_emitter2 from '../../images/vci_emitter2.jpeg'
import vci_emitter3 from '../../images/vci_emitter3.jpeg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

const Aerospace = () => {

    const { t, i18n } = useTranslation();
    const arr = [
        {
            number: "1",
            page_link: "/vci-film",
            heading: "VCI Film",
            image: [vci_film, vci_film2],
            isSlider: true,
            content: "Benz Packaging is delighted to introduce our VCI Film, an advanced solution designed to provide exceptional protection against corrosion for your valuable products. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your goods from the damaging effects of corrosion.",
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
            page_link: "/vci-paper",
            heading: "VCI Paper",
            image: vci_Paper,
            isSlider: true,
            content: "Benz Packaging is proud to present our VCI Paper, a reliable solution designed to provide effective corrosion protection for a wide range of products. With our expertise in packaging technology, we offer a trusted and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
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
                    items: "VCI Crepe Paper",
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
            page_link: "/vci-emitters",
            heading: "VCI Emitters",
            image: [vci_emitter1, vci_emitter2, vci_emitter3],
            isSlider: true,
            content: "Benz Packaging is proud to introduce our VCI Emitters, an advanced solution designed to provide superior corrosion protection for a wide range of products. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
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
                    items: "VCI Tablets",
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
            page_link: "/rp-oils",
            heading: "RP Oils",
            image: [oil, rp_oils],
            isSlider: true,
            content: "Benz Packaging is pleased to introduce our range of RP Oils, high-quality lubricants designed to enhance the performance and lifespan of your machinery and equipment. With our expertise in packaging technology, we offer reliable and innovative solutions to meet your lubrication needs.",
            subProducts: [
                {
                    image: tape,
                    items: "Short Term",
                    item_text: "Benz Packaging - RP Oils Short Term- Temporary Lubrication for Various Applications",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Medium Term",
                    item_text: "Benz Packaging - RP Oils Medium Term- Reliable Lubrication for Intermediate Durations",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Long Term",
                    item_text: "Benz Packaging - RP Oils Long Term- Extended Protection for Long-Term Lubrication",
                    date: "8 June 2023"
                }
            ]
        },
        {
            number: "5",
            page_link: "/rust-removers",
            heading: "Rust Removers",
            image: engine,
            isSlider: true,
            content: "Benz Packaging is pleased to introduce our range of Rust Removers, specially formulated to effectively remove rust and restore surfaces to their original condition. With our expertise in packaging technology, we offer reliable and innovative solutions to tackle rust-related challenges.",
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
                            <div className={styles.auto_number}>
                                {t(`${item.number}`)}
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
                                        item.image.map((imageUrl, idx) => (
                                            <div className={styles.images} key={idx}>
                                                <img src={imageUrl} alt={imageUrl} />
                                            </div>
                                        ))
                                    ) : (
                                        <div className={styles.images}>
                                            <img src={item.image} alt={item.image} />
                                        </div>
                                    )}
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