
import member from '../../images/imember.svg';
import styles from './Team.module.css';
import React from "react";

const Team = () => {
    return (
        <div className={styles.team_container} id="section5">
            <div className={styles.about_compo_heading}>Our Team </div>

            <div className={styles.wrapper}>
                <div className={styles.item}>
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>
                <div className={styles.item}>
                    <img src={member} alt="" />
                    <div className={styles.role_name}>
                        MANAGING DIRECTOR
                    </div>
                    <div className={styles.person_name}>
                        Vivek Chopra
                    </div>
                </div>
            </div>


            <div className={styles.join_our_team}>
                Join Our Team
            </div>
        </div>
    );
};

export default Team;
