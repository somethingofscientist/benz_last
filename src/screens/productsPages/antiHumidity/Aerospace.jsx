import React, { useState } from 'react'
import styles from './Aerospace.module.css';
import Slider from '../../../components/product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';

import dessicants from '../../../components/images/des.jpg';
import silica_gel1 from '../../../components/images/silica_gel1.jpg';
import tape from '../../../components/images/tape.svg';
import engine from '../../../components/images/engine.svg';
import img from '../../../components/images/BEDry.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import Heading_header_industry from '../../../components/product_compo/heading_header_industry/Heading';
import ProductHeading from '../heading/Heading';
import routestyle from './Routing.module.css'
import propamatic from '../../../components/images/propmatic.jpeg'
import benzmatic from '../../../components/images/benzmatic.jpg'
import BEDry from '../../../components/images/BEDry.jpg'
import CDry from '../../../components/images/CDry.jpg'
import propadry from '../../../components/images/propadry.jpg'
import silica from '../../../components/images/silica.jpg'
import temp_humi2 from '../../../components/images/temp_humi2.jpg'
import propasec from '../../../Benz Pictures/Propasec/Propaec-2.jpg'
import vacuumBarrier from '../../../Benz Pictures/Vaccum Barrier Film/1 (6).jpg'

const AntiHumidity = () => {
    const { t, i18n } = useTranslation();
    const [page, setPage] = useState("product");
    console.log('hello humidity')

    const arr = [
        {
            number: "1",
            page_link: "/descicants",
            heading: "Desiccants",
            image: [dessicants, silica_gel1],
            isSlider: true,
            content: "Welcome to BENZ Packaging, your trusted source for high-quality desiccants for packaging. We understand the critical role that moisture control plays in preserving the integrity and extending the shelf life of your products. With our comprehensive range of desiccant solutions, we provide effective moisture absorption to safeguard your goods from humidity-related damage. Trust BENZ Packaging for reliable desiccant products that ensure optimal product quality and customer satisfaction.",
            subProducts: [
                {
                    image: BEDry,
                    items: "BE-DRY",
                    item_text: "Introducing BE-Dry by BENZ Packaging: Superior Moisture Control for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: CDry,
                    items: "C-DRY",
                    item_text: "Introducing BENZ Packaging's C-Dry: Advanced Moisture Control for Sensitive Products",
                    date: "8 June 2023"
                },
                {
                    image: propasec,
                    items: "Propasec",
                    item_text: "Introducing BENZ Packaging's Propasec: Effective Protection for Your Valuable Products",
                    date: "8 June 2023"
                },
                {
                    image: propadry,
                    items: "Propadry",
                    item_text: "Introducing BENZ Packaging's Propadry: Advanced Moisture Absorption for Optimal Product Preservation",
                    date: "8 June 2023"
                },
                {
                    image: silica,
                    items: "Silica Gel",
                    item_text: "Introducing BENZ Packaging's Silica Gel: Reliable Moisture Absorption for Product Protection",
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
            content: "BENZ Packaging is proud to offer a comprehensive range of indicators designed to monitor and safeguard the quality and integrity of your products. Our indicators provide visual cues and reliable data to help you assess environmental conditions, ensuring that your goods are stored and transported under optimal conditions.",
            subProducts: [
                {
                    image: temp_humi2,
                    items: "Temperature & Humidity",
                    item_text: "BENZ Packaging - Temperature & Humidity Monitoring for Product Preservation",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Shockwatch",
                    item_text: "Introducing BENZ Packaging's Shockwatch: Protecting Your Goods from Impact and Mishandling",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Tiltwatch",
                    item_text: "Introducing BENZ Packaging's Tiltwatch: Ensuring Proper Handling of Your Valuable Goods",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "3",
            page_link: "/vacuum",
            heading: "Vacuum Barrier",
            image: [vacuumBarrier],
            isSlider: true,
            content: "BENZ Packaging is delighted to present our state-of-the-art Vacuum Barrier technology, designed to create a protective barrier against oxygen and moisture, ensuring the preservation of freshness and extending the shelf life of your products.",
            subProducts: [
                {
                    image: propamatic,
                    items: "Propamatic",
                    item_text: "Introducing BENZ Packaging's Propamatic: Advanced Propellant Technology for Aerosol Packaging",
                    date: "8 June 2023"
                },
                {
                    image: benzmatic,
                    items: "Benzmatic",
                    item_text: "Introducing BENZ Packaging's Benzmatic: Cutting-Edge Automation for Packaging Efficiency",
                    date: "8 June 2023"
                }
            ]
        }
    ]
    return (
        <>
            <ProductHeading
                title="Anti Humidity"
            />

            <>
                <div className={routestyle.routing}>
                    <div className={page === 'product' ? routestyle.active_route : routestyle.route} onClick={(e) => { setPage('product') }}>
                        {t("THE PRODUCT")}
                    </div>
                    <div className={page === 'certification' ? routestyle.active_route : routestyle.route} onClick={(e) => { setPage('certification') }}>
                        {t("CERTIFICATIONS AND REGULATIONS")}
                    </div>
                    <div className={page === 'application' ? routestyle.active_route : routestyle.route} onClick={(e) => { setPage('application') }}>
                        {t("APPLICATION")}
                    </div>
                </div>


                <div className={routestyle.para}>
                    {t("BENZ Packaging backed by its parent company – New Sales Corporation has been in the field of packaging for over 38 years. BENZ Packaging has delivered safe and effective corrosion solutions across the globe. Our Technical Partners- Propagroup (Italy) are the leading manufactures of Protective Packaging Products and have onsite representation in over 90-plus countries, to provide seamless support wherever you need it. We can help you get over any challenging corrosion prevention need such as overseas shipping in corrosive environments to storage in high humidity conditions.")}
                </div>


                {
                    page === "product" ?
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
                        : page === "certification" ?
                            <>
                                <h1 style={{ textAlign: "center", margin: "6% 0" }}>
                                    {t("Currently Certificate is Not  Available")}
                                </h1>
                            </>
                            : page === "application" ?
                                <>
                                    <h1 style={{ textAlign: "center", margin: "6% 0" }}>
                                        {t("Currently  Application is Not Available")}
                                    </h1>
                                </>

                                :
                                <div className={routestyle.para}>
                                    {t("No Data Found For This Particular Section.")}
                                </div>
                }
            </>
        </>
    )
}

export default AntiHumidity