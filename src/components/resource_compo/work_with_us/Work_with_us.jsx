import React, { useState } from 'react'
import styles from './Distributor.module.css';
import top1 from '../../images/top1.svg';
import bottom1 from '../../images/bottom1.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Select from 'react-select';
import { TextField } from '@mui/material';
import ReactSignatureCanvas from 'react-signature-canvas';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    height: '660px',
    overflowY: 'auto',
    '@media (max-width: 420px)': {
        width: 400,
    },
};


const Work_with_us = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        // console.log('hi submit alert')
        // window.alert("Form Submitted")
    }

    const CloseIcon = () => (
        <span
            style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                cursor: 'pointer',
            }}
            onClick={handleClose}
        >
            &#x2716;
        </span>
    );

    return (
        <>
            <a id='section3'>
                <div className={styles.d_container} >
                    <div className={styles.d_left}>
                        <div className={styles.d_left_heading}>{t("Work With Us")}</div>
                        <div className={styles.d_left_content}>
                            {t("BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.")}
                            <br /><br />
                            {t("BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.")}
                            <br /><br />
                            {t("BENZ Packaging is the leading manufacturer and supplier of Industrial Supplies & Packaging products including Tapes, Strapping Solutions, and Sealing & Wrapping Machines.")}
                        </div>
                    </div>
                    <div className={styles.d_right}>
                        <div className={styles.top_img}>
                            <img src={top1} alt="" />
                        </div>
                        <div className={styles.bottom_img}>
                            <img src={bottom1} alt="" />
                        </div>


                        <Link to="/career">
                            <div className={styles.join}>
                                {/* Work With Us */}
                                Join Our Team
                            </div>
                        </Link>

                        {/* <div
                            className={styles.join}
                        // onClick={handleOpen}
                        >
                            <Button onClick={handleOpen}>Join Our Team</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <CloseIcon />
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                        sx={{ textAlign: "center" }}
                                    >
                                        Work With Us
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                        <div>
                                            <form onSubmit={handleSubmit}>
                                                <label htmlFor="name" className={styles.form_label}>
                                                    Name<span style={{ color: "red" }}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    pattern="^[a-zA-Z]+$"
                                                    required
                                                />

                                                <label htmlFor="email" className={styles.form_label}>
                                                    Email<span style={{ color: "red" }}>*</span>
                                                </label>
                                                <input
                                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
                                                    type="email"  // Change the input type to "email" for email validation
                                                    id="email"    // Change the ID to "email"
                                                    name="email"  // Change the name attribute to "email"
                                                    required
                                                />

                                                <label htmlFor="address" className={styles.form_label}>
                                                    Address<span style={{ color: "red" }}>*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    pattern="^[a-zA-Z]+$"
                                                    required
                                                />

                                                <label htmlFor="phone" className={styles.form_label}>
                                                    Phone<span style={{ color: "red" }}>*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    pattern="[0-9]{10}"
                                                    required
                                                />

                                                <label htmlFor="position" className={styles.form_label}>
                                                    Upload Signature <span style={{ color: "red" }}>*</span>
                                                </label>
                                                <div className={styles.sign}>
                                                    <ReactSignatureCanvas
                                                        penColor="blue"
                                                        canvasProps={{ width: 500, height: 200 }}
                                                    />
                                                </div>


                                                <div
                                                    style={{
                                                        width: "max-content",
                                                        margin: "auto",
                                                        textAlign: "center",
                                                    }}
                                                >
                                                    <button type="submit">
                                                        Submit
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </Typography>
                                </Box>
                            </Modal>
                        </div> */}


                    </div>

                    <div className={styles.d_mobile_right}>
                        <div className={styles.top_mobile_img}>
                            <img src={top1} alt="" />
                        </div>
                        <Link to="/career">
                            <div className={styles.join}>
                                {t("Join Our Team")}
                            </div>
                        </Link>
                        <div className={styles.bottom_mobile_img}>
                            <img src={bottom1} alt="" />
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Work_with_us;