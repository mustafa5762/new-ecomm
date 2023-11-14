import React from 'react'
import ProductCard from './ProductCard'
import SortDropdown from '../UI/SortDropdown'
import { Button } from '@nextui-org/react'
import { SlidersHorizontal } from 'lucide-react'

function ProductGrid({products}) {
  return (
    <div className='px-3 lg:px-16'>
        <div className="mt-20">
          <h1 className="text-4xl text-neutral-800 font-semibold">T-Shirts</h1>
          <p className="text-neutral-600 mt-3 text-[15px] leading-relaxed lg:w-2/5">The easiest thing to wear and the most essential layer is a damn good tee shirt. Long or short sleeve tees, henleys, crew or v-necks - the best men's tees for any style.</p>
        </div>
        <div className="mt-10">
          <div className="flex justify-between items-center">
            <div className='flex items-center'>
              <p className="text-neutral-600 text-sm font-medium"><span className="font-semibold">54</span> Products Found</p>
            </div>
            <div className="flex items-center">
              <SortDropdown/>
              <Button
                endContent={<SlidersHorizontal size={18} color='#525252'/>}
                variant="light" 
                className="capitalize text-neutral-800 font-semibold"
              >
                Show Filters
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-0.5 mt-6">
            {products.map(product => <ProductCard key={product.slug} product={product}/>)}
        </div>
    </div>
  )
}

export default ProductGrid