import React, { useState } from 'react'
import styles from './Aerospace.module.css';
import engine from '../../../components/images/engine.svg';
import Slider from '../../../components/product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../components/images/tape.svg'
import { useTranslation } from 'react-i18next';
import Heading_header_industry from '../../../components/product_compo/heading_header_industry/Heading';
import ProductHeading from '../heading/Heading';
import routestyle from './Routing.module.css'
import paperSystem from '../../../components/images/new_images_client/product new pages/Paper system/Paper Mailer Bag.jpeg'
import paper_cushion from '../../../components/images/paper_cushion.jpeg'
import paper_wrapping from '../../../components/images/paper_wrapping.jpeg'
import paper_void from '../../../components/images/paper_void.jpg'

import wrap_air from '../../../components/images/wrap_air.jpg'
import air_void_fill from '../../../components/images/air_void_fill.jpg'
import air_cushion_bubble from '../../../components/images/air_cushion_bubble.jpg'

import protectivePaperroll from '../../../components/images/bags_roll_sheets.jpeg'


const Handling = () => {

    const { t, i18n } = useTranslation();
    const [page, setPage] = useState("product");

    const arr = [
        {
            number: "1",
            page_link: "/paper-system",
            heading: "Paper Systems",
            image: paperSystem,
            isSlider: true,
            content: "BENZ Packaging offers a comprehensive range of paper systems designed for superior cushioning, effective void fills, and secure wrapping within your packaging. Our products are eco-friendly paper-based solutions, meticulously crafted for cushioning, void fills, and secure wrapping within your packaging, crafted to protect your valuable goods during transit and storage. Whether you need to cushion delicate items, fill empty spaces to prevent movement, or wrap products securely, our paper systems have you covered. Choose from our versatile options to enhance the safety and security of your shipments, all of which are FSC certified. With BENZ Packaging's paper systems, you can trust that your products will reach their destination in excellent condition, safeguarded from damage and shifting during transportation.",
            subProducts: [
                {
                    image: paper_cushion,
                    items: "Paper Cushioning",
                    item_text: "BENZ Packaging - Paper Cushioning: Ensuring Safe Transit for Your Delicate Items",
                    date: "8 June 2023"
                },
                {
                    image: paper_void,
                    items: "Paper Void Fill",
                    item_text: "BENZ Packaging - Paper Void Fill: Efficient and Sustainable Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: paper_wrapping,
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
            image: air_cushion_bubble,
            isSlider: true,
            content: "BENZ Packaging understands the importance of efficient and reliable packaging solutions, which is why we offer Inflatable Air Systems. Our Inflatable Air Systems provide an innovative and effective way to protect your products during transit and storage.",
            subProducts: [
                {
                    image: air_cushion_bubble,
                    items: "Air Cushion Bubble",
                    item_text: "BENZ Packaging - Air Cushion Bubble: Versatile Protection for Your Valuable Items",
                    date: "8 June 2023"
                },
                {
                    image: air_void_fill,
                    items: "Air Cushion Void Fill",
                    item_text: "BENZ Packaging - Air Cushion Void Fill: Efficient and Reliable Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: wrap_air,
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
            image: protectivePaperroll,
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
            {/* <Heading_header_industry /> */}
            <ProductHeading
                title="Handling"
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
                                            <div className={styles.auto_number}>
                                                {t(`${item.number}`)}
                                            </div>
                                            <div className={styles.auto_letter}>
                                                {t(`${item.heading}`)}
                                            </div>
                                        </div>

                                        <div className={styles.auto_img_container}>
                                            <div className={styles.auto_img}>
                                                <img src={item.image} alt="engine" />

                                                <Link to={item.page_link}>
                                                    <div className={styles.auto_pack}>
                                                        {t("PACK WITH US")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.auto_img_text}>
                                                {t(`${item.content}`)}
                                                <br />
                                                <br />
                                                <br />
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

export default Handling