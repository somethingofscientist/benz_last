import React from 'react'
import styles from './News.module.css';
import player from '../../images/gloves_packing.png';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const News = () => {
    return (
        <div className={styles.news} id='section2'>
            <div className={styles.news_flexbox}>
                <div className={styles.news_mobile_heading}>
                Packaging Tips
                </div>
                <div className={styles.news_heading}>
                    <p className={styles.news_heading_two}>
                        Packaging Tips
                    </p>
                </div>
                <div className={styles.news_blue_container}>
                    <div className={styles.news_flexbox}>
                        <div className={styles.blue_img}>
                            <img src={player} alt="player" />
                        </div>
                        <div className={styles.blue_text}>
                            <div className={styles.news_box}>NEWS</div>
                            <div className={styles.news_box_heading}>
                                Benz residue-free VCI Film protection allows for constant inspection.
                            </div>
                            <div className={styles.news_box_subheading}>
                                BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.
                            </div>
                            <div className={styles.card_icon2}>
                                <BsArrowRightCircleFill />
                            </div>
                        </div>
                    </div>
                    <div className={styles.news_flexbox}>
                        <div className={styles.blue_img}>
                            <img src={player} alt="player" />
                        </div>
                        <div className={styles.blue_text}>
                            <div className={styles.news_box}>NEWS</div>
                            <div className={styles.news_box_heading}>
                                Benz residue-free VCI Film protection allows for constant inspection.
                            </div>
                            <div className={styles.news_box_subheading}>
                                BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.
                            </div>
                            <div className={styles.card_icon2}>
                                <BsArrowRightCircleFill />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="v">view all</div> */}
            </div>
        </div>
    )
}

export default News