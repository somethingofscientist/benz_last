import React, { useState } from 'react';
import styles from './Dropdown.module.css';
import { BsGlobe2 } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

const Dropdown = ({ selected, setSelected }) => {
  const [isActive, setActive] = useState(false);
  const { t, i18n } = useTranslation();

  const handleClick = (lang) => {
    i18n.changeLanguage(lang);
    setActive(false); // Close the dropdown when a language is selected
  };

  return (
    <div className={styles.dropdown_container}>
      <div className={styles.dropdown}>
        <div
          className={styles.dropdown_btn}
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
        >
          <BsGlobe2 />
        </div>
        {isActive && (
          <div
            className={styles.dropdown_content}
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
          >
            <nav className={styles.dropdown_items}>
              <button onClick={() => handleClick('en')}>English</button>
              <button onClick={() => handleClick('sp')}>Spanish</button>
              <button onClick={() => handleClick('th')}>Thai</button>
              <button onClick={() => handleClick('de')}>German</button>
              <button onClick={() => handleClick('ja')}>Japanese</button>
              <button onClick={() => handleClick('vn')}>Vietnamese</button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
