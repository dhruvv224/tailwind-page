import React from 'react'
import { ReactTyped } from "react-typed";

export const Banner = () => {
  return (
    <div className='bg-[#2699fb] py-[100px] text-center'>
        <div className='max-w-[1240px]  my-[100px] mx-auto text-center font-bold'>
            <div className='text-[45px]'>
                <h4 className=''>Learn With Us</h4>
            </div>
            <h2 className='text-white text-[75px]'>Grow With Us</h2>
            <div className='text-white text-[50px]'>
            Learn  
                <ReactTyped className='pl-3' strings={['Web Development', 'Digital Marketing', 'Ethical Hacking', 'Front-End Courses']} typeSpeed={100} backSpeed={60} loop/>

            </div>
            <button className='bg-black p-4 text-white rounded font-bold-none'>Get Started</button>

        </div>

    </div>
  )
}

export default Banner
