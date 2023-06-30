import React from 'react'
import styles from './Packaging.module.css';
import { useTranslation } from 'react-i18next';


const Packaging = () => {
    const { t, i18n } = useTranslation();
    return (
        <>
            <div className={styles.fact_container} id='section1'>
                <div className={styles.fact_heading}>{t("Packaging Facts")} </div>
                <div className={styles.fact_point}>
                    {t("1. Keep your cleaning solutions and metalworking fluids clean to reduce or eliminate small metal particles which are sometimes referred to as “dirt” or “dwarf.” Dwarf deposited on the part and not properly washed away can form a galvanic corrosion cell and rust will occur underneath the dwarf.")}
                </div>
                <div className={styles.fact_point}>
                    {t("2. Be sure to maintain cleaning solutions with a pH of at least 9.0 to protect ferrous metals from Corrosion. For non-ferrous metal parts such as brass and bronze, a pH of 7 – 7.5 should be maintained. Part and not properly washed away can create a galvanic corrosion cell and rust will occur underneath the dwarf.")}
                </div>
                <div className={styles.fact_point}>
                    {t("3. If you are using water in your cutting or cleaning fluids switch to deionized or distilled water.")}
                </div>
                <div className={styles.fact_point}>
                    {t("4. Place parts in a wire basket to dry from Vibratory action or forced air can dry parts more quickly. Do not stack parts on top of each other until completely dry. Parts can corrode when stacked one on top of the other or when contacting each other. This is caused by the fluid acting as an electrolyte and forming a galvanic cell between two parts.")}
                </div>
                <div className={styles.fact_point}>
                    {t("5. Keep metal parts away from industrial air contaminants such as exhaust from Forklift trucks. Keep metal parts away from heat treatment areas, as by-products from heat treating are corrosive to metal.")}
                    <br /><br />
                    {t("Cover all metal parts with BENZ Packaging VCI paper or BENZ Packaging VCI poly bags to protect them from oxygen and contaminants that are in the plant atmosphere.")}
                </div>
                <div className={styles.fact_point}>
                    {t("6. Keep temperature and relative humidity in manufacturing and shipping areas constant. Fluctuations in Temperature & Humidity (by 10ºC) can cause condensation and accelerate corrosion.")}
                </div>
                <div className={styles.fact_point}>
                    {t("7. Maintain lower temperatures and lower humidity levels by installing climate controls, air conditioning, and/or dehumidifiers. Also, be sure to place metal parts into VCI bags or VCI paper as quickly as possible.")}
                </div>
                <div className={styles.fact_point}>
                    {t("8. Be sure that metal parts do not come in direct contact with wooden pallets, corrugated boxes, or untreated paper. Create a barrier between your metal parts and any wood or corrugated boxes and/or line boxes, crates, etc. with a VCI poly bag, or VCI paper.")}
                </div>
                <div className={styles.fact_point}>
                    {t("9. Always follow the manufacturer’s instructions when using VCI products. Consult with a VCI expert like BENZ Packaging, to design a VCI system for your specific application, and help you implement the usage of VCI products properly.")}
                </div>
                <div className={styles.fact_point}>
                    {t("10. And Finally, package metal parts in BENZ Packaging VCI Paper or VCI Poly bag to keep parts corrosion-free for years.")}
                </div>
            </div>
        </>
    )
}

export default Packaging