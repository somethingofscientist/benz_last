
import styles from './Working.module.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './HorizontalScrollMenu.css';
import { useState } from 'react';
import boat from '../../images/boat.svg'
import { useTranslation } from 'react-i18next';


const Working = () => {
    const data = [
        {
            img: boat,
            heading: "Expertise",
            subHEading: "Extensive experience and knowledge in protective packaging, anti-rust packaging, packaging optimization, and designing."
        },
        {
            img: boat,
            heading: "Innovation",
            subHEading: "Utilization of cutting-edge materials and technologies to create effective packaging solutions."
        },
        {
            img: boat,
            heading: "Customization",
            subHEading: "Tailored packaging options to meet specific client needs and product requirements"
        },
        {
            img: boat,
            heading: "Cost Efficiency",
            subHEading: "Proven track record of reducing packaging costs for clients without compromising quality"
        },
        {
            img: boat,
            heading: "Product Safety",
            subHEading: "Ensuring products are well-protected during transit to minimize damage and maintain product integrity."
        },
        {
            img: boat,
            heading: "Sustainability",
            subHEading: "Commitment to eco-friendly packaging solutions and reducing environmental impact."
        },
        {
            img: boat,
            heading: "Client Portfolio",
            subHEading: "Impressive list of satisfied clients and successful case studies."
        },
        {
            img: boat,
            heading: "Quality Assurance",
            subHEading: "Rigorous quality control processes to guarantee the reliability of packaging materials."
        },
        {
            img: boat,
            heading: "Industry Compliance",
            subHEading: "Adherence to industry standards and regulations in packaging and design."
        },
        {
            img: boat,
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
            <div className={styles.working_container} id="section2">
                <div className={styles.about_compo_heading} >
                    {/* {t("Benefits of working with us")} */}
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
        </>
    )
}

export default Working