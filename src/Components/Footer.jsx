import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=' p-4 bg-gradient-to-b from-gray-50 to-pink-200 mt-[10rem] '>
        <div className=' flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-5 text-sm '>

            <div>
                <img src={assets.logo} className=' mb-5 w-32' alt="" />
                <p className=' w-full md:w-2/3 text-gray-600'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Beatae dolores tempore iure quaerat!
                </p>
            </div>

            <div>
                <p className=' text-xl font-medium mb-5'>Company</p>
                <ul className=' flex flex-col gap-1 text-gray-600'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About us</Link>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div className=''>
                <p className=' text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className=' flex flex-col gap-1 text-gray-600'>
                  <li> Phone No: +234-813-540-8230</li>  
                  <li>Email: webdev6190@gmail.com</li>  
                  <li>Github: webDev6190</li>  
                </ul>
            </div> 
        </div>
    
    <div className=' '>
                <hr className=' bg-white h-1 ' />
                <p className=' py-5 text-sm text-center'>&copy; 2024 @webdev6190.com <br className='justify-items-center' /> All Right Reserved.</p>
            </div>
    </div>
  )
}

export default Footer