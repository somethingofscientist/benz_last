import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import silica from '../../../images/silica.jpg'
import Cdry from '../../../images/CDry.jpg'
import BEDry from '../../../images/BEDry.jpg'
import BEDry2 from '../../../images/BEDry2.jpg'
import BEDry3 from '../../../images/BEDry3.jpg'
import BEDry4 from '../../../images/BEDry4.jpg'

import Cdry2 from '../../../images/Cdry2.jpg'
import propadry from '../../../images/propadry.jpg'
import propadry2 from '../../../images/propadry2.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

import propasec from '../../../../Benz Pictures/Propasec/Propaec-2.jpg'

const Descicannt = () => {
    const { t, i18n } = useTranslation();
    
    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "BE-Dry",
            image: [BEDry, BEDry2, BEDry3, BEDry4],
            image_text: "BENZ Packaging manufactures BE Dry (Calcium Chloride) desiccants, setting a gold standard for moisture control in various industries. These desiccants stand out due to their exceptional features and properties, making them a top choice for safeguarding your products. BE DRY Desiccant Bags are specifically developed for the use in automobile and engineering industry to protect goods from damage caused by moisture during transit and storage. These desiccant bags are made up of calcium chloride which can adsorb large amounts of moisture to protect goods in boxes, ferrous and non-ferrous products from rusting by reducing the relative humidity and keeping it below the critical dew point.",

            image_text2: "BE DRY Desiccant Bags contain a specially developed moisture adsorbent that can adsorb more than 250% of their own weight and enclose moisture. These desiccants can also be used as container desiccants and can be supplied in chain form. BE DRY Desiccant Bags have highly efficient protection which also works against “Container Rain”, which occurs due to condensation."
        },

        {
            id: "section2",
            number: "2",
            heading: "C-Dry",
            image: [Cdry, Cdry2],
            image_text: "C DRY Desiccant Bags are activated clay desiccants that are made up of natural clay and minerals. It is non-toxic, natural, and has a strong adsorption capacity. It can absorb moisture at low temperatures and low humidity as well as high temperatures and high humidity. Thanks to the Tyvek packaging, these desiccant bags are chemically inert and can be safely put with metal components and other products.",
            image_text2: "C DRY Desiccant Bags are suitable for a wide variety of applications like machine tools, automotive components, electronic devices, garments, footwear, handbags, and other industries where moisture could create a problem. Unlike Silica Gel, these C Dry Desiccant Bags can absorb a minimum of 50% to 100% of their own weight depending upon Relative Humidity and Temperature.*The material is produced in accordance with standard DIN 55473:2001-02 and the desiccant unit defines the quantity of drying material that absorbs a minimum quantity of 6.0 g of water vapour, at an air temperature of 23±2 ºC and a Relative Humidity of 40%."
        },

        {
            id: "section3",
            number: "3",
            heading: "Propasec",
            image: propasec,
            image_text: "In the global marketplace, where goods travel long distances, temperature and moisture fluctuations pose threats to product quality. BENZ Packaging in collaboration with Propagroup offers innovative solutions to combat these challenges. The flagship PROPASEC desiccant bags effectively reduce humidity within packaging, preventing dew point issues with their superior moisture absorption. This ensures product quality preservation during transportation and extended storage. We prioritize sustainability and user safety, using natural materials and rigorous quality standards. Choose from various PROPASEC formats, all meeting FDA standards for excellence.",
            image_text2: "When it comes to industries such as electronics, pharmaceuticals, aerospace, and food, preserving product integrity is of utmost importance. Exposure to moisture and oxygen can lead to oxidation, degradation, and compromised quality. Recognizing these challenges, Benz Packaging has developed Propasec, a cutting-edge solution to ensure your products remain in optimal condition."
        },

        {
            id: "section4",
            number: "4",
            heading: "Propadry",
            image: [propadry, propadry2],
            image_text: "BENZ Packaging in collaboration with Propagroup offers PROPADRY, a revolutionary system that effectively combats condensate formation within enclosed environments, safeguarding your product's quality. It functions by drawing condensate-saturated air through a unique breathable membrane, where hygroscopic salt captures and retains moisture as water, disrupting the cycle of evaporation and condensation.",
            image_text2: "With an impressive absorption capacity of up to four times its weight, PROPADRY is easily positioned, and the new Propadry CHAIN system reduces application time significantly. Versatile and eco-friendly, PROPADRY suits various container types and ensures both user-friendliness and environmental safety."
        },

        {
            id: "section5",
            number: "5",
            heading: "Silica Gel",
            image: silica,
            image_text: "Silica Gel desiccants, renowned for their high adsorption capacity, are a cornerstone in moisture control solutions, commonly utilized in compact packaging across various sectors, including pharmaceuticals, diagnostics, and the food industry. BENZ Packaging harnesses the exceptional moisture-absorbing properties of Silica Gel desiccants to protect your products effectively. These desiccants excel at preserving product quality by preventing issues like mold, corrosion, and degradation, even in challenging environments.",
            image_text2: "Versatile and ecofriendly, they offer tailored solutions, safeguarding sensitive medical equipment,pharmaceuticals, and food products, all while reducing the risk of spoilage and damage during transit and storage. Choose BENZ Packaging's Silica Gel desiccants for superior moisture management, extended product shelf life, and enhanced reliability."
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
                            </div>
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>
                                {/* <img src={item.image} alt="engine" /> */}
                                <Carousel
                                    autoPlay={true}
                                    interval={2000}
                                    infiniteLoop
                                    showStatus={false}
                                    showThumbs={false}
                                    showArrows={false}
                                >
                                    {Array.isArray(item.image) ? (
                                        item.image.map((imagePath, idx) => (
                                            <div className={styles.images} key={idx}>
                                                <img src={imagePath} alt={item.heading} />
                                            </div>
                                        ))
                                    ) : (
                                        <div className={styles.images}>
                                            <img src={item.image} alt={item.heading} />
                                        </div>
                                    )}

                                </Carousel>

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