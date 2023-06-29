import React from 'react'
import { useState } from 'react';
import styles from './FAQ.module.css'
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';

const AccordianItem = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const { t, i18n } = useTranslation();


    return (
        <>
            <div className={styles.accordion_item}>
                <div className={styles.accordion_header} onClick={toggleAccordion}>

                    <h3 className={styles.accordion_title}>{title}</h3>

                    <span className={`${styles.accordion_icon} ${isOpen ? 'minus' : 'plus'}`}>
                        {isOpen ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
                    </span>

                </div>
                {isOpen && <div className={styles.accordion_content}>{content}</div>}
            </div>
        </>
    )
}

export default AccordianItem