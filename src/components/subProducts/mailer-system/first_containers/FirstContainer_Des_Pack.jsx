import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import { useTranslation } from 'react-i18next';
import greenProLogo from '../../../images/new_images_client/AboutPage/green/Green Product Mark.jpeg'

import plastic_mailer from '../../../../Benz Pictures/Paper system/Mailers Palstic.jpeg'
import paper_bag from '../../../../Benz Pictures/Paper system/Paper Bag.jpeg'
import custom_printed from '../../../../Benz Pictures/Paper system/Paper Bag 2.jpeg'
import paperSystem from '../../../../components/images/new_images_client/product new pages/Paper system/Paper Mailer Bag.jpeg'


const Descicannt = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Plastic Mailers",
            image: plastic_mailer,
            image_text: "BENZ Packaging is proud to offer our Plastic Mailers, a trusted packaging solution designed to ensure the secure and efficient shipping of your products.",
            image_text2: "Our Plastic Mailers are specifically designed for shipping smaller items, documents, and other goods that require lightweight yet durable packaging. Made from high-quality plastic materials, our mailers provide excellent protection against tears, punctures, and moisture during transit."
        },

        {
            id: "section2",
            number: "2",
            greenProduct: "Green Product",
            heading: "Paper Mailer",
            image: paper_bag,
            image_text: "BENZ Packaging is delighted to introduce our Paper Mailer, an eco-friendly packaging solution designed to provide secure and sustainable shipping for your products.",
            image_text2: "Our Paper Mailer is crafted from high-quality, durable paper materials that offer reliable protection for your items during transit. The sturdy construction of the mailer ensures resistance against tears and punctures, safeguarding your products from potential damages."
        },

        {
            id: "section3",
            number: "3",
            heading: "Custom Printed Mailers",
            image: custom_printed,
            image_text: "BENZ Packaging is pleased to offer Custom Printed Mailers, a tailored packaging solution that combines brand promotion with secure shipping for your products.",
            image_text2: "Our Custom Printed Mailers allow you to showcase your brand identity and create a lasting impression on your customers. We understand the importance of branding, which is why we offer customizable options to display your logo, company name, graphics, or any other design elements that represent your business."
        },
        {
            id: "section4",
            number: "4",
            heading: "Paper Bags",
            greenProduct: "Green Product",
            image: paperSystem,
            image_text: "BENZ Packaging is proud to present our line of Paper Bags, a sustainable and versatile packaging solution for your various needs.",
            image_text2: "Our Paper Bags are crafted from high-quality, eco-friendly materials, making them an excellent choice for businesses committed to reducing their environmental impact. The use of paper promotes a more sustainable packaging option compared to traditional plastic bags."
        },
        {
            id: "section5",
            number: "5",
            heading: "Plastic Bags",
            image: engine,
            image_text: "Our Plastic Bags are designed to provide secure and efficient packaging for various applications. Whether you need bags for retail, grocery, food service, or general purposes, we have options to suit your requirements.",
            image_text2: "Our Plastic Bags are made from high-quality plastic materials that ensure durability and protection for your products. They are resistant to tears, punctures, and moisture, keeping your items safe during handling and transportation."
        },

    ]
    return (
        <>
            {
                arr.map((item => (
                    <div className={styles.automobile_container} id={item.id}>
                        <div className={styles.auto_heading}>
                            <div className={styles.auto_number}>
                                {item.number}
                            </div>
                            <div className={styles.auto_letter}>
                                {t(`${item.heading}`)}
                                {item.greenProduct ? (
                                    <div className={styles.greenrange}>
                                        <img src={greenProLogo} alt="" />
                                    </div>
                                ) : null}
                            </div>

                            {/* {item?.greenProduct ? <div className={styles.auto_letter2}>
                                {t(`${item?.greenProduct ?? ""}`)}
                            </div> : <></>} */}
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>
                                <img src={item.image} alt="engine" />

                            </div>
                            <div className={styles.auto_img_text}>
                                {t(`${item.image_text}`)}
                                <br />
                                {t(`${item.image_text2}`)}
                            </div>
                        </div>
                    </div>
                )))
            }
        </>
    )
}

export default Descicannt