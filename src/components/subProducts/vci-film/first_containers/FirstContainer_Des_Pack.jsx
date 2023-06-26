import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import bubble_film from '../../../images/bubble_film.jpeg'

const Descicannt = () => {
    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "VCI Bio-Film",
            image: engine,
            image_text: "Benz Packaging is proud to introduce our latest innovation, VCI Bio-Film, an environmentally friendly solution that provides exceptional corrosion protection for your valuable products. With our commitment to sustainability and packaging technology expertise, we offer a reliable and innovative approach to safeguarding your goods while minimizing environmental impact.",
            image_text2: "VCI Bio-Film combines the benefits of Volatile Corrosion Inhibitor (VCI) technology with a bio-based film material. The VCI molecules in the film create a protective shield around your products, preventing corrosion and preserving their integrity. At the same time, the bio-based film is derived from renewable resources, reducing the reliance on traditional petroleum-based materials and minimizing carbon footprint."
         },

        {
            id: "section2",
            number: "2",
            heading: "VCI Film",
            image: engine,
            image_text:"Benz Packaging is excited to introduce our VCI Film, a cutting-edge solution designed to provide exceptional corrosion protection for your valuable goods. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your products from the damaging effects of corrosion.",
            image_text2: "VCI, which stands for Volatile Corrosion Inhibitor, is a revolutionary technology that creates a protective shield around your products. Our VCI Film releases special corrosion-inhibiting molecules into the surrounding environment, forming an invisible barrier that prevents the onset and progression of corrosion. This unique feature makes it an ideal choice for protecting a wide range of metal components, equipment, machinery, and other susceptible items."
        },

        {
            id: "section3",
            number: "3",
            heading: "VCI Stretch Film",
            image: engine,
            image_text: "Benz Packaging is thrilled to introduce our VCI Stretch Film, an innovative solution designed to provide advanced corrosion protection with the added benefit of stretchability. With our expertise in packaging technology, we offer a reliable and efficient approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2:"Our VCI Stretch Film combines the benefits of Volatile Corrosion Inhibitor (VCI) technology with the stretchability of film. This unique combination allows for easy application and excellent coverage around your products, ensuring maximum protection. The VCI molecules in the film create a protective shield, preventing the onset and progression of corrosion, while the stretchable nature of the film enables it to conform to different shapes and sizes."
        },

        {
            id: "section4",
            number: "4",
            heading: "VCI Bubble Film",
            image: bubble_film,
            image_text: "Benz Packaging is delighted to introduce our VCI Bubble Film, a comprehensive solution that combines advanced corrosion protection with the cushioning properties of bubble wrap. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2:"Our VCI Bubble Film incorporates Volatile Corrosion Inhibitor (VCI) technology into the protective bubble cushioning material. This unique combination provides a dual-function solution, offering both corrosion protection and impact resistance. The VCI molecules released by the film create a protective shield around your products, preventing corrosion, while the bubble wrap cushions and protects the items from shocks, vibrations, and scratches during storage and transportation."
        },
        {
            id: "section5",
            number: "5",
            heading: "VCI Woven Fabric Film",
            image: engine,
            image_text: "Benz Packaging is excited to introduce our VCI Woven Fabric Film, a robust solution designed to provide superior corrosion protection with the added strength and durability of woven fabric. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2:"Our VCI Woven Fabric Film combines the benefits of Volatile Corrosion Inhibitor (VCI) technology with the resilience of woven fabric material. This unique combination offers a high level of protection against corrosion while providing excellent strength and durability for demanding applications. The VCI molecules in the film create a protective shield around your products, preventing corrosion, while the woven fabric enhances the film's physical properties."
        },
        {
            id: "section6",
            number: "6",
            heading: "VCI Anti static Film",
            image: engine,
            image_text: "Benz Packaging is proud to introduce our VCI Anti-static Film, an advanced solution that combines superior corrosion protection with effective electrostatic discharge control. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from both corrosion and electrostatic damage.",
            image_text2:"Our VCI Anti-static Film incorporates Volatile Corrosion Inhibitor (VCI) technology along with anti-static additives. This unique combination provides a dual-function solution, offering corrosion protection and electrostatic discharge control in a single packaging material. The VCI molecules released by the film create a protective shield around your products, preventing corrosion, while the anti-static properties prevent the build-up and discharge of static electricity."
        },
        {
            id: "section7",
            number: "7",
            heading: "VCI Shrink Film",
            image: engine,
            image_text: "Benz Packaging is pleased to introduce our VCI Shrink Film, a superior solution designed to provide exceptional corrosion protection while offering secure wrapping for your valuable goods. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your products from the damaging effects of corrosion.",
            image_text2:"Our VCI Shrink Film combines the benefits of Volatile Corrosion Inhibitor (VCI) technology with the shrinkable properties of film. This unique combination allows for easy application and creates a tight, secure, and conforming wrap around your products. The VCI molecules released by the film create a protective shield, preventing corrosion and ensuring long-lasting protection during storage and transportation."
        },
        {
            id: "section8",
            number: "8",
            heading: "VCI Non-Woven Film",
            image: engine,
            image_text: "Benz Packaging is delighted to introduce our VCI Non-Woven Film, a versatile solution designed to provide effective corrosion protection using non-woven material. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2:"Our VCI Non-Woven Film incorporates Volatile Corrosion Inhibitor (VCI) technology into a non-woven fabric construction. This unique combination offers excellent corrosion protection while providing versatility for a wide range of applications. The VCI molecules released by the film create a protective shield around your products, preventing corrosion and ensuring their longevity during storage and transportation."
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