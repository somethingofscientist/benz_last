import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import { useTranslation } from 'react-i18next';

import vci_noxy1 from '../../../images/new_images_client/VCI Emitter/VCI Noxy/IMG_9103.jpg'
import vci_noxy2 from '../../../images/new_images_client/VCI Emitter/VCI Noxy/IMG_9105.jpg'
import vci_noxy3 from '../../../images/new_images_client/VCI Emitter/VCI Noxy/IMG_9106.jpg'

import vci_foam from '../../../images/new_images_client/VCI Emitter/VCI Foam.jpg'
import vci_tablet from '../../../images/new_images_client/VCI Emitter/VCI Tablets.jpg'
import vci_25 from '../../../images/new_images_client/VCI Film/VCI Emitters/VCI 25.jpg'

import { Carousel } from 'react-responsive-carousel';

const Descicannt = () => {

    const { t, i18n } = useTranslation();
    const arr = [
        {
            id: "section1",
            number: "1",
            heading: "VCI 25",
            image: vci_25,
            image_text: "BENZ Packaging Solutions proudly presents the VCI 25 Emitter, a powerful corrosion protection solution for metal components and parts enclosed in non-ventilated voids, cabinetry, or toolboxes. These emitters are specially designed to emit anti-corrosion vapors that form an invisible molecular layer on metal surfaces. This layer effectively shields metal and electronic equipment during operation, shipping, or storage.",
            image_text2: "VCI 25 emitters come in small breathable pouches (also available in foam format) that slowly release the corrosion inhibitor while absorbing moisture and air pollutants that may enter the packaging. This ensures long-term corrosion protection, even in the presence of moisture, making them an ideal choice for safeguarding your valuable metal assets. Available in 8 Grams, 10 Grams, 20 Grams and 50 Grams. Bulk Options also available."
        },
        {
            id: "section2",
            number: "2",
            heading: "Propatech VCI emitter",
            image: engine,
            image_text: "Benz Packaging is proud to introduce our Propatech VCI Emitter, an advanced solution designed to provide superior corrosion protection for a wide range of products. With our expertise in packaging technology, we offer a reliable and innovative approach to safeguarding your valuable goods from the damaging effects of corrosion.",
            image_text2: "Our Propatech VCI Emitter utilizes Volatile Corrosion Inhibitor (VCI) technology to create a protective atmosphere that inhibits the formation of corrosion on your products. These emitters release VCI molecules in a controlled and continuous manner, ensuring efficient and long-lasting corrosion protection."
        },

        {
            id: "section3",
            number: "3",
            heading: "VCI Tablets",
            image: vci_tablet,
            image_text: "BENZ Packaging Solutions presents VCI Tablets, an advanced corrosion protection solution for your valuable metal assets. These tablets are engineered with cutting-edge Vapor Corrosion Inhibitor (VCI) technology, offering robust and reliable protection against oxidation and corrosion during storage and transit.",
            image_text2: " VCI Tablets release VCI molecules into the surrounding atmosphere, forming an invisible shield that safeguards your metals from the corrosive effects of environmental pollutants. With an extremely high VCI concentration of 85/90%, these tablets provide long-lasting and constant sublimation, ensuring your metals remain corrosionfree. Versatile and effective, VCI Tablets are ideal for various packaging applications, offering peace of mind without compromising on quality. Available in 2 Grams and coverage upto 0.20 Cubic Meter."
        },

        {
            id: "section4",
            number: "4",
            heading: "VCI Foam",
            image: vci_foam,
            image_text: "BENZ Packaging Solutions proudly introduces VCI Foam, an advanced solution for corrosion protection in the industry. This specialized foam is infused with Vapor Corrosion Inhibitor (VCI) technology, offering exceptional protection against oxidation and corrosion during storage and transit. VCI Foam is ideal for safeguarding goods made of iron, steel, copper, brass, bronze,and other metals that need to avoid contact with any type of powders.",
            image_text2: "Its increased emanation capacity makes it perfect for long-term applications, particularly in the electric and electronic industries. VCI Foam forms a powerful shield by subliming VCI molecules, effectively neutralizing the corrosive impact of environmental pollutants. With BENZ VCI Foam, your metals remain corrosion-free, ensuring product integrity and reliability. Available in multiple sizes as per requirements."
        },

        {
            id: "section5",
            number: "5",
            heading: "VCI Noxy",
            image: [vci_noxy1, vci_noxy2, vci_noxy3],
            image_text: "BENZ Packaging Solutions proudly introduces the Propatech VCI NOXY, an innovative and efficient corrosion protection solution for your valuable metal assets. These cutting-edge emitters utilize a patented spring system from Propagroup to disperse VCI molecules effectively within your packaging, including hard-to-reach areas.",
            image_text2: "Covering an impressive area of up to 10 cubic meters, Propatech VCI NOXY ensures unparalleled corrosion prevention. These emitters deposit an invisible molecular layer on metal surfaces, providing long-lasting protection, even in the presence of moisture. This makes them a superior choice for safeguarding your metal and electronic equipment during storage, shipping, or operation. With the Propatech VCI NOXY, your metals remain corrosion-free, ensuring product integrity and peace of mind. Available in 25 Grams to cover upto 2.50 Cubic Meter"
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