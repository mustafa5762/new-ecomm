import { Button, Select, SelectItem, Tooltip } from '@nextui-org/react'
import React from 'react'
import { ShoppingBasket } from 'lucide-react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ProductDetail({product}) {
  return (
    <div>
        <div className="px-3 lg:px-16 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className='col-span-2'>
                  
                </div>
                <div className=''>
                    <h1 className='font-bold text-3xl text-default-900'>{product.name}</h1>
                    <h3 className="text-default-600 font-medium text-lg mt-1.5">{product.sdn}</h3>
                    <h2 className="text-default-800 mt-8 font-semibold text-2xl uppercase">{product.prices[0].sign} {product.prices[0].price}</h2>
                    <div className="mt-8">
                      <h5 className="text-default-600 font-medium"><span className="font-bold text-default-800">Color :</span> Olive Green</h5>
                      <div className="mt-4 flex items-center space-x-3">
                        {
                          product.colors.map(color => 
                            <Tooltip className='capitalize' key={color.name} content={color.name}>
                              <Button className={`h-6 w-6 rounded-full min-w-0 ${color.class}`}></Button>  
                            </Tooltip>
                          )
                        }
                      </div>
                    </div>    
                    <div className="mt-8">
                      <div className="flex justify-between items-center">
                        <h5 className="text-default-600 font-medium"><span className="font-bold text-default-800">Size :</span> M</h5>
                        <p className="text-default-700 text-sm font-medium underline cursor-pointer">Size Guide</p>
                      </div>
                      <div className="mt-5">
                        <Select
                          label="Select Size"
                          className="w-full"
                        >
                          {
                            product.sizes.map(size => 
                              <SelectItem key={size.name} value={size.name}>
                                {size.name}
                              </SelectItem>  
                            )
                          }
                        </Select>
                      </div>
                    </div>  
                    <div className="mt-5">
                        <Button endContent={<ShoppingBasket size={16}/>} className='w-full bg-default-900 py-[22px] text-white font-medium'>Add to Cart</Button>
                    </div>         
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetail