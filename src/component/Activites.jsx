import React from 'react'

const Activites = () => {
    return (
        <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
            <div className='relative md:max-w-sm p-4 grayscale transition-all  hover:grayscale-0 cursor-pointer duration-300'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resort</h3>
                <img className='w-full h-full object-cover relative border-4 rounded-md border-white shadow-lg' src="https://www.usnews.com/object/image/00000178-f4f5-d258-a5f9-fdf72e020000/lounge-area-restaurant.jpg?update-time=1678805230418&size=responsive640" />
            </div>
            <div className='md:max-w-sm relative p-4 grayscale  transition-all hover:grayscale-0 cursor-pointer duration-300 '>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resort</h3>
                <img className='w-full h-full object-cover relative border-4 rounded-md border-white shadow-lg' src="https://366e203a.rocketcdn.me/wp-content/uploads/2021/05/Soneva-Fushi.jpg" />
            </div>

            <div className='md:max-w-sm relative p-4 grayscale  transition-all hover:grayscale-0 cursor-pointer duration-300'>
                <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold'>Resort</h3>
                <img className='w-full h-full object-cover relative border-4 rounded-md border-white shadow-lg' src="https://cdn.pixabay.com/photo/2015/03/09/18/34/beach-666122_1280.jpg" />
            </div>
        </div>
    )
}

export default Activites