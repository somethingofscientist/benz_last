import React from 'react'
import styles from './NewsLetter.module.css';
import news_first from '../../images/news_first.svg';
import news_sec from '../../images/news_sec.svg';
import news_third from '../../images/news_third.svg';
import news_fourth from '../../images/news_fourth.svg';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { AiOutlinePrinter } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'

const NewsLetter = () => {
    return (
        <>
            <div className={styles.news_container} id='section3'>
                <div className={styles.news_heading}>Newsletter</div>
                <div className={styles.news_subheading}>
                    <div className={styles.news_compo}>
                        <HiOutlineBuildingOffice2 size={30} />   
                        <p>100+ Advertisers</p>
                    </div>
                    <div className={styles.news_compo}>
                        <AiOutlinePrinter size={30} />  
                        <p>600+ Newsletters</p>
                    </div>
                    <div className={styles.news_compo}>
                       <BsPeople size={30}/> 
                       <p>100+ Million Subscribers</p>
                    </div>
                </div>
                <div className={styles.news_images_container}>
                    <div className={styles.news_first_images_container}>
                        <img src={news_first} alt="" />
                        <img src={news_sec} alt="" />
                    </div>
                    <div className={styles.news_sec_images_container}>
                        <img src={news_third} alt="" />
                        <img src={news_fourth} alt="" />
                    </div>
                </div>


                <div className={styles.letter_container}>
                    <div className={styles.left_letter_container}>
                        {/* <img src={ } alt="" /> */}
                    </div>
                    <div className={styles.right_letter_container}>
                        <div className={styles.letter_heading}>
                            Subscribe to Newsletter
                        </div>
                        <div className={styles.letter_subheading}>
                            Stay up to date with our new collections, the latest deals and special offers! We announce a new update every week.
                        </div>
                        <div className={styles.letter_email_input}>
                            <input
                                type="text"
                                placeholder="Enter email address"
                            />
                        </div>
                        <div className={styles.letter_subs}>
                            SUBSCRIBE
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter