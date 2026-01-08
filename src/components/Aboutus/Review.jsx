import React from 'react'
import Star from './../../assets/star.png'

function Review({id, name, rating, text, imageUrl}) {
  return (
    <div className='flex'>
    <div className="bg-white p-6 rounded-xl shadow mx-5 md:w-140 w-90 flex m-3">
      <img src={imageUrl} alt="" className='md:w-35 w-30'/>
      <div className='ml-4'>
      <h1 className='font-bold'>{name}</h1>
      <div className="flex my-1">
{Array.from({ length: rating }).map((_, i) => (
<img src={Star} alt="" key={i} className='w-5'/>
))}
</div>
<p className='md:text-lg text-sm'>{text}</p>
      </div>
    </div>
    </div>
  )
}

export default Review