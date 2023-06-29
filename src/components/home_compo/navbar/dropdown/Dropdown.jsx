import React, { useState } from 'react'
import styles from './Dropdown.module.css';
import { BsChevronDown, BsChevronUp, BsGlobe, BsGlobe2 } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';



const Dropdown = ({ selected, setSelected }) => {
    const [isActive, setActive] = useState(false)
    const { t, i18n } = useTranslation();
    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    }
    return (
        <>
            <div className={styles.dropdown_container}>
                <div className={styles.dropdown}>
                    {/* <BsGlobe2 color="white" size={28} /> */}
                    <div className={styles.dropdown_btn}
                        onClick={(e) => setActive(!isActive)}>
                        <BsGlobe2 />
                        {/* {
                            isActive ?
                                <div> <BsChevronUp /> </div>
                                :
                                <div> <BsChevronDown /> </div>
                        } */}
                    </div>
                    {
                        isActive && (
                            <div className={styles.dropdown_content}>
                                <nav className={styles.dropdown_items}>
                                    <button onClick={() => handleClick('en')}>
                                        English
                                    </button>
                                    <button onClick={() => handleClick('sp')}>
                                        Spanish
                                    </button>
                                    <button onClick={() => handleClick('th')}>
                                        Thai
                                    </button>
                                    <button onClick={() => handleClick('de')}>
                                        German
                                    </button>
                                    <button onClick={() => handleClick('ja')}>
                                        Japanese
                                    </button>
                                    <button onClick={() => handleClick('vn')}>
                                        Vietnamese
                                    </button>
                                </nav>
                            </div>
                        )
                    }
                    {/* <p>
                        <h1 className={styles.lang}>
                            {t("hello world language will change here")}
                            <br />
                            {t("sahil")}
                            <br />
                            {t("Global")}
                        </h1>
                    </p> */}

                </div>
            </div>
        </>
    )
}

export default Dropdown;