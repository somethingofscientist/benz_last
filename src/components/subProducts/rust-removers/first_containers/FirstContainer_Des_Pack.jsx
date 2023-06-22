import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'

const Descicannt = () => {
    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Acidic",
            image: engine,
            image_text: "Benz Packaging is proud to offer our range of Acidic Rust Removers, specifically formulated to tackle stubborn rust and corrosion. With our expertise in packaging technology, we provide effective and reliable solutions for rust removal, ensuring surfaces are restored to their original condition.",
            image_text2: "Our Acidic Rust Removers are specially designed to penetrate and dissolve tough rust and corrosion on a variety of surfaces. The acidic formula works effectively to break down the rust, making it easier to remove. Whether you're dealing with rust on metal, tools, equipment, or other surfaces, our acidic rust removers provide powerful and efficient performance."
         },

        {
            id: "section2",
            number: "2",
            heading: "Neutral",
            image: engine,
            image_text:"Benz Packaging is pleased to introduce our line of Neutral Rust Removers, designed to safely and effectively remove rust from a variety of surfaces. With our expertise in packaging technology, we offer reliable and innovative solutions to tackle rust-related challenges.",
            image_text2: "Our Neutral Rust Removers are formulated with a pH-neutral composition, making them safe to use on a wide range of materials, including metal, tools, equipment, and more. They effectively penetrate rust layers, dissolve rust particles, and facilitate easy removal without causing harm or damage to the underlying surface."
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