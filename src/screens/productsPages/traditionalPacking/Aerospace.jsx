import React, { useState } from 'react'
import styles from './Aerospace.module.css';
import engine from '../../../components/images/engine.svg';
import Slider from '../../../components/product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../components/images/tape.svg'
import rolls_pouches from '../../../components/images/rolls_pouches.jpeg'
import woodenBox from '../../../components/images/woodenBox.jpg'
import { useTranslation } from 'react-i18next';
import Heading_header_industry from '../../../components/product_compo/heading_header_industry/Heading';
import ProductHeading from '../heading/Heading';
import routestyle from './Routing.module.css'


import box from '../../../Benz Pictures/Boxes/bigstock-Wooden-Boxes-In-The-Warehouse--382119800.jpg'
import paper_main from '../../../components/images/paper_main.jpeg'
import ldpe from '../../../Benz Pictures/LDPE Bags.jpg'
import bag from '../../../components/images/new_images_client/OneDrive-2023-09-20/Bags on roll.jpeg'
import zip_lock1 from '../../../components/images/zip_lock1.jpg'
import stretchfilms from '../../../components/images/stretchfilms.jpeg'
import anti_static from '../../../components/images/esd_bags.jpg'
import tapes from '../../../components/images/main_tapes3.jpg' 
import labels from '../../../Benz Pictures/labels/Label 5.png' 

const TraditionalPackaging = () => {

    const { t, i18n } = useTranslation();
    const [page, setPage] = useState("product");

    const arr = [
        {
            number: "1",
            page_link: "/boxes",
            heading: "Boxes",
            image: box,
            isSlider: true,
            content: "BENZ Packaging is delighted to offer a wide range of boxes to meet your packaging needs. Our boxes are designed to provide secure and reliable packaging solutions for various industries and applications.",
            subProducts: [
                {
                    image: woodenBox,
                    items: "Wooden",
                    item_text: "BENZ Packaging - Wooden Packaging: Reliable and Sustainable Solutions",
                    date: "8 June 2023"
                },
                {
                    image: paper_main,
                    items: "Paper",
                    item_text: "BENZ Packaging - Paper Packaging: Reliable and Sustainable Solutions",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Plastic",
                    item_text: "BENZ Packaging - Plastic: Durable and Flexible Packaging Solutions",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "2",
            page_link: "/rolls-pouches",
            heading: "Rolls & Pouches",
            image: rolls_pouches,
            isSlider: true,
            content: "BENZ Packaging is delighted to offer a wide range of rolls and pouches, designed to provide convenient and efficient packaging solutions for your diverse needs.",
            subProducts: [
                {
                    image: tape,
                    items: "Multilayer Laminated Pouches",
                    item_text: "BENZ Packaging - Multilayer Laminated Pouches: Superior Protection and Versatile Packaging Solutions",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Co-Extruded Laminate Pouches",
                    item_text: "BENZ Packaging - Co-Extruded Laminate Pouches: Enhanced Protection and Customizable Packaging Solutions",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Custom Engineered Laminates",
                    item_text: "BENZ Packaging - Custom Engineered Laminates: Tailored Solutions for Advanced Packaging",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Adhesive Laminate Pouches",
                    item_text: "BENZ Packaging - Adhesive Laminate Pouches: Secure and Convenient Packaging Solutions",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "3",
            page_link: "/ldpe",
            heading: "LDPE",
            image: ldpe,
            isSlider: true,
            content: "BENZ Packaging offers LDPE (Low-Density Polyethylene) packaging solutions that provide flexibility and versatility for a wide range of packaging needs.",
            subProducts: [
                {
                    image: bag,
                    items: "Bags, Rolls & Sheets",
                    item_text: "BENZ Packaging - LDPE Bags, Rolls & Sheets: Flexible and Reliable Packaging Solutions",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Perforated Rolls",
                    item_text: "BENZ Packaging - LDPE Perforated Rolls: Convenient and Versatile Packaging Solution",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Pre Open Bags on Rolls",
                    item_text: "BENZ Packaging - LDPE Pre-Open Bags on Rolls: Effortless Packaging Convenience",
                    date: "8 June 2023"
                },
                {
                    image: zip_lock1,
                    items: "Zip Lock Bags",
                    item_text: "BENZ Packaging - LDPE Zip Lock Bags: Secure and Convenient Storage Solutions",
                    date: "8 June 2023"
                },
                {
                    image: stretchfilms,
                    items: "Stretch Films",
                    item_text: "BENZ Packaging - LDPE Stretch Films: Reliable Protection and Secure Bundling",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Eco Friendly Bags",
                    item_text: "BENZ Packaging - LDPE Eco-Friendly Bags: Sustainable Solutions for a Greener Future",
                    date: "8 June 2023"
                },
                {
                    image: anti_static,
                    items: "Anti Static ESD Bags",
                    item_text: "BENZ Packaging - LDPE Anti-Static ESD Bags: Protecting Your Electronics with Confidence",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Garbage Bags",
                    item_text: "BENZ Packaging - LDPE Garbage Bags: Reliable and Convenient Waste Disposal Solutions",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "4",
            page_link: "/more-more",
            heading: "More...",
            image: engine,
            isSlider: true,
            content: "Our team members work tirelessly alongside our clients, partners, and subcontractors to push the boundaries of the packaging industry. We appreciate every opportunity we're given to take on a new project and bring it to life.",
            subProducts: [
                {
                    image: tape,
                    items: "BENZpolene",
                    item_text: "BENZ Packaging - BENZpolene: Unleashing the Power of Innovative Polyethylene Solutions",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Ice Pack Gels",
                    item_text: "BENZ Packaging - Ice Pack Gels: Keeping Your Perishables Cool and Fresh",
                    date: "8 June 2023"
                },
                {
                    image: tape,
                    items: "Blister Trays",
                    item_text: "BENZ Packaging - Blister Trays: Securing and Showcasing Your Products with Precision",
                    date: "8 June 2023"
                },
                {
                    image: labels,
                    items: "Labels",
                    item_text: "BENZ Packaging - Labels: Enhancing Product Identification and Branding",
                    date: "8 June 2023"
                },
                {
                    image: tapes,
                    items: "Tapes",
                    item_text: "BENZ Packaging - Tapes: Secure and Reliable Packaging Solutions",
                    date: "8 June 2023"
                },
            ]
        },

    ]
    return (
        <>
            {/* <Heading_header_industry /> */}
            <ProductHeading
                title="Traditional Packaging"
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

export default TraditionalPackaging