import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] select-none'>
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D"
          className='w-full h-full object-cover'
          alt="" />
          <div className='max-w-[1140px] m-auto'>
            <div className='absolute top-[50%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4 font-serif'>
                <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
                <h2 className='text-4xl py-4 italic '>With Weekaway</h2>
          <p>“Dance with the waves, move with the sea, let the rhythm of the water set your soul free.”</p>
            </div>
          </div>
    </div>
  )
}
export default Hero