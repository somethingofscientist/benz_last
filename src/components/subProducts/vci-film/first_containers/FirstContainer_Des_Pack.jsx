import React from 'react'
import styles from './Descicannt.module.css'
import { Routes, Route } from "react-router-dom";
import engine from '../../../images/engine.svg'
import bubble_film from '../../../images/bubble_film.jpeg'
import stretchFilm1 from '../../../images/stretchFilm1.JPG'
import stretchFilm2 from '../../../images/stretchFilm2.jpg'
import non_wooven1 from '../../../images/non_wooven1.jpeg'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

import antistatic1 from '../../../images/new_images_client/VCI Film/VCI Antistatic/IMG_8994.jpg'
import antistatic2 from '../../../images/new_images_client/VCI Film/VCI Antistatic/IMG_8996.jpg'
import antistatic3 from '../../../images/new_images_client/VCI Film/VCI Antistatic/IMG_8999.jpg'

import vci_wooven1 from '../../../images/new_images_client/VCI Film/Woven Fabric/IMG_9063.jpg'
import vci_wooven2 from '../../../images/new_images_client/VCI Film/Woven Fabric/IMG_9076.jpg'
import vci_wooven3 from '../../../images/new_images_client/VCI Film/Woven Fabric/IMG_9078.jpg'

import vci_non_wooven1 from '../../../images/new_images_client/VCI Non Woven Fabric/IMG_9082.jpg'
import vci_non_wooven2 from '../../../images/new_images_client/VCI Non Woven Fabric/IMG_9084.jpg'
import greenProLogo from '../../../images/new_images_client/AboutPage/green/Green Product Mark.jpeg'

