import React, { useState } from 'react'
import { BsChatSquareDots } from 'react-icons/bs'
import { FaFacebookF, FaBars, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa'


const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav);
    }

    return (
        <>
            <div className='w-full flex justify-between items-center absolute z-10 text-white  bg-gray-700/80 '>
                <ul className='hidden sm:flex px-4'>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="#gallery">Gallery</a>
                    </li>
                    <li>
                        <a href="#deals">Deals</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
                <div className='flex justify-between '>
                    <FaFacebookF className='mx-4' />
                    <FaTwitter className='mx-4' />
                    <FaGooglePlusG className='mx-4' />
                    <FaInstagram className='mx-4' />
                </div>

                {/* hamburgerIcon */}
                <div onClick={handleNav} className='sm:hidden z-10 p-3'>
                    <FaBars size={25} className='mr-4 cursor-pointer' />
                </div>

                {/* Mobile Menu  */}

                <div onClick={handleNav} className={nav ? ' overflow-y-hidden md:hidden ease-in duration-300  absolute text-gray-300 left-0 top-0 h-screen bg-black/90 px-4 py-7 flex-col w-full '
                    : 'absolute top-0 h-screen left-[-100] hidden ease-in duration-500'}>
                    <ul className='text-center w-full h-full pt-12'>
                        <li className='text-xl text-white py-8'>
                            <a href="/">Home</a>
                        </li>
                        <li className='text-xl text-white py-8'>
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li className='text-xl text-white py-8'>
                            <a href="#deals">Deals</a>
                        </li>
                        <li className='text-xl text-white py-8'>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>


            </div>
        </>
    )
}

export default NavBar