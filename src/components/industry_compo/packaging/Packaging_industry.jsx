import React from 'react'
import styles from './Packaging.module.css';
import { useTranslation } from 'react-i18next';

const Packaging_industry = () => {
    
    const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.trusted_container}>
                <div className={styles.trusted_heading}>
                    {t("Packaging solutions for every industry, protecting your products and your brand.")}
                </div>
                <div className={styles.trusted_para}>
                    {t("BENZ Packaging backed by its parent company – New Sales Corporation has been in the field of packaging for over 38 years. BENZ Packaging has delivered safe and effective corrosion solutions across the globe. Our Technical Partners- Propagroup (Italy) are the leading manufactures of Protective Packaging Products and have onsite representation in over 90-plus countries, to provide seamless support wherever you need it. We can help you get over any challenging corrosion prevention need such as overseas shipping in corrosive environments to storage in high humidity conditions.")}
                </div>
            </div>
        </>
    )
}

export default Packaging_industry;