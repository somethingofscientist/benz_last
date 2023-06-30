import React from 'react'
// import styles from './Services.module.css'
import First from '../../components/services_compo/first_containers/FirstContainer_Des_Pack'
import Second from '../../components/services_compo/sec_container/SecondContainer_Des_Pack'
import Third from '../../components/services_compo/third_container/ThirdContainer_Des_Pack'
import Fourth from '../../components/services_compo/fourth_container/FourthContainer_Des_Pack'
import Heading from '../../components/services_compo/des_heading/Heading'
import Submit from '../../components/subProducts/submit_container/Submit'
import Fifth from '../../components/services_compo/fifth_container/FifthContainer_Des_Pack'
import Sixth from '../../components/services_compo/sixth_container/SixthContainer_Des_Pack'

const Services = () => {
  return (
    <>
      <Heading />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Submit />
    </>
  )
}

export default Services