import React from 'react'
import single from './assets/single.png'
import double from './assets/double.png'
import triple from './assets/triple.png'
export const Plans = () => {
  return (
    <div className='py-[10rem] px-2 w-full bg-white'>
        <div className='max-w-[1240px] md:grid grid-cols-3 mx-auto gap-8'>
            <div className='shadow-xl h-[500px] my-2 hover:scale-105 duration-500 rounded-lg md:px-3 md:py-3'>
              <img src={single} alt='' className='w-20 mx-auto mt-[-3] bg-white'></img>
              <h2 className='text-3xl font-bold text-center py-5'>Web Development</h2>
              <p className='text-center text-3xl font-bold text-center'>149₹</p>
              <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'> Initial Consultation and Requirement Gathering</p>
<p className='py-2 border-b mx-8'> Planning and Design</p>
<p className='py-2 border-b mx-8'> Development and Coding</p>
<p className='py-2 border-b mx-8'> Testing, Deployment, and Launch</p>
<button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 transition hover:bg-[#0bd495]  duration-300 ease-in-out '>Start Trial</button>

              </div>

            </div>
            <div className='shadow-xl h-[500px] my-2 hover:scale-105 bg-gray-100 text-center duration-500 rounded-lg md:px-3 md:py-3'>
            <img src={double} alt='' className='w-20 mx-auto mt-3 bg-transparent'></img>
            <h2 className='text-3xl font-bold text-center py-5'>Digital Marketing</h2>
            <p className='text-center text-3xl font-bold text-center'>249₹</p>
            <div className='text-center font-medium'>
    <p className='py-2 border-b mx-8 mt-8'>1. Market Research and Analysis</p>
    <p className='py-2 border-b mx-8'>2. SEO and Content Strategy</p>
    <p className='py-2 border-b mx-8'>3. Social Media Campaigns</p>
    <p className='py-2 border-b mx-8'>4. Performance Tracking and Optimization</p>
</div>
<button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 transition hover:bg-[#121313]  duration-300 ease-in-out '>Start Trial</button>


            </div>
            <div className='shadow-xl h-[500px]  my-2 hover:scale-105 duration-500 rounded-lg text-center md:px-3 md:py-3'>
            <img src={triple} alt='' className='w-20 mx-auto mt-3 bg-transparent'></img>
            <h2 className='text-3xl font-bold text-center py-5'>App Development</h2>
            <p className='text-center text-3xl font-bold text-center'>149₹</p>
    <div className='text-center font-medium'>
    <p className='py-2 border-b mx-8 mt-8'>1. Requirements Gathering and Analysis</p>
    <p className='py-2 border-b mx-8'>2. UI/UX Design</p>
    <p className='py-2 border-b mx-8'>3. Development and Coding</p>
    <p className='py-2 border-b mx-8'>4. Testing and Quality Assurance</p>

    </div>
    <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 transition hover:bg-[#0bd495]  duration-300 ease-in-out '>Start Trial</button>


            </div>
        </div>
    </div>
  )
}
export default Plans