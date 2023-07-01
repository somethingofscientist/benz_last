import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import { useTranslation } from 'react-i18next';

const Descicannt = () => {
    
    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Void Fill Paper Packaging",
            image: engine,
            image_text: "Benz Packaging is proud to introduce our Void Fill Paper Packaging, an efficient and sustainable solution for filling empty spaces and protecting your products during shipping and storage.",
            image_text2: "Our Void Fill Paper Packaging is specifically designed to fill voids and provide cushioning inside boxes and packages, ensuring that your items remain secure and protected throughout the transit process. The paper packaging effectively absorbs shocks and vibrations, reducing the risk of damage or breakage."
         },

        {
            id: "section2",
            number: "2",
            heading: "Surface Protection Paper",
            image: engine,
            image_text:"Benz Packaging is pleased to offer Surface Protection Paper, a reliable solution for safeguarding delicate surfaces during storage, transportation, and handling.",
            image_text2: "Our Surface Protection Paper is specifically designed to provide a protective barrier against scratches, abrasions, and other potential damages that can occur during the packaging process. It is made from high-quality paper materials that offer excellent strength and durability, ensuring reliable surface protection."
        },
        
        {
            id: "section3",
            number: "3",
            heading: "Grocery & Food Service Paper",
            image: engine,
            image_text: "Benz Packaging is dedicated to providing high-quality packaging solutions, and we are pleased to offer our Grocery & Food Service Paper, designed specifically for the needs of the food industry.",
            image_text2:"Our Grocery & Food Service Paper is an ideal choice for packaging and preserving food products, whether in grocery stores, restaurants, cafes, or other food service establishments. It offers reliable protection, convenience, and freshness to ensure that your food items remain in top condition."
        },

        {
            id: "section4",
            number: "4",
            heading: "Water Barier PLA Coated Paper",
            image: engine,
            image_text: "Benz Packaging is proud to introduce our Water Barrier PLA Coated Paper, a sustainable and effective solution for moisture resistance in packaging applications.",
            image_text2:"Our Water Barrier PLA Coated Paper is designed to provide a reliable barrier against moisture, making it an ideal choice for products that require protection from humidity, condensation, or other water-related risks. It combines the benefits of paper and a polylactic acid (PLA) coating to offer enhanced water resistance while remaining eco-friendly."
        },
        {
            id: "section5",
            number: "5",
            heading: "PE Coated Paper",
            image: engine,
            image_text: "Benz Packaging is pleased to offer our PE Coated Paper, a versatile solution that provides reliable protection for a wide range of packaging applications.",
            image_text2: "Our PE Coated Paper is designed with a polyethylene (PE) coating, which enhances its strength, durability, and resistance to moisture. The PE coating acts as a barrier, preventing liquids, oils, and other substances from penetrating the paper, ensuring the integrity of your packaged products."
         },

        {
            id: "section6",
            number: "6",
            heading: "Machine Glazed Paper",
            image: engine,
            image_text:"Benz Packaging is delighted to introduce our Machine Glazed Paper, a smooth and reliable packaging solution designed to meet your diverse packaging needs.",
            image_text2: "Machine Glazed Paper is produced using a special glazing process, resulting in a smooth and glossy surface. This unique glazing technique enhances the paper's strength and durability while providing excellent resistance to grease and moisture."
        },
        
        {
            id: "section7",
            number: "7",
            heading: "SBS Boards",
            image: engine,
            image_text: "Benz Packaging is proud to offer our SBS (Solid Bleached Sulphate) Boards, a reliable and versatile packaging solution that meets a wide range of packaging requirements.",
            image_text2:"SBS Boards are renowned for their exceptional strength and durability. Made from high-quality wood pulp, they provide superior rigidity and resistance to bending, ensuring that your packaged products are well-protected during transportation and handling."
        },

        {
            id: "section8",
            number: "8",
            heading: "Propaflex",
            image: engine,
            image_text: "Benz Packaging is pleased to introduce Propaflex, our innovative and versatile packaging solution designed to provide flexibility and optimal protection for your valuable goods.",
            image_text2:"Propaflex is a high-quality packaging material made from a combination of durable polymers, offering exceptional strength and flexibility. Its unique composition allows it to conform to the shape of your products, providing a snug and secure fit during transportation and storage."
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