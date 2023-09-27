import React, { useState } from 'react';
import styles from './Submit.module.css';
import { HiOutlineDownload } from 'react-icons/hi';
import pdf from './benz.pdf';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

const Submit = () => {
    const { t, i18n } = useTranslation();
    const [email, setEmail] = useState('');
    const [isdisabled, setIsdisabled] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/subscribe-email`, {
                email,
            });
            if (res.status === 200) {
                toast.dismiss();
                toast.success('Thank you for subscribing!', {
                    position: 'top-center',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                setIsdisabled(true);
                setEmail('');
                setSubmittedEmail(true);
            } else {
                toast.dismiss();
                toast.error('Error occurred in the newsletter else block', {
                    position: 'top-center',
                    theme: 'dark',
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.dismiss();
            toast.error('Error Occurred', {
                position: 'top-center',
                autoClose: 3000,
                theme: 'dark',
            });
        }
    };

    return (
        <>
            <div className={styles.submit_container}>
                <div className={styles.submit_heading}>
                    {t(
                        'Order a free consultation - our experts will select the most effective solution'
                    )}
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={styles.submit_flex_box}>
                        <div className={styles.input_email}>
                            <input
                                type="email"
                                placeholder="Enter Email Address"
                                required
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className={styles.button_flex}>
                                <button className={styles.submit_btn} type="submit">
                                    {t('Submit')}
                                </button>
                                <button
                                    className={styles.submit_btn}
                                    disabled={isdisabled}
                                    style={{
                                        backgroundColor: isdisabled ? "" : "grey",
                                    }}
                                >
                                    <a
                                        href={pdf}
                                        target="_blank"
                                        download={'BENZ_Brochure'}
                                    >
                                        <span style={{ color: 'white' }}>
                                            {t('Download Brochure')}
                                        </span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Submit;