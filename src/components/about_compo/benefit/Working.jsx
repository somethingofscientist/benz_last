
import styles from './Working.module.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import './HorizontalScrollMenu.css';
import { useState } from 'react';
import boat from '../../images/boat.svg'
import { useTranslation } from 'react-i18next';


const Working = () => {
    const data = new Array(10).fill(boat);
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
                    {data.map((imageUrl, index) => (
                        <div
                            key={index}
                            className={`image-container ${hoveredIndex === index ? 'hovered' : ''}`}
                            style={{ width: '300px', height: '400px' }}
                            onMouseEnter={() => handleImageHover(index)}
                            onMouseLeave={() => handleImageHover(null)}
                        >
                            <img
                                src={imageUrl}
                                alt={`Image ${index}`}
                                style={{ width: '100%', height: '100%' }}
                            />
                            {hoveredIndex === index ? (
                                <div className="image-text">
                                    {t("Supporting you from start to finish.")}
                                </div>
                            ) : (
                                <h1 className="image-textHeading">{t("Customer Service")}</h1>
                            )}
                        </div>
                    ))}

                </ScrollMenu>
            </div>
        </>
    )
}

export default Working