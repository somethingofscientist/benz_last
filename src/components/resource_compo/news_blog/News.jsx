import React from 'react'
import styles from './News.module.css';
import player from '../../images/gloves_packing.png';
// import player from '../../images/player.svg';
import { BsArrowRight, BsArrowRightCircleFill } from 'react-icons/bs';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const News = () => {
    const { t, i18n } = useTranslation();
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
        <a id='section2'>
            <div className={styles.news} >
            <div className={styles.news_flexbox}>
                <div className={styles.news_mobile_heading}>
                    {t("Packaging Tips")}
                </div>
                <div className={styles.news_heading}>
                    <p className={styles.news_heading_two}>
                        {t("Packaging Tips")}
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
                                            {t(`${item.greybox}`)}
                                        </div>
                                        <div className={styles.news_box_heading}>
                                            {t(`${item.headline}`)}
                                        </div>
                                        <div className={styles.news_box_subheading}>
                                            {t(`${item.subheadline}`)}
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
                            {t("For More Info")} <BsArrowRight />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </a>
    )
}

export default News