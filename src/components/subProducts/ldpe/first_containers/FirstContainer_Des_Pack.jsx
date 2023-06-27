import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import stretchfilms from '../../../images/stretchfilms.jpeg'
import garbage_bags from '../../../images/garbage_bags.jpeg'
import bags_roll_sheets from '../../../images/bags_roll_sheets.jpeg'
import esd_bags from '../../../images/esd_bags.jpg'
import zip_lock1 from '../../../images/zip_lock1.jpg'

const Descicannt = () => {
    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Bags, Rolls & Sheets",
            image: bags_roll_sheets,
            image_text: "Benz Packaging is pleased to offer a wide range of LDPE bags, rolls, and sheets to meet your diverse packaging needs. Our LDPE (Low-Density Polyethylene) solutions provide flexibility, durability, and reliability for various applications.",
            image_text2: "LDPE Bags: Our LDPE bags are available in different sizes, styles, and thicknesses to accommodate a wide range of products. Whether you need resealable zip-lock bags, gusseted bags for bulky items, or flat bags for general packaging, our LDPE options provide excellent protection and convenience. With their flexibility and tear resistance, our LDPE bags are perfect for packaging items of different shapes and sizes."
         },

        {
            id: "section2",
            number: "2",
            heading: "Perforated Rolls",
            image: engine,
            image_text:"Benz Packaging is proud to offer LDPE perforated rolls, a convenient and versatile packaging solution for various applications. Our LDPE (Low-Density Polyethylene) perforated rolls combine the benefits of LDPE material with the added convenience of easy tear-off sections.",
            image_text2: "LDPE Perforated Rolls: Our LDPE perforated rolls are designed with evenly spaced perforations along the length of the roll, allowing for effortless tearing and separating of individual sections. This feature offers convenience and flexibility in packaging, making it ideal for a wide range of industries and applications."
        },
        
        {
            id: "section3",
            number: "3",
            heading: "Pre Open Bags on Rolls",
            image: engine,
            image_text: "Benz Packaging takes pride in offering LDPE Pre-Open Bags on Rolls, a packaging solution that brings convenience and ease to your packaging operations. Our LDPE (Low-Density Polyethylene) Pre-Open Bags on Rolls are designed to simplify your packaging process and enhance overall efficiency.",
            image_text2:"Effortless Pre-Open Design: Our LDPE Pre-Open Bags on Rolls feature a pre-opened design, ensuring that each bag is conveniently ready for immediate use. This eliminates the need for manual bag opening, saving you valuable time and effort during the packaging process. With the bags readily accessible and open, you can seamlessly load your products without any delays or interruptions."
        },
        {
            id: "section4",
            number: "4",
            heading: "Zip Lock Bags",
            image: zip_lock1,
            image_text: "Benz Packaging is delighted to offer LDPE Zip Lock Bags, a reliable and versatile packaging solution designed to provide secure storage and easy access to your products. Our LDPE (Low-Density Polyethylene) Zip Lock Bags offer exceptional functionality and convenience for a wide range of applications.",
            image_text2:"Secure Zip Lock Closure: Our LDPE Zip Lock Bags feature a sturdy and reliable zip lock closure mechanism. This enables you to securely seal the bags, providing protection against moisture, dust, and other contaminants. The zip lock closure ensures that your items remain safely stored and readily accessible whenever needed. Whether you are storing small components, food items, or personal belongings, our LDPE Zip Lock Bags keep your items secure and organized."
        },
        {
            id: "section5",
            number: "5",
            heading: "Stretch Films",
            image: stretchfilms,
            image_text: "Benz Packaging is proud to offer LDPE Stretch Films, a versatile and efficient packaging solution designed to provide reliable protection and secure bundling of your products. Our LDPE (Low-Density Polyethylene) Stretch Films are known for their exceptional strength, durability, and stretchability, making them an ideal choice for various industries and applications.",
            image_text2:"Superior Protection: Our LDPE Stretch Films provide excellent protection for your goods during transportation, storage, and handling. The stretchable nature of the film allows it to conform tightly to the shape of your products, creating a secure and protective barrier against dust, moisture, and other external factors. This helps to prevent damage, contamination, and tampering, ensuring that your goods arrive in optimal condition."
        },
        {
            id: "section6",
            number: "6",
            heading: "Eco Friendly Bags ",
            image: engine,
            image_text: "At Benz Packaging, we are committed to promoting sustainability and offering eco-friendly packaging solutions. Our LDPE (Low-Density Polyethylene) eco-friendly bags are designed to minimize environmental impact while providing reliable and convenient packaging options. By choosing our LDPE eco-friendly bags, you can contribute to a greener future and showcase your commitment to sustainability.",
            image_text2:"Sustainable Materials: Our LDPE eco-friendly bags are crafted from recycled LDPE materials or LDPE derived from renewable resources. These materials are carefully selected to ensure they have minimal impact on the environment throughout their life cycle. By utilizing recycled materials and reducing reliance on non-renewable resources, our bags help conserve natural resources and reduce waste."
        },
        {
            id: "section7",
            number: "7",
            heading: "Anti Static ESD Bags",
            image: esd_bags,
            image_text: "At Benz Packaging, we understand the critical importance of safeguarding sensitive electronic components from electrostatic discharge (ESD). Our LDPE (Low-Density Polyethylene) Anti-Static ESD Bags are specifically designed to provide reliable protection against static electricity, ensuring the integrity and functionality of your valuable electronic devices.",
            image_text2:"ESD Protection: Our LDPE Anti-Static ESD Bags are constructed from specialized materials that effectively dissipate static charges, preventing electrostatic damage to your sensitive electronics. These bags create a protective barrier that shields your components from external static electricity and potential hazards during handling, transportation, and storage."
        },
        {
            id: "section8",
            number: "8",
            heading: "Garbage Bags",
            image: garbage_bags,
            image_text: "Benz Packaging offers a wide selection of LDPE (Low-Density Polyethylene) garbage bags designed to simplify your waste disposal needs. Our LDPE garbage bags are crafted with quality materials and practical features to ensure durability, reliability, and convenience.",
            image_text2:"Exceptional Strength and Durability: Our LDPE garbage bags are constructed with high-quality LDPE materials, which provide excellent strength and durability. This ensures that the bags can withstand heavy loads, resist tearing and punctures, and effectively contain waste without leakage or spills."
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
                            <div className={styles.auto_letter}>{item.heading}</div>
                        </div>

                        <div className={styles.auto_img_container}>
                            <div className={styles.auto_img}>
                                <img src={item.image} alt="engine" />

                            </div>
                            <div className={styles.auto_img_text}>
                                {item.image_text}
                                <br/>
                                {item.image_text2}
                            </div>
                        </div>
                    </div>
                )))
            }
        </>
    )
}

export default Descicannt