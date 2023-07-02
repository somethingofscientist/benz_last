import React from 'react'
import styles from './Slider.module.css';
import tape from '../../images/tape.svg';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Slider = (props) => {

    const { t, i18n } = useTranslation();
    const [showTape, setShowTape] = useState(true);

    const arr = props.subProducts || [
        {
            image: tape,
            items: "TAPE",
            item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
            date: "8 June 2023"
        },
        {
            image: tape,
            items: "PORT",
            item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
            date: "8 June 2023"
        },
        {
            image: tape,
            items: "TAPE",
            item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
            date: "8 June 2023"
        },
        {
            image: tape,
            items: "TAPE",
            item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
            date: "8 June 2023"
        },
        {
            image: tape,
            items: "TAPE",
            item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
            date: "8 June 2023"
        },
        {
            image: tape,
            items: "TAPE",
            item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
            date: "8 June 2023"
        },
        {
            image: tape,
            items: "TAPE",
            item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
            date: "8 June 2023"
        },
        {
            image: tape,
            items: "TAPE",
            item_text: "BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.",
            date: "8 June 2023"
        },
    ]

    return (
        <>
            <div className={styles.slider_heading}>
                Products
            </div>
            <div className={styles.wrapper}>
                {
                    arr.map((item) => (
                        <div className={styles.item}>
                            <img src={item.image} alt="tape" />
                            {showTape &&
                                <div className={styles.item_tape}>
                                    {item.items}
                                </div>}
                            <div className={styles.item_text}
                                onMouseEnter={() => setShowTape(false)}
                                onMouseLeave={() => setShowTape(true)}
                            >
                                {item.item_text}
                            </div>
                            <div className={styles.item_date}>
                                {item.date}
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Slider