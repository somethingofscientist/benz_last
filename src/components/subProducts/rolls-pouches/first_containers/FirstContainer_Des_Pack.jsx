import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'

const Descicannt = () => {
    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Multilayer Laminated Pouches",
            image: engine,
            image_text: "Benz Packaging is proud to offer a wide range of multilayer laminated pouches, providing superior protection and versatile packaging solutions for various industries.",
            image_text2: "Our multilayer laminated pouches are designed to meet the demanding packaging requirements of different products, including food items, pharmaceuticals, personal care products, and more. These pouches are constructed with multiple layers of high-quality materials, carefully selected to offer exceptional barrier properties and ensure product freshness and integrity."
         },

        {
            id: "section2",
            number: "2",
            heading: "Co-Extruded Laminate Pouches",
            image: engine,
            image_text:"Benz Packaging is pleased to offer a wide selection of co-extruded laminate pouches, designed to provide enhanced protection and customizable packaging solutions for your diverse needs.",
            image_text2: "Our co-extruded laminate pouches are created using advanced co-extrusion technology, which involves combining multiple layers of different materials during the extrusion process. This results in a pouch with unique properties that provide superior protection against moisture, oxygen, light, and other external elements."
        },
        
        {
            id: "section3",
            number: "3",
            heading: "Custom Engineered Laminates",
            image: engine,
            image_text: "Benz Packaging takes pride in offering a wide range of custom engineered laminates, providing tailored solutions for advanced packaging needs across various industries.",
            image_text2:"Our custom engineered laminates are designed to meet the specific requirements of your products, ensuring optimal performance and protection throughout the packaging process. We understand that different products have unique characteristics and demand specialized packaging solutions. That's why our team of experts works closely with you to develop laminates that are precisely engineered to meet your needs."
        },
        {
            id: "section4",
            number: "4",
            heading: "Adhesive Laminate Pouches",
            image: engine,
            image_text: "Benz Packaging is pleased to offer a range of adhesive laminate pouches, providing secure and convenient packaging solutions for various applications.",
            image_text2:"Our adhesive laminate pouches are designed to offer reliable closure and sealing, ensuring the integrity and safety of your products. The adhesive layer on the pouch provides a strong bond, keeping the contents securely inside and protecting them from external elements such as moisture, dust, and contaminants."
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