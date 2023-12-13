import React from 'react'

const Booking = () => {
  return (
    <>
      <div className='max-w-[1140px] m-auto w-full p-4' id='deals'>
        <form className='lg:flex lg:justify-between w-full items-center'>
          <div className='flex flex-col my-2 py-2'>
            <label htmlFor="destination" className='select-none'>Destination</label>
            <select name="" id="destination" className='border-2 p-2 mt-2 lg:w-[300px]  rounded-md cursor-pointer'>
              <option>Grande Antigus</option>
              <option>Key west</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>

          <div className='flex w-full'>
            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label>Check-In </label>
              <input className='border-2 p-2 ml-2 rounded-md' type="date" />
            </div>

            <div className='flex flex-col w-full lg:max-w-[250px] my-2 p-2'>
              <label>Check-Out </label>
              <input className='border-2 p-2 ml-2 rounded-md' type="date" />
            </div>
          </div>

          <div className='flex flex-col my-2 p-2 w-full'>
            <label>Search</label>
            <button>Rate & Availabilties</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default Booking