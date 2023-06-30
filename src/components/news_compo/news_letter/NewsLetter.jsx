import React, { useState } from 'react'
import styles from './NewsLetter.module.css';
import news_first from '../../images/news_first.svg';
import news_sec from '../../images/news_sec.svg';
import news_third from '../../images/news_third.svg';
import news_fourth from '../../images/news_fourth.svg';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { AiOutlinePrinter } from 'react-icons/ai'
import { BsPeople } from 'react-icons/bs'
import axios from 'axios';
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';


const NewsLetter = () => {

    // const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/subscribe-email`, {
                // name: firstName,
                email,
            });
            if (res.status === 200) {
                toast.dismiss();
                toast.success("Thank you for subscribing!", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setEmail("");
            } else {
                // console.log(error.message);
                toast.dismiss();
                toast.error("Error occured in the newsletter else block", {
                    position: "top-center",
                    theme: "dark",
                    autoClose: 3000,
                });
            }

        } catch (error) {
            toast.dismiss();
            toast.error("Error Occured", {
                position: "top-center",
                autoClose: 3000,
                theme: "dark",
            });
            // console.log(error.message);
        }
    }

    const { t, i18n } = useTranslation();
    return (
        <>
            <div className={styles.news_container} id='section3'>
                <div className={styles.news_heading}>{t("Newsletter")}</div>
                <div className={styles.news_subheading}>
                    <div className={styles.news_compo}>
                        <HiOutlineBuildingOffice2 size={30} />
                        <p>{t("100+ Advertisers")}</p>
                    </div>
                    <div className={styles.news_compo}>
                        <AiOutlinePrinter size={30} />
                        <p>{t("600+ Newsletters")}</p>
                    </div>
                    <div className={styles.news_compo}>
                        <BsPeople size={30} />
                        <p>{t("100+ Million Subscribers")}</p>
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
                            {t("Subscribe to Newsletter")}
                        </div>
                        <div className={styles.letter_subheading}>
                            {t("Stay up to date with our new collections, the latest deals and special offers! We announce a new update every week.")}
                        </div>
                        <form onSubmit={handleSubmit}>
                        
                            {/* <input
                                className={styles.notwant}
                                type="text"
                                required
                                placeholder="First name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                pattern="^[a-zA-Z]+$"
                            /> */}
                            <div className={styles.letter_email_input}>
                                <input
                                    className={styles.letter_email_input}
                                    type="email"
                                    placeholder="Enter email address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <button
                                className={styles.letter_subs}
                                type='submit'
                            >
                                {t("SUBSCRIBE")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsLetter