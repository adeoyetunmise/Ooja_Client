import React from 'react'

const EditProduct = () => {
  return (
    <>
     <div className='min-h-dvh px-20'>
    <div className=' min-h-screen '>
<div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 ">
  <div className="mx-auto max-w-lg">
    
    <form action="#" className="mb-0 mt-1 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 bg-white " >
        
      <p className="text-center text-3xl text-rose-500 font-medium">Update Product</p>

    <div className='flex space-x-4'>
      <div>
        <label htmlFor="text" className='text-black font-bold'>Name:</label>
        <div className="relative">
          <input
            type="text"
            id='name'
            name='name'
            className="w-full rounded-lg border border-gray-900  p-4 pe-12 text-sm shadow-sm"
            placeholder="Product's name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="text" className='text-black font-bold'>Description:</label>
        <div className="relative">
          <input
            type="text"
            id='description'
            name='description'
            className="w-full rounded-lg border border-gray-900  p-4 pe-12 text-sm shadow-sm"
            placeholder="Product's description"
          />
        </div>
      </div>
      </div>

    <div className='flex space-x-4'>

    <div>
        <label htmlFor="text" className='text-black font-bold'>Price:</label>
        <div className="relative">
          <input
            type="number"
            id='price'
            name='price'
            className="w-full rounded-lg border border-gray-900  p-4 pe-12 text-sm shadow-sm"
            placeholder="Product's Price"
          />
        </div>
      </div>

      <div>
        <label htmlFor="imageUpload" className='text-black font-bold'>Image:</label>
        <div className="relative">
          <input
            type="file"
            id='imageUpload'
            name='image'
            className="w-full rounded-lg border border-gray-900 text-red-700  p-3 pe-12 text-sm shadow-sm"
            placeholder="Enter age"
          />
        </div>
      </div>
      </div>

<div className='flex space-x-4'>
      <div>
      <label htmlFor="text" className='text-black font-bold'>Category:</label>
        <div className="relative">
          <input
            type="text"
            id='category'
            name='category'
            className="w-full rounded-lg border border-gray-900  p-4 pe-12 text-sm shadow-sm"
            placeholder="Product's category"
          />
        </div>
    </div>

      

      <div>
      <label htmlFor="text" className='text-black font-bold'>User:</label>
        <div className="relative">
          <input
            type="text"
            id='user'
            name='user'
            className="w-full rounded-lg border border-gray-900 p-4 pe-12 text-sm shadow-sm"
            placeholder="User"
          />
        </div>
      </div>
      </div>

      <button
        type="submit"
        className="block w-full rounded-lg bg-rose-500 text-white px-5 py-3 text-lg font-medium "
      >
        Update
      </button>

     
    </form>
  </div>
</div>
</div>
</div>
    </>
  )
}

export default EditProduct