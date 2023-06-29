
import { useTranslation } from 'react-i18next';
import member from '../../images/imember.svg';
import styles from './Team.module.css';
import React from "react";
import { Link } from 'react-router-dom';

const Team = () => {
    const { t, i18n } = useTranslation();
    const arr = [
        {
            role: "MANAGING DIRECTOR",
            name: "Vivek Chopra"
        },
        {
            role: "MANAGING DIRECTOR",
            name: "Vivek Chopra"
        },
        {
            role: "MANAGING DIRECTOR",
            name: "Vivek Chopra"
        },
        {
            role: "MANAGING DIRECTOR",
            name: "Vivek Chopra"
        },
        {
            role: "MANAGING DIRECTOR",
            name: "Vivek Chopra"
        },
        {
            role: "MANAGING DIRECTOR",
            name: "Vivek Chopra"
        },
        {
            role: "MANAGING DIRECTOR",
            name: "Vivek Chopra"
        },
    ]
    return (
        <div className={styles.team_container} id="section5">
            <div className={styles.about_compo_heading}>{t("Our Team")} </div>
            <div className={styles.wrapper}>
                {
                    arr.map((item) => (
                        <div className={styles.item}>
                            <img src={member} alt="" />
                            <div className={styles.role_name}>
                               {t(`${item.role}`)}
                            </div>
                            <div className={styles.person_name}>
                               {t(`${item.name}`)}
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link to="/contact_page">
                <div className={styles.join_our_team}>
                    {t("Join Our Team")}
                </div>
            </Link>
        </div>
    );
};

export default Team;
