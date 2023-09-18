import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import vci_plain1 from '../../../images/vci_plain1.jpeg'
import vci_plain2 from '../../../images/vci_plain2.jpeg'

import vci_chip from '../../../images/new_images_client/VCI Emitter/VCI Chips.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

const Descicannt = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "Laminated Paper",
            image: engine,
            image_text: "BENZ Packaging Solutions has been manufacturing Poly Coated Laminated VCI Paper, a premium anti-corrosion solution that takes metal protection to the next level. This innovative VCI paper features a dual-layered approach, combining the strength of VCI technology with a resilient poly coating. Unlike non-laminated VCI papers, our Poly Coated Laminated VCI Paper offers enhanced durability and moisture resistance, making it highly effective in preventing oxidation and corrosion during storage and transportation. By impregnating both sides of the paper with VCI, it creates a robust shield that sublimes VCI molecules, neutralizing the corrosive impact of environmental pollutants.",
            image_text2: " Crafted with the expertise of patented Propagroup's Technology from Italy, our Poly Coated Laminated VCI Paper ensures your metals remain corrosion-free and in pristine condition. Its versatility makes it a perfect complement to other BENZ VCI products, reinforcing your metal protection strategy for peace of mind. Available in 75 GSM and 85 GSM in Roll Form, Cut Sheets and 2 Dimensional (2D) Bags."
        },

        {
            id: "section2",
            number: "2",
            heading: "VCI Plain Paper",
            image: [vci_plain1, vci_plain2],
            image_text: "BENZ Packaging Solutions is pleased to present our Plain VCI Paper, a reliable anti-corrosion solution designed to safeguard your valuable metal assets. While our laminated VCI papers offer additional durability and moisture resistance, our Non-Laminated VCI Paper remains a cost-effective and efficient choice for protecting metals during storage and transportation.Impregnated with VCI on both sides, this paper creates a protective shield by subliming VCI molecules, effectively neutralizing the corrosive effects of environmental pollutants.",
            image_text2: "Crafted with the expertise of patented Propagroup's Technology from Italy, our Plain VCI Paper ensures your metals remain corrosion-free and in pristine condition. Its versatility makes it a valuable addition to your metal protection strategy, offering peace of mind without compromising on quality. Available in 55 GSM and 65 GSM in Roll Form and Cut Sheets."
        },

        {
            id: "section3",
            number: "3",
            heading: "VCI Crepe Paper",
            image: engine,
            image_text: "BENZ Packaging Solutions is pleased to present our VCI Crepe Paper, a high-performance anticorrosion solution tailored to safeguard your valuable metal assets. This specialized crepe paper is infused with advanced VCI technology, offering robust protection against oxidation and corrosion during storage and transit. The crepe texture enhances its versatility, allowing for easy conformability around irregularly shaped or textured surfaces.",
            image_text2: "Impregnated with VCI on both sides, this paper forms a powerful shield that sublimes VCI molecules, effectively neutralizing the corrosive impact of environmental pollutants. Crafted with the expertise of patented Propagroup's Technology from Italy, our VCI Crepe Paper ensures your metals remain corrosion-free and in optimal condition. Its flexibility and effectiveness make it a valuable asset in your metal protection strategy, providing peace of mind and product integrity. Available in 110 GSM and 120 GSM in Roll Form, Cut Sheets and lamination."
        },
        {
            id: "section4",
            number: "4",
            heading: "VCI Chips",
            image: vci_chip,
            image_text: "BENZ Packaging Solutions is delighted to introduce our VCI Chips, a cutting-edge anti-corrosion solution designed to provide superior protection for your valuable metal assets. These innovative chips are infused with advanced Vapor Corrosion Inhibitor (VCI) technology, delivering robust and reliable corrosion prevention during storage and transit. The chips release VCI molecules into the surrounding atmosphere, creating an invisible shield that safeguards your metals from oxidation and corrosion.",
            image_text2: "Highly versatile, VCI Chips are perfect for various packaging applications, such as in boxes, crates, and enclosures. Crafted with the expertise of patented Propagroup's Technology from Italy, our VCI Chips offer peace of mind and product integrity, ensuring your metals remain corrosion-free and in optimal condition. Available in multiple sizes as per requirements."
        },
        {
            id: "section5",
            number: "5",
            heading: "VCI HD Paper",
            image: engine,
            image_text: "Benz Packaging is pleased to introduce our VCI HD Paper, a heavy-duty solution designed to provide exceptional corrosion protection for demanding applications. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2: "Our VCI HD Paper is specifically engineered to withstand rugged environments and handle heavy loads. It is infused with Volatile Corrosion Inhibitor (VCI) technology, creating a protective shield that prevents corrosion and preserves your assets, even in challenging conditions."
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
                                {/* <img src={item.image} alt="engine" /> */}

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