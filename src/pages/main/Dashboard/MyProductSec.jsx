import React, { useEffect, useState } from 'react'
import ProdCard from './ProdCard'
import {FaPlusCircle} from "react-icons/fa"
import axios from 'axios'

const MyProductSec = () => {

    const [myProduct, setMyProduct] = useState([])

    useEffect(() => {
    const fetchProducts = async () => {
        try {
        const response = await axios.get("https://fakestoreapi.com/products")
        const data = await response.data
        setMyProduct(data)
    } catch (error) {
        console.log(error);
        
    }
    }
    fetchProducts()
    }, [])

  return (
    <div className='h-[500px] overflow-auto w-full bg-quinary scroll-m-2'>
        <div className='top-0 sticky text-center bg-slate-700 py-2 flex items-center justify-center'>
            <h2 className='text-2xl font-playfair font-bold text-primary mr-3'>My Products</h2>
            <FaPlusCircle className="text-2xl text-primary" />
        </div>

        <div className='flex gap-2 flex-wrap items-center justify-center mt-5'>
            {myProduct.map((product, index) => (
                <ProdCard key={index} {...product} />
            ))}
        </div>
    </div>
    
  )
}

export default MyProductSec