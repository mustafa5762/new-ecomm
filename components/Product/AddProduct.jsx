import React, { useState } from 'react';
import {Input} from "@nextui-org/react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    sdn: '',
    colors: [],
    sizes: [],
    shortDescription: '',
    sizeDescription: '',
    features: [],
    description: '',
    reviews: [],
    prices: [],
    slug: '',
    tags: [],
    onHomePage: false,
    category: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleArrayInputChange = (e, key) => {
    const { value } = e.target;
    setProduct({ ...product, [key]: [...product[key], value] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(product)
  };

  return (
    <div className='px-16 mt-20'>
        <div className="grid grid-cols-2 gap-6">
            <Input bordered type="text" label="Enter Product Name" variant="bordered" className='text-neutral-800' color='default' />
            <Input bordered type="text" label="Enter Product SDN" variant="bordered" className='text-neutral-800' color='default' />
        </div>
    </div>
  );
};

export default AddProduct;
