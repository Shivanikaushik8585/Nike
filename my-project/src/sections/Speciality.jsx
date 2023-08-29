import React from 'react'
import { arrowRight } from '../assets/icons'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'
function Speciality() {
  return (
   <section id="about-us"
   className='flex justify-between  max-lg:flex-col gap-10 w-full max-container'>
         <div className='flex-1 flex-col flex'>
         <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-x1:padding-x '>
        
        <h2 className='  font-palanquin text-4xl capitalize   font-bold lg:max-w-lg'>
        We Provide YOU
          <br />
          <span className='text-coral-red inline-block mt-3'>Super </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Quality </span>
           Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style our meticulously crafted footwear is designed to elevated your experience ,providing you with unmatched quality.innovation,and atouch of elegance</p>
        <Button label="View Details"
        iconURL={arrowRight}
        />
        <div className='mt-11'></div>
       
      </div>
         </div>
         <div className='flex-1 flex justify-center items-center'>
          <img  className="object-contain"src={shoe8} alt="shoes" width={570} height={570} />
         </div>
   </section>
  )
}

export default Speciality
