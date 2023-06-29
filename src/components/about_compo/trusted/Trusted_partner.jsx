import React from 'react'
import styles from './Trusted.module.css';
import { useTranslation } from 'react-i18next';

const Trusted_partner = () => {
    
  const { t, i18n } = useTranslation();
    return (
        <>
            <div className={styles.trusted_container} id="section0">
                <div className={styles.trusted_heading}>
                    {t("Your trusted partner for all your packaging needs.")}
                </div>
                <div className={styles.trusted_para}>
                    {t("BENZ Packaging, supported by its parent company New Sales Corporation, boasts a rich experience of over 38 years in the packaging industry. Throughout this time, BENZ Packaging has successfully provided reliable and effective corrosion solutions worldwide. Collaborating with our esteemed Technical Partners, Propagroup from Italy, renowned manufacturers of Protective Packaging Products, we offer unparalleled support with on-site representation in over 90 countries. This ensures seamless assistance wherever you require it.")}
                    <br/><br/>
                    {t("We specialize in addressing even the most challenging corrosion prevention requirements, including the safe transportation of goods in corrosive environments and storage in high humidity conditions. For a comprehensive corrosion management solution tailored to your specific needs, we encourage you to reach out to our dedicated BENZ Packaging Technical Representative.")}
                    <br/><br/>
                    {t("Feel free to get in touch and discover how we can assist you.")}
                </div>
            </div>
        </>
    )
}

export default Trusted_partner