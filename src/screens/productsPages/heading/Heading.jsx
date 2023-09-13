import React from 'react'
import styles from './Heading.module.css';
// import video from '../../videos/product_video1.mp4'
import video from '../../../components/videos/product_video1.mp4'
import { useTranslation } from 'react-i18next';

const ProductHeading =  ({ title }) => {

    const { t, i18n } = useTranslation();

    return (
        <>
            <div className={styles.header_bg}>
                <video autoPlay loop muted src={video}></video>
                <div className={styles.header}>
                    {title}
                </div>
            </div>
        </>
    )
}

export default ProductHeading