import React from 'react'
import styles from './Award.module.css';
import stamp_paper from '../../images/stamp.svg'
import { useTranslation } from 'react-i18next';

const Award = () => {

    const { t, i18n } = useTranslation();

    return (
        <div className={styles.award_container} id="section3">
            <div className={styles.about_compo_heading}>
                {t("Awards and Certifications")}
            </div>
            <div className={styles.award_para}>
                {t("BENZ Packaging backed by its parent company – New Sales Corporation has been in the field of packaging for over 38 years. BENZ Packaging has delivered safe and effective corrosion solutions across the globe. Our Technical Partners- Propagroup (Italy) are the leading manufactures of Protective Packaging Products and have onsite representation in over 90-plus countries, to provide seamless support wherever you require it. We can help you get over any challenging corrosion prevention need such as overseas shipping in corrosive environments to storage in high humidity conditions.")}
            </div>
            <div className={styles.award_img}>
                <img src={stamp_paper} alt="" />
                <img src={stamp_paper} alt="" />
                <img src={stamp_paper} alt="" />
                <img src={stamp_paper} alt="" />
            </div>
        </div>
    )
}

export default Award