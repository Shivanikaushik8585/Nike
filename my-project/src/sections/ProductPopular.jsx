import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard '

function ProductPopular() {
  return (
    <section id="produc" className='max-container max-sm:mt-12'>
    <div className='flex flex-col justif-start gap-5'>
      <h2 className='text-4xl font-palanquin font-bold'>Popular Products</h2>
      <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the lofties expectations. your journey with us is nothing short of expectionak.</p>
    </div>
    <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1  sm:gap-4 gap-14'>
        {products.map((product)=>(
            <PopularProductCard key={product.name} {...product}/>
        ))}

    </div>
  </section>
  )
}

export default ProductPopular
