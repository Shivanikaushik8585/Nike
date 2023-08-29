import React from 'react'
import{ services } from "../constants"
import ServicesCard from '../components/ServicesCard'

function Service() {
  return (
   <section className='max-conatiner flex justify-center flex-wrap gap-9'>
    {services.map((service) =>(
<ServicesCard key={services.label} {...service}/>

    ))}
    

   </section>
  )
}

export default Service
