
import styles from './Working.module.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './HorizontalScrollMenu.css';
import { useState } from 'react';
import boat from '../../images/boat.svg'
import { useTranslation } from 'react-i18next';

import img1 from '../../images/new_images_client/AboutPage/generic/Expertise.jpeg'
import img2 from '../../images/new_images_client/AboutPage/generic/Innovation.jpeg'
import img3 from '../../images/new_images_client/AboutPage/generic/Customization.jpeg'
import img4 from '../../images/new_images_client/AboutPage/generic/Cost efficiency.jpeg'
import img5 from '../../images/new_images_client/AboutPage/generic/Product safety.jpeg'
import img6 from '../../images/new_images_client/AboutPage/generic/Sustainability.jpeg'
import img7 from '../../images/new_images_client/AboutPage/generic/Client portfolio..jpeg'
import img8 from '../../images/new_images_client/AboutPage/generic/Quality.jpeg'
import img9 from '../../images/new_images_client/AboutPage/generic/Industry Compliance.jpeg'
import img10 from '../../images/new_images_client/AboutPage/generic/Competitive Advatage.jpeg'

const Working = () => {
    const data = [
        {
            img: img1,
            heading: "Expertise",
            subHEading: "Extensive experience and knowledge in protective packaging, anti-rust packaging, packaging optimization, and designing."
        },
        {
            img: img2,
            heading: "Innovation",
            subHEading: "Utilization of cutting-edge materials and technologies to create effective packaging solutions."
        },
        {
            img: img3,
            heading: "Customization",
            subHEading: "Tailored packaging options to meet specific client needs and product requirements"
        },
        {
            img: img4,
            heading: "Cost Efficiency",
            subHEading: "Proven track record of reducing packaging costs for clients without compromising quality"
        },
        {
            img: img5,
            heading: "Product Safety",
            subHEading: "Ensuring products are well-protected during transit to minimize damage and maintain product integrity."
        },
        {
            img: img6,
            heading: "Sustainability",
            subHEading: "Commitment to eco-friendly packaging solutions and reducing environmental impact."
        },
        {
            img: img7,
            heading: "Client Portfolio",
            subHEading: "Impressive list of satisfied clients and successful case studies."
        },
        {
            img: img8,
            heading: "Quality Assurance",
            subHEading: "Rigorous quality control processes to guarantee the reliability of packaging materials."
        },
        {
            img: img9,
            heading: "Industry Compliance",
            subHEading: "Adherence to industry standards and regulations in packaging and design."
        },
        {
            img: img10,
            heading: "Competitive Advantage",
            subHEading: "Demonstrated ability to enhance a client's competitive edge through packaging solutions."
        },
    ];
    const { t, i18n } = useTranslation();
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleImageHover = (index) => {
        setHoveredIndex(index);
    };

    return (
        <>
            <a id="section2">
                <div className={styles.working_container} >
                    <div className={styles.about_compo_heading} >
                        {t("Why choose us.")}
                    </div>
                    <ScrollMenu className="horizontal-scroll-menu">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className={`image-container ${hoveredIndex === index ? 'hovered' : ''}`}
                                style={{ width: '300px', height: '400px' }}
                                onMouseEnter={() => handleImageHover(index)}
                                onMouseLeave={() => handleImageHover(null)}
                            >
                                <img
                                    src={item.img}
                                    alt={`Image ${index}`}
                                    style={{ width: '100%', height: '100%' }}
                                />
                                {hoveredIndex === index ? (
                                    <div className="image-text">
                                        {t(`${item.subHEading}`)}
                                    </div>
                                ) : (
                                    <h1 className="image-textHeading">
                                        {t(`${item.heading}`)}
                                    </h1>
                                )}
                            </div>
                        ))}

                    </ScrollMenu>
                </div>
            </a>
        </>
    )
}

export default Working