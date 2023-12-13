import React from 'react'
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai';
import { BsChatSquareDots } from 'react-icons/bs'

const TopBar = () => {
    return (
        <>
            <div className='flex justify-between items-center px-4 py-2'>
                <div className='flex items-center'>
                    <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2' />
                    <h1 className='uppercase font-bold text-xl text-gray-700'>Weekaway</h1>
                </div>
                <div className='flex gap-3'>
                    <div className='gap-1 hidden md:flex items-center px-6'>
                        <AiOutlineClockCircle size={20} className='text-[var(--primary-dark)]'  />
                        <p className='text-sm text-gary-700'>9AM - 5AM</p>
                    </div>
                    <div className='gap-1 hidden md:flex items-center px-6'>
                        <AiFillPhone size={20} className='text-[var(--primary-dark)]' />
                        <p className='text-sm text-gary-700'>+ 91-90879-3434</p>
                    </div>
                    <button>Get a Free Quote</button>
                </div>
            </div>
        </>
    )
}

export default TopBar