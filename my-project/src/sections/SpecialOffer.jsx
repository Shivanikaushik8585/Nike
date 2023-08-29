import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'
function SpecialOffer() {
  return (
   <section className='flex justify-wrap ittems-center max-xl:flex-col-reverse gap-10 max-container'>
    <div className='flex-1 '>
      <img src={offer} width={773} height={687} alt="offer" className='object-contain w-full' />
     </div>
      <div className='flex-1 flex-col flex'>
         <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-x1:padding-x '>
        
        <h2 className='  font-palanquin text-4xl capitalize   font-bold lg:max-w-lg'>
        Special Offer
          {/* <br /> */}
          {/* <span className='text-coral-red inline-block mt-3'>Super </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Quality </span>
           Shoes */}
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style our meticulously crafted footwear is designed to elevated your experience ,providing you with unmatched quality.innovation,and atouch of elegance</p>
        <Button label="View Details"
        iconURL={arrowRight}
        />
    
   </div>
   </div>
   </section>
  )
}

export default SpecialOffer
