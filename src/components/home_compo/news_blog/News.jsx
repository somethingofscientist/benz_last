import React from 'react'
import styles from './News.module.css';
import player from '../../images/player.svg';
import { BsArrowRightCircleFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const News = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={styles.news}>
            <div className={styles.news_flexbox}>
                <div className={styles.news_mobile_heading}>
                    {t("News & Blogs")}
                </div>
                <div className={styles.news_heading}>
                    <p className={styles.news_heading_two}>
                        {t("News & Blogs")}
                    </p>
                </div>
                <div className={styles.news_blue_container}>
                    <div className={styles.news_flexbox}>
                        <div className={styles.blue_img}>
                            <img src={player} alt="player" />
                        </div>
                        <div className={styles.blue_text}>
                            <div className={styles.news_box}>{t("NEWS")} </div>
                            <div className={styles.news_box_heading}>
                                {t("Benz residue-free VCI Film protection allows for constant inspection.")}
                            </div>
                            <div className={styles.news_box_subheading}>
                                {t("BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.")}
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
                            <div className={styles.news_box}>{t("NEWS")}</div>
                            <div className={styles.news_box_heading}>
                                {t("Benz residue-free VCI Film protection allows for constant inspection.")}
                            </div>
                            <div className={styles.news_box_subheading}>
                                {t("BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.")}
                            </div>
                            <div className={styles.card_icon2}>
                                <BsArrowRightCircleFill />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default News