const Descicannt = () => {

    const { t, i18n } = useTranslation();

    const arr = [
        {
            id: "section1",
            number: "1",
            greenProduct: "Green Product",
            heading: "VCI Bio-Film",
            image: engine,
            image_text: "BENZ VCI Bio Film stands as an eco-conscious alternative to traditional nondegradable films. Offering superior mechanical properties and stability compared to other compostable films, it holds certifications from both DIN and as per EN 13432 and ASTM D6400. Unlike some compostable films, BENZ VCI Bio Film remains heat and water stable during use, making it ideal for organic waste collection and community composting programs.",
            image_text2: "The biodegradation timeline depends on disposal conditions, but in a typical commercial composting environment, it breaks down into carbon dioxide and water within weeks, posing no harm to soil, plants, or microorganisms. Shelf-stable and available in various sizes and thicknesses, BENZ VCI Bio Film is your sustainable choice for responsible packaging."
        },

        {
            id: "section2",
            number: "2",
            heading: "VCI Film",
            image: engine,
            image_text: "At BENZ Packaging Solutions, we offer cutting-edge technology for your packaging needs, including our advanced VCI Films & VCI Bags, designed to provide ultimate protection against corrosion. These innovative films are engineered using high-technology resins and a custom co-extrusion process, resulting in higher mechanical strength and low water vapor permeability. The BENZ VCI FILM range introduces a VCI additive during co-extrusion, which sublimes from the plastic to safeguard packed metallic items from corrosion.",
            image_text2: "Trusted by leading automobile manufacturers, steelmakers, and metallurgical companies worldwide, our VCI FILM products offer an easy, practical, and cost-effective solution to prevent corrosion damage. Their transparency allows for efficient goods placement and streamlined customs procedures, eliminating the need to open and compromise the packaging"
        },

        {
            id: "section3",
            number: "3",
            heading: "VCI Stretch Film",
            image: [stretchFilm1, stretchFilm2],
            image_text: "BENZ VCI Stretch Film represents a top-tier, coextruded solution known for its exceptional strength, stretch capabilities, and multi-metal corrosion protection. This high-performance film not only delivers impressive puncture resistance but also excels in load retention, enabling users to reduce gauge, secure even aggressive loads, and optimize packaging efficiency while minimizing costs. It's also recyclable, underscoring its sustainability.",
            image_text2: ". Available in Hand Grade and Machine Grade variants, BENZ VCI Stretch Film offers versatility, with thickness options ranging from 9 Microns to 55 Microns, ensuring a tailored solution for diverse packaging needs."
        },

        {
            id: "section4",
            number: "4",
            heading: "VCI Bubble Film",
            image: bubble_film,
            image_text: "BENZ VCI Bubble Film seamlessly blends the power of volatile corrosion inhibitors with cushioning packing bubbles to provide unparalleled protection for delicate or sensitive components. Employing Vapor Phase Corrosion Inhibitor (VCI) technology, these bubbles shield a wide spectrum of metals, including carbon steel, aluminum, copper, brass, silver, and stainless steels, all without leaving any film or residue on your valuable items.",
            image_text2: "Moreover, BENZ VCI Bubble Film effectively safeguards sensitive electronic equipment from triboelectric charge generation. Environmentally responsible and user-friendly, it is both non-toxic and recyclable. Available in customizable rolls, sheeting, or heat-sealable bags, BENZ VCI Bubble Film ensures tailored protection for your specific packaging needs."
        },
        {
            id: "section5",
            number: "5",
            heading: "VCI Woven Fabric Film",
            image: [vci_wooven1, vci_wooven2, vci_wooven3],
            image_text: "BENZ VCI Woven Fabric Film represents the pinnacle of corrosion-inhibiting reinforced films in the industry. Leveraging our patented Vapor Corrosion Inhibiting (VCI) technology, it has revolutionized metal protection within sealed packages. This film delivers unmatched corrosion protection for both ferrous and non-ferrous metals while remaining non-toxic, free from nitrites, phosphates, silicates, or other hazardous compounds. Crafted from the highestquality BENZ VCI Films and laminated with woven fabrics, BENZ VCI Woven Fabric Film features a three/four-layer structure that ensures exceptional tear resistance.",
            image_text2: "The VCI within the film vaporizes, extending its protective reach to all metal surfaces, creating a remarkably thin yet highly effective protective layer that preserves product appearance without necessitating removal."
        },
        {
            id: "section6",
            number: "6",
            heading: "VCI Anti static Film",
            image: [antistatic1, antistatic2, antistatic3],
            image_text: "BENZ VCI Anti Static Film stands as a reliable solution that not only meets the stringent antistatic standards but also offers multi-metal corrosion protection and ESD protection. Plastic films often exhibit poor electrical conductivity, making them susceptible to static discharges during packaging, which can be especially problematic in applications where such discharges are unacceptable.",
            image_text2: "The film effectively dissipates static discharges, ensuring your products remain free from harm. Additionally, its transparent nature allows for see-through packaging, providing clarity and convenience in identifying your goods."
        },
        {
            id: "section7",
            number: "7",
            heading: "VCI Shrink Film",
            image: engine,
            image_text: "BENZ VCI Shrink Film seamlessly merges cutting-edge film technology with potent corrosion protection for metal products. This film amalgamates high-strength resins, UV light stabilizers, flame retardants, and Vapor Corrosion Inhibitor (VCI) technology. Notably, it excels in preventing corrosion and Electrostatic Discharge (ESD) damage, providing multi-metal corrosion protection and robust static dissipative properties. Replacing conventional rust preventatives like oils and desiccants, BENZ VCI Shrink Film ensures immediate usability without the need for cleaning or degreasing. By sealing your products in this film, you shield a wide range of metals from rust, tarnish, stains, and oxidation, resulting in cost savings by eliminating previous degreasing or coating removal requirements.",
            image_text2: "Moreover, it's eco-friendly, devoid of harmful ingredients, and adheres to MILPRF-81705 D standards for Static Dissipative Packaging Materials. BENZ VCI Shrink Film guarantees up to 2 years of corrosion protection and 1 year of ESD protection in open environments, providing peace of mind for your metal products."
        },
        {
            id: "section8",
            number: "8",
            heading: "VCI Non-Woven Film",
            image: [non_wooven1, non_wooven1, vci_non_wooven1, vci_non_wooven2],
            image_text: "BENZ VCI Woven Fabric Film is a robust nonwoven fabric blend, skillfully crafted from a fusion of synthetic and cellulosic fibers, complemented by Propagroup's cutting-edge Vapor Corrosion Inhibitor (VCI)technology. This versatile product finds utility across a wide spectrum of applications.",
            image_text2: "Beyond its formidable corrosion protection capabilities, it offers a vital shield against mechanical hazards such as scratching, abrasion, and staining—common culprits in standard packaging scenarios. Furthermore, it boasts moisture-wicking properties, preventing condensation buildup on vital parts and components during critical packaging operations.BENZ VCI Woven Fabric Film shines as an exceptional choice for safeguarding castings and highly sensitive metals, with typical applications including interleaving, wrapping, and lining."
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
                                {item.greenProduct ? (
                                    <div className={styles.greenrange}>
                                        <img src={greenProLogo} alt="" />
                                    </div>
                                ) : null}

                            </div>

                            {/* {item?.greenProduct ? <div className={styles.auto_letter2}>
                                {t(`${item?.greenProduct ?? ""}`)}
                            </div> : <></>} */}
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