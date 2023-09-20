import React, { useState } from 'react'
import styles from './Aerospace.module.css';
import engine from '../../../components/images/engine.svg';
import Slider from '../../../components/product_compo/horizontal_slider/Slider';
import { Link } from 'react-router-dom';
import tape from '../../../components/images/tape.svg'
import rp_oils from '../../../components/images/rp_oils.jpeg'
import vci_film from '../../../components/images/film_sheet1.jpeg'
import vci_film2 from '../../../components/images/vci_film2.JPG'
import vci_Paper from '../../../components/images/VCI_Paper.jpg'
import oil from '../../../components/images/motor_oil.jpeg'
import vci_emitter1 from '../../../components/images/vci_emitter1.jpeg'
import vci_emitter2 from '../../../components/images/vci_emitter2.jpeg'
import vci_emitter3 from '../../../components/images/vci_emitter3.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';
import Heading_header_industry from '../../../components/product_compo/heading_header_industry/Heading';
import header_heading from '../../../components/images/des_heading.svg';
import ProductHeading from '../heading/Heading';

import routestyle from './Routing.module.css'
import vci_film1 from '../../../components/images/events_clients/newProducts/5.JPG'
import vci_stretch_film from '../../../components/images/events_clients/newProducts/stretch.JPG'
import vci_bubble_film from '../../../components/images/bubble_film.jpeg';
import vci_wooven_fabric_film from '../../../components/images/new_images_client/VCI Film/Woven Fabric/IMG_9063.jpg'
import vci_anti_static_film from '../../../components/images/new_images_client/VCI Film/VCI Antistatic/IMG_8994.jpg'
import vci_non_wooven_film from '../../../components/images/new_images_client/VCI Non Woven Fabric/IMG_9082.jpg'
import vci_chip from '../../../components/images/new_images_client/VCI Emitter/VCI Chips.jpg'
import vci_plain1 from '../../../components/images/vci_plain1.jpeg'
import vci_noxy from '../../../components/images/new_images_client/VCI Emitter/VCI Noxy/IMG_9106.jpg'
import vci_foam from '../../../components/images/new_images_client/VCI Emitter/VCI Foam.jpg'
import vci_tablet from '../../../components/images/new_images_client/VCI Emitter/VCI Tablets.jpg'
import neutralacid from '../../../components/images/neutralacid.jpg'
import vci_shrink from '../../../components/images/new_images_client/VCI Film/VCI Shrink/shrink.jpg'
import vci_bio_film from '../../../components/images/new_images_client/VCI Film/VCI Biopez/IMG_9098.jpg'
import vci_25 from '../../../components/images/new_images_client/VCI Film/VCI Emitters/VCI 25.jpg'

const AntiCorrosion = () => {

    const { t, i18n } = useTranslation();
    const [page, setPage] = useState("product");


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
                    image: vci_bio_film,
                    items: "VCI Bio-Film",
                    item_text: "Benz Packaging - VCI Bio-Film: Environmentally Friendly Corrosion Protection",
                    date: "8 June 2023"
                },
                {
                    image: vci_film1,
                    items: "VCI Film",
                    item_text: "Benz Packaging - VCI Film: Advanced Corrosion Protection for Your Products",
                    date: "8 June 2023"
                },
                {
                    image: vci_stretch_film,
                    items: "VCI Stretch Film",
                    item_text: "Benz Packaging - VCI Stretch Film: Advanced Corrosion Protection with Stretchability",
                    date: "8 June 2023"
                },
                {
                    image: vci_bubble_film,
                    items: "VCI Bubble Film",
                    item_text: "Benz Packaging - VCI Bubble Film: Comprehensive Corrosion Protection with Bubble Cushioning",
                    date: "8 June 2023"
                },
                {
                    image: vci_wooven_fabric_film,
                    items: "VCI Woven Fabric Film",
                    item_text: "Benz Packaging - VCI Woven Fabric Film: Robust Corrosion Protection with Strength and Durability",
                    date: "8 June 2023"
                },
                {
                    image: vci_anti_static_film,
                    items: "VCI Anti static Film",
                    item_text: "Benz Packaging - VCI Anti-static Film: Advanced Corrosion Protection with Electrostatic Discharge Control",
                    date: "8 June 2023"
                },
                {
                    image: vci_shrink,
                    items: "VCI Shrink Film",
                    item_text: "Benz Packaging - VCI Shrink Film: Superior Corrosion Protection with Secure Wrapping",
                    date: "8 June 2023"
                },
                {
                    image: vci_non_wooven_film,
                    items: "VCI Non-Woven Film",
                    item_text: "Benz Packaging - VCI Non-Woven Film: Versatile Corrosion Protection with Non-Woven Material",
                    date: "8 June 2023"
                },
            ]
        },
        {
            number: "2",
            page_link: "/vci-paper",
            heading: "VCI Paper",
            image: vci_Paper,
            isSlider: true,
            content: "At BENZ Packaging Solutions, we are dedicated to providing cutting-edge technology for your packaging needs, and our VCI Papers stand as the pinnacle of anti-corrosion solutions. Our VCI Paper, VCI Poly Coated Paper, and VCI Reinforced Fabric Papers offer unmatched protection against oxidation and corrosion for all metal goods. Utilizing a tailor-made coating process,these innovative papers are infused with VCI on both sides, ensuring comprehensive protection. By subliming VCI molecules from both sides, they form a powerful shield against environmental pollutants, effectively safeguarding your metals during transport and storage.Available in Ferrous Grade and Universal Grade variants, our VCI Papers cater to specific metal protection needs. Crafted with patented Propagroup's Technology from Italy, these papers have a proven track record of success.",
            content2: "With diverse applications, they excel as intersecting layers in combination with other BENZ VCI products, ensuring your metal goods remain corrosion-free and pristine.",
            subProducts: [
                {
                    image: tape,
                    items: "Laminated Paper",
                    item_text: "Benz Packaging - Laminated Paper: Enhanced Protection and Versatility for Your Packaging Needs",
                    date: "8 June 2023"
                },
                {
                    image: vci_plain1,
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
                    image: vci_chip,
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
            content: "BENZ Packaging Solutions, offers advanced VCI Anticorrosion Packing Items designed to provide robust metal protection. Our VCI Emitters utilize innovative technology to disperse VCI molecules efficiently within your packaging, reaching even concealed areas that are typically challenging to protect. They cover a significant area, offering unparalleled corrosion prevention. These emitters deposit an invisible molecular layer on metal surfaces, providing long-term corrosion protection even in humid conditions. Their versatility and reliability make them a valuable asset in safeguarding your metal assets",
            subProducts: [
                {
                    image: vci_25,
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
                    image: vci_tablet,
                    items: "VCI Tablets",
                    item_text: "Benz Packaging - VCI Tablets: Convenient Corrosion Protection for Metal Products",
                    date: "8 June 2023"
                },
                {
                    image: vci_foam,
                    items: "VCI Foam",
                    item_text: "Benz Packaging - VCI Foam: Versatile Corrosion Protection with Cushioning Properties",
                    date: "8 June 2023"
                },
                {
                    image: vci_noxy,
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
            content: "BENZ Packaging offers a top-tier Rust Removers that effectively eliminates corrosion from metal surfaces. Our rust removers are a powerful and reliable solution for restoring metal parts and equipment. It works by dissolving rust, leaving surfaces clean and corrosion-free. Whether you're dealing with mild surface rust or severe corrosion, our rust remover is up to the task. It's easy to use, making it suitable for various applications. BENZ Packaging's Rust Remover ensures your valuable metal assets remain in optimal condition, free from the damaging effects of rust. Trust us for a comprehensive rust removal solution that delivers exceptional results.",
            subProducts: [
                {
                    image: tape,
                    items: "Acidic",
                    item_text: "Benz Packaging - Acidic Rust Removers: Powerful Solutions for Stubborn Rust Removal",
                    date: "8 June 2023"
                },
                {
                    image: neutralacid,
                    items: "Neutral",
                    item_text: "Benz Packaging - Neutral Rust Removers: Safe and Effective Solutions for Rust Removal",
                    date: "8 June 2023"
                },
            ]
        },
    ]
    return (
        <>
            <ProductHeading
                title="Anti Corrosion"
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

                                                <Link to={item.page_link}>
                                                    <div className={styles.auto_pack}>
                                                        {t("PACK WITH US")}
                                                    </div>
                                                </Link>
                                            </div>
                                            <div className={styles.auto_img_text}>
                                                {t(`${item.content}`)}
                                                {t(`${item.content2}`)}
                                            </div>
                                        </div>

                                        <Link to={item.page_link}>
                                            {
                                                item.isSlider && (
                                                    <Slider
                                                        subProducts={item.subProducts.map(subItem => ({
                                                            ...subItem,
                                                            item_text: t(subItem.item_text),
                                                            page_link: item.page_link,
                                                        }))}
                                                    />
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

export default AntiCorrosion