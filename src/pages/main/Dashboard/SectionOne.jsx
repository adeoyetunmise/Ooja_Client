import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProdCard from './ProdCard';

const SectionOne = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
        const res = await axios.get("https://fakestoreapi.com/products");
        setProducts(res.data)
        }


        fetchProducts()
    }, [])
  return (
    <>
        <h2 className='text-dark font-iceberg font-bold text-3xl text-center my-10'>Products</h2>
        <div className='bg-quinary shadow-sm shadow-gray-400 h-[500px] m-10 overflow-auto flex flex-wrap gap-3 p-10 justify-center items-center'> {products && products.map((product, index) => (<ProdCard key = {index} {...product}/>))}

        </div>

    </>
  )
}

export default SectionOne