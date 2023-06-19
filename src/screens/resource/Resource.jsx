import React from 'react'
import Distributor from '../../components/resource_compo/become_distributor/Distributor'
import Heading from '../../components/resource_compo/des_heading/Heading'
import Sticky_header from '../../components/resource_compo/sticky_header/Sticky_header_industry'
import News from '../../components/resource_compo/news_blog/News'
import FAQ from '../../components/resource_compo/faq_res/FAQ'
import Work_with_us from '../../components/resource_compo/work_with_us/Work_with_us'
import Packaging from '../../components/resource_compo/packaging_facts/Packaging'


const Resource = () => {
  return (
    <>
        <Heading />
        <Sticky_header />
        <Packaging />
        <News />
        <Work_with_us />
        <Distributor />
        <FAQ />
    </>
  )
}

export default Resource