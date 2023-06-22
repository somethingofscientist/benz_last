import React from 'react'
// import styles from './Boxes.module.css'
import Submit from '../../../components/subProducts/submit_container/Submit';
import Heading from '../../../components/subProducts/boxes/des_heading/Heading';
import Routing from '../../../components/subProducts/boxes/first_containers/FirstContainer_Des_Pack';


const Boxes = () => {
    return (
        <>
            <Heading />
            <Routing />
            <Submit />
        </>
    )
}

export default Boxes;