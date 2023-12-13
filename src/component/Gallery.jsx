import React from 'react'

const Gallery = () => {
  return (
      <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                  <img className='object-cover md:w-auto md:h-auto ' src="https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
            <div>
                  <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/3155726/pexels-photo-3155726.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-3155726.jpg&fm=jpg" alt="" />
            </div>
            <div>
                  <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div>
                  <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/7059632/pexels-photo-7059632.jpeg?cs=srgb&dl=pexels-jan-van-der-wolf-7059632.jpg&fm=jpg" alt="" />
            </div>
            <div>
                  <img className='w-full h-full object-cover' src="https://media.gettyimages.com/id/1198357641/photo/beachfront-bungalow-with-sea-view.jpg?s=612x612&w=gi&k=20&c=hJbfxouEgSJNCBt-mvEXRt54gJbWTYlc11zYD2qys_c=" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Gallery