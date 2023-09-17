import React, { useState } from 'react'
import styles from './Distributor.module.css';
import top1 from '../../images/top1.svg';
import bottom1 from '../../images/bottom1.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Select from 'react-select';

const options = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    height: '450px',
    overflowY: 'auto',

    '@media (max-width: 420px)': {
        width: 400,
    },
};


const Distributor = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        console.log('hi submit alert')
        window.alert("Form Submitted")
    }
    return (
        <>
            <a id='section4'>
                <div className={styles.d_container} >
                    <div className={styles.d_left}>
                        <div className={styles.d_left_heading}>{t("Become a Distributor")} </div>
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


                        <div
                            className={styles.join}
                        // onClick={handleOpen}
                        >
                            <Button onClick={handleOpen}>Become Distributor</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                        sx={{ textAlign: "center" }}
                                    >
                                        Distributor Application Form
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>

                                        <form onSubmit={handleSubmit}>
                                            <label htmlFor="name" className={styles.form_label}>
                                                Name of company<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                Address<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />

                                            <label htmlFor="name" className={styles.form_label}>
                                                How long have you been operating<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />

                                            <label htmlFor="name" className={styles.form_label}>
                                                How much you invest<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />

                                            <label htmlFor="boolean" className={styles.form_label}>
                                                Do you have vehicle for business<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <Select
                                                // value={selectedOption}
                                                // onChange={this.handleChange}
                                                options={options}
                                            />

                                            <label htmlFor="name" style={{ marginTop: "10px" }} className={styles.form_label}>
                                                Address<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />

                                            <label htmlFor="number" className={styles.form_label}>
                                                Phone <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                minlength="10"
                                                maxlength="10"
                                                pattern="[789][0-9]{9}"
                                                required
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                Name of the Bank <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="number" className={styles.form_label}>
                                                How long has the account have been operating <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                // minlength="10"
                                                // maxlength="10"
                                                pattern="[0-9]"
                                                required
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                What area do you want to cover <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                Name of the officer <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                Position <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />

                                            <button type="submit">
                                                Submit
                                            </button>
                                        </form>

                                    </Typography>
                                </Box>
                            </Modal>
                        </div>


                    </div>


                    <div className={styles.d_mobile_right}>
                        <div className={styles.top_mobile_img}>
                            <img src={top1} alt="" />
                        </div>
                        <div className={styles.bottom_mobile_img}>
                            <img src={bottom1} alt="" />
                        </div>

                        <div className={styles.join}>
                            {/* <Button onClick={handleOpen}>Become Distributor</Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                            >
                                <Box sx={style}>
                                    <Typography
                                        id="modal-modal-title"
                                        variant="h6"
                                        component="h2"
                                        sx={{ textAlign: "center" }}
                                    >
                                        Distributor Application Form
                                    </Typography>
                                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                        <form action="">
                                            <label htmlFor="name" className={styles.form_label}>
                                                Name of company<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="phone" className={styles.form_label}>
                                                Phone <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                minlength="10"
                                                maxlength="10"
                                                pattern="[789][0-9]{9}"
                                                required
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                Name of company<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="phone" className={styles.form_label}>
                                                Phone <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                minlength="10"
                                                maxlength="10"
                                                pattern="[789][0-9]{9}"
                                                required
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                Name of company<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="phone" className={styles.form_label}>
                                                Phone <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                minlength="10"
                                                maxlength="10"
                                                pattern="[789][0-9]{9}"
                                                required
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                Name of company<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="phone" className={styles.form_label}>
                                                Phone <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                minlength="10"
                                                maxlength="10"
                                                pattern="[789][0-9]{9}"
                                                required
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                Name of company<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="phone" className={styles.form_label}>
                                                Phone <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                minlength="10"
                                                maxlength="10"
                                                pattern="[789][0-9]{9}"
                                                required
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                Name of company<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="phone" className={styles.form_label}>
                                                Phone <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                minlength="10"
                                                maxlength="10"
                                                pattern="[789][0-9]{9}"
                                                required
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="name" className={styles.form_label}>
                                                Name of company<span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                pattern="^[a-zA-Z]+$"
                                            // value={data.name}
                                            // onChange={handleInputs}
                                            />
                                            <label htmlFor="phone" className={styles.form_label}>
                                                Phone <span style={{ color: "red" }}>*</span>
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                minlength="10"
                                                maxlength="10"
                                                pattern="[789][0-9]{9}"
                                                required
                                            // value={data.phone}
                                            // onChange={handleInputs}
                                            />
                                        </form>
                                    </Typography>
                                </Box>
                            </Modal> */}
                        </div>
                    </div>
                </div>
            </a>
        </>
    )
}

export default Distributor