import Avatar from './../../assets/avatar-design.png'

function Principle({name, designation, message, qualification1, qualification2}) {
  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow md:mx-20 mx-6 md:flex">
                  <img src={Avatar} alt="" className='md:w-70 w-50 md:mr-6 ml-12' />
                  <div className='md:mx-15 mt-5'>
                  <h1 className='font-bold'>{name}</h1>
                  <h2 className='mb-4 '>{designation}</h2>
                  <p className='text-gray-600 '>{message}</p>
                  <div className='md:w-80 w-75 mt-5'>
                  <p className='bg-[#f2f2f2] px-4 py-0.5 rounded-xl mb-2 md:text-xl text-lg'>{qualification1}</p>
                  <p className='bg-[#f2f2f2] px-2 py-0.5 rounded-xl md:text-xl text-lg'>{qualification2}</p>
                  </div>
                  </div>
                </div>
    </div>
  )
}

export default Principle
