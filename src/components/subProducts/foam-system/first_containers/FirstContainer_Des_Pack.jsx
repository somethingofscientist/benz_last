import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'

const Descicannt = () => {
    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Inst-Expa Foam Bag",
            image: engine,
            image_text: "Benz Packaging is proud to present our Inst-Expa Foam Bag, a versatile packaging solution designed to provide convenience and reliable protection for your products during shipping and handling.",
            image_text2: "Our Inst-Expa Foam Bag features a unique design that combines the advantages of foam and bag packaging. The bag is made from durable and tear-resistant materials, while the interior is filled with expandable foam. This combination offers a double layer of protection, ensuring that your items are safeguarded from impacts, vibrations, and other potential hazards."
         },

        {
            id: "section2",
            number: "2",
            heading: "EPE Foam",
            image: engine,
            image_text:"Benz Packaging is pleased to offer our EPE Foam, a versatile packaging solution designed to provide excellent protection for your products during transit, storage, and handling.",
            image_text2: "EPE Foam, also known as Expanded Polyethylene Foam, is a lightweight and flexible material that offers exceptional cushioning and shock absorption properties. It is made up of numerous closed-cell structures that provide resilience and energy absorption, ensuring that your products are well-protected from impacts and vibrations."
        },
        
        {
            id: "section3",
            number: "3",
            heading: "EVA Foam",
            image: engine,
            image_text: "Benz Packaging is delighted to introduce our EVA Foam, a high-quality packaging solution designed to provide superior protection for your valuable products during shipping, handling, and storage.",
            image_text2:"EVA Foam, short for Ethylene-Vinyl Acetate Foam, is a lightweight and durable material known for its excellent cushioning and shock-absorbing properties. It is widely recognized for its versatility and versatility in various industries, including packaging."
        },
        {
            id: "section4",
            number: "4",
            heading: "Foam Bag & Sheet",
            image: engine,
            image_text: "Benz Packaging is proud to offer our Foam Bag & Sheet, a versatile packaging solution designed to provide flexibility and reliable protection for your products during shipping, handling, and storage.",
            image_text2:"Our Foam Bag & Sheet combines the advantages of foam materials with the convenience of bags and sheets, offering a comprehensive packaging solution for a wide range of items. Whether you need to wrap individual products, create custom inserts, or provide cushioning for bulk shipments, our Foam Bag & Sheet is the ideal choice."
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