import React from 'react'
// import styles from './Industry.module.css';
import Sticky_header from '../../components/industry_compo/sticky_header/Sticky_header_industry';
import Heading from '../../components/industry_compo/heading_header_industry/Heading';
import Packaging_industry from '../../components/industry_compo/packaging/Packaging_industry';
import Automobile from '../../components/industry_compo/automobile_industry/Automobile';
import Aerospace from '../../components/industry_compo/aero_industry/Aerospace';
import Electro from '../../components/industry_compo/electro_industry/Electro';
import Mili from '../../components/industry_compo/mili_industry/Mili';
import Contract_packaging from '../../components/industry_compo/contract_packaging_industry/Contract_packaging';
import Fmcg from '../../components/industry_compo/fmcg/Fmcg';
import Retail from '../../components/industry_compo/retail/Retail';

const Industry = () => {
  return (
    <>  
        <Heading />
        <Sticky_header />
        <Packaging_industry />
        <Automobile />
        <Mili />
        <Aerospace />
        <Contract_packaging />
        <Electro />
        <Fmcg />
        <Retail />  
    </>
  )
}

export default Industry