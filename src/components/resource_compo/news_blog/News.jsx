import React from 'react'
import styles from './News.module.css';
import player from '../../images/gloves_packing.png';
// import player from '../../images/player.svg';
import { BsArrowRight, BsArrowRightCircleFill } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';


const News = () => {
    const arr = [
        {
            greybox: "PACKAGING TIP",
            image: player,
            headline: "Packaging personnel should always wear gloves while handling metal parts.",
            subheadline: "BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.",
        },
        {
            greybox: "PACKAGING TIP",
            image: player,
            headline: "Benz residue-free VCI Film protection allows for constant inspection.",
            subheadline: "BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.",
        },
    ]
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
                <div className={styles.pack_new}>
                    <div className={styles.news_blue_container}>
                        {
                            arr.map((item) => (
                                <div className={styles.news_flexbox}>
                                    <div className={styles.blue_img}>
                                        <img src={item.image} alt="player" />
                                    </div>
                                    <div className={styles.blue_text}>
                                        <div className={styles.news_box}>
                                            {item.greybox}
                                        </div>
                                        <div className={styles.news_box_heading}>
                                            {item.headline}
                                        </div>
                                        <div className={styles.news_box_subheading}>
                                            {item.subheadline}
                                        </div>
                                        {/* <div className={styles.card_icon2}>
                                            <BsArrowRightCircleFill />
                                        </div> */}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <Link to="/contact_page">
                        <div className={styles.view_all}>
                            view all <BsArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default News