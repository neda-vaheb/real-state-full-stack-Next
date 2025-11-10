import { cities } from '@/constants/string'
import ServiceCard from '@/module/ServiceCard'
import React from 'react'

function WhyUs() {
  return (
<div className='flex flex-wrap justify-center items-center gap-5'>

{cities.map((item, index) => (
            <ServiceCard key={index}  name={item} index={index}/>
          ))}
</div>
  )
}

export default WhyUs
