import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black text-white md:p-20 p-10'>
            <ul className='md:flex md:justify-around pl-5'>
                <div>
                    <li><a className='hover:text-yellow-800 underline' href="#">Contact us</a></li>
                    <li><a className='hover:text-yellow-800 underline' href="#">FAQs</a></li>
                    <li><a className='hover:text-yellow-800 underline' href="#">ٰItems</a></li>
                    <li><a className='hover:text-yellow-800 underline' href="#">Cancelling</a></li>
                    <li><a className='hover:text-yellow-800 underline' href="#">an Order</a></li>
                    <li><a className='hover:text-yellow-800 underline' href="#">Terms and Services</a></li>
                    <li><a className='hover:text-yellow-800 underline' href="#">Privacy and Policy</a></li>
                </div>
                <div>
                    <li><a className='hover:text-yellow-800 underline' href="#">About us</a></li>
                    <li><a className='hover:text-yellow-800 underline' href="#">Choice</a></li>
                    <li><a className='hover:text-yellow-800 underline' href="#">Singn/register</a></li>
                    <li><a className='hover:text-yellow-800 underline' href="#">My card</a></li>
                    <li><a className='hover:text-yellow-800 underline' href="#">My Whishlist</a></li>
                </div>
            </ul>
        </div>
    )
}

export default Footer