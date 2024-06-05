import React from 'react'
import { ReactTyped } from "react-typed";

export const Banner = () => {
  return (
    <div className='bg-[#2699fb] py-[100px] text-center'>
        <div className='max-w-[1240px]  my-[100px] mx-auto text-center'>
            <div className='text-[45px]'>
                <h4 className='font-bold'>Learn With Us</h4>
            </div>
            <h2 className='text-white text-[75px] font-bold'>Grow With Us</h2>
            <div className='text-white text-[50px] font-bold'>
            Learn  
                <ReactTyped className='pl-3' strings={['Web Development', 'Digital Marketing', 'Ethical Hacking', 'Front-End Courses']} typeSpeed={100} backSpeed={60} loop/>

            </div>
            <button className="bg-black text-white py-2 px-6 rounded-lg font-bold border-2 border-black hover:bg-black transition-all duration-300 ease-in-out">Get Started</button>

        </div>

    </div>
  )
}

export default Banner
