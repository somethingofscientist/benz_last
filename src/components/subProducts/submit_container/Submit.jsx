import React, {useState} from 'react'
import styles from './Submit.module.css';
import { HiOutlineDownload } from 'react-icons/hi';
import pdf from './benz.pdf';

import axios from 'axios';
import { toast } from "react-toastify";
import { useTranslation } from 'react-i18next';

const Submit = () => {
    const { t, i18n } = useTranslation();

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
                    autoClose: 1500,
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


    return (
        <>
            <div className={styles.submit_container}>
                <div className={styles.submit_heading}>
                    {t("Order a free consultation - our experts will select the most effective solution")}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.submit_flex_box}>
                        <div className={styles.input_email}>
                            <input
                                placeholder='Phone Number Or Email*'
                                type="email"
                                // placeholder="Enter email address"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <a href={pdf} target="_blank" download={'BENZ_Brochure'}>
                            <div className={styles.download}>
                                <HiOutlineDownload size={20} />
                                <div className={styles.d_para}>
                                    {t("Download Brochure")}
                                </div>
                            </div>
                        </a>
                    </div>
                    <button
                        className={styles.submit_btn}
                        type='submit'
                    >
                        {t("Submit")}
                    </button>
                </form>
            </div>
        </>
    )
}

export default Submit