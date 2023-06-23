import React from 'react'
import styles from './Slider.module.css';
import tape from '../../images/tape.svg';
import { useState } from 'react';

const Slider = () => {
    const [showTape, setShowTape] = useState(true);
    return (
        <>
            <div className={styles.slider_heading}>
                Products
            </div>
            <div className={styles.wrapper}>

                <div className={styles.item}>
                    <img src={tape} alt="tape" />
                    {showTape &&
                        <div className={styles.item_tape}>
                            TAPES
                        </div>}
                    <div className={styles.item_text}
                        onMouseEnter={() => setShowTape(false)}
                        onMouseLeave={() => setShowTape(true)}
                    >
                        BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.
                    </div>
                    <div className={styles.item_date}>
                        8 June 2023
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={tape} alt="tape" />
                    {showTape &&
                        <div className={styles.item_tape}>
                            TAPES
                        </div>}
                    <div className={styles.item_text}
                        onMouseEnter={() => setShowTape(false)}
                        onMouseLeave={() => setShowTape(true)}
                    >
                        BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.
                    </div>
                    <div className={styles.item_date}>
                        8 June 2023
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={tape} alt="tape" />
                    {showTape &&
                        <div className={styles.item_tape}>
                            TAPES
                        </div>}
                    <div className={styles.item_text}
                        onMouseEnter={() => setShowTape(false)}
                        onMouseLeave={() => setShowTape(true)}
                    >
                        BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.
                    </div>
                    <div className={styles.item_date}>
                        8 June 2023
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={tape} alt="tape" />
                    {showTape &&
                        <div className={styles.item_tape}>
                            TAPES
                        </div>}
                    <div className={styles.item_text}
                        onMouseEnter={() => setShowTape(false)}
                        onMouseLeave={() => setShowTape(true)}
                    >
                        BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.
                    </div>
                    <div className={styles.item_date}>
                        8 June 2023
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={tape} alt="tape" />
                    {showTape &&
                        <div className={styles.item_tape}>
                            TAPES
                        </div>}
                    <div className={styles.item_text}
                        onMouseEnter={() => setShowTape(false)}
                        onMouseLeave={() => setShowTape(true)}
                    >
                        BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.
                    </div>
                    <div className={styles.item_date}>
                        8 June 2023
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={tape} alt="tape" />
                    {showTape &&
                        <div className={styles.item_tape}>
                            TAPES
                        </div>}
                    <div className={styles.item_text}
                        onMouseEnter={() => setShowTape(false)}
                        onMouseLeave={() => setShowTape(true)}
                    >
                        BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.
                    </div>
                    <div className={styles.item_date}>
                        8 June 2023
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={tape} alt="tape" />
                    {showTape &&
                        <div className={styles.item_tape}>
                            TAPES
                        </div>}
                    <div className={styles.item_text}
                        onMouseEnter={() => setShowTape(false)}
                        onMouseLeave={() => setShowTape(true)}
                    >
                        BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.
                    </div>
                    <div className={styles.item_date}>
                        8 June 2023
                    </div>
                </div>

                <div className={styles.item}>
                    <img src={tape} alt="tape" />
                    {showTape &&
                        <div className={styles.item_tape}>
                            TAPES
                        </div>}
                    <div className={styles.item_text}
                        onMouseEnter={() => setShowTape(false)}
                        onMouseLeave={() => setShowTape(true)}
                    >
                        BENZ Packaging manufacturers Printed tape which not only ensures a safe closure of your packaging, but it also ensures recognizability.
                    </div>
                    <div className={styles.item_date}>
                        8 June 2023
                    </div>
                </div>

            </div>
        </>
    )
}

export default Slider