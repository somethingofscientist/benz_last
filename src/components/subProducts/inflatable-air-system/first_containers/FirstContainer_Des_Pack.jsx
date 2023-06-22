import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'

const Descicannt = () => {
    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Air Cushion Bubble",
            image: engine,
            image_text: "Benz Packaging is proud to introduce our Air Cushion Bubble, a versatile packaging solution designed to provide optimal protection for your valuable items. With its unique combination of air cushions and bubble wrap, our Air Cushion Bubble offers reliable cushioning and impact resistance, ensuring your products arrive safely and intact.",
            image_text2: "The Air Cushion Bubble features a dual-layer design. The outer layer consists of durable bubble wrap that provides excellent shock absorption and surface protection. The inner layer is filled with air cushions, which act as a cushioning barrier to absorb and distribute impact energy, minimizing the risk of damage during transit."
         },

        {
            id: "section2",
            number: "2",
            heading: "Air Cushion Void Fill",
            image: engine,
            image_text:"Benz Packaging is pleased to introduce our Air Cushion Void Fill, a versatile packaging solution designed to fill empty spaces within your packages, providing efficient and reliable protection for your products during shipping and handling.",
            image_text2: "Our Air Cushion Void Fill features specially designed air cushions that are lightweight, yet durable. These cushions are inflated to create a protective layer that fills voids and gaps within your packaging, preventing movement and minimizing the risk of damage caused by impact or shifting during transit."
        },
        
        {
            id: "section3",
            number: "3",
            heading: "Air Cushion Wrap",
            image: engine,
            image_text: "Benz Packaging is proud to present our Air Cushion Wrap, a versatile packaging solution designed to provide excellent protection for your products during shipping, storage, and handling.",
            image_text2:"Our Air Cushion Wrap features a unique design that combines a layer of air cushions with a protective film. The air cushions provide superior cushioning and shock absorption, while the film offers surface protection against scratches, dust, and minor impacts. This combination ensures that your products are well-protected throughout the entire packaging process."
        }
        
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