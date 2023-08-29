import React from 'react'


function ShoeCard({imgURL ,changeBigShoeImage,bigShoeImg}) {
 
 const handleClick =()=>{
    if(bigShoeImg !== imgURL.bigShoe){
        changeBigShoeImage(imgURL.bigShoe)
    }
 }
    return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ?"border-coral-red":'border-transparent'} cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
    >
      <div className='flex justify-center items-center  sm:w-40  bg-card bg-cover bg-center sm:h-40 rounded-xl max-sm:p-4'>
        <img src={imgURL.thumbnail} alt="Shoe Collection" width={127} height={103} className='object-contain'/>
      </div>
    </div>
  )
}

export default ShoeCard
