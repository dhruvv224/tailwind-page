import React from 'react'

export const Newsletter = () => {
  return (
   <div className='bg-[#2699fb] p-4'>
    <div className='md:flex mx-auto max-w-[1240px] justify-between py-[50px]'>
        <div className='m-2'>
            <h1 className='text-[25px] md:text-[40px] text-white font-bold'>Want to learn latest I.T Skills </h1>
            <span className='text-white text-[20px]'>Sign up for our newsletter to get latest updates</span>
        </div>
        <div className='m-2'>
            <input type='text' className='p-3 mb-3 mr-2 text-slate-600 rounded' placeholder='Enter Email' />
            <button className='bg-black p-3 text-white rounded'>Notify Me</button>
            <br/>
            <p className='text-white text-[17px]'>
                We care about your the protection of your data Read our <br/><a href='/' className='text-black text-[17px]'>Privacy policy</a> 
            </p>

        </div>
    </div>
   </div>
  )
}
export default Newsletter