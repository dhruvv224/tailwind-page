import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Typed } from 'react-typed';
export const Header = () => {
  const [Toggle, setToggle] = useState(false);

  return (
    <div>
      <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1240px] py-[10px] items-center flex justify-between mx-auto'>
          <div className='text-3xl ml-[90px] font-bold text-white'>WebSouL</div>
          {Toggle ? (
            <AiOutlineClose className='text-white text-3xl md:hidden block' onClick={() => setToggle(!Toggle)} />
          ) : (
            <AiOutlineMenu className='text-white text-3xl md:hidden block' onClick={() => setToggle(!Toggle)} />
          )}
          <ul className='hidden md:flex text-white gap-10 text-xl'>
            <li>Home</li>
            <li>Company</li>
            <li>About</li>
            <li>Contact Us</li>
          </ul>
          <ul className={`duration-300 md:hidden w-full h-screen text-white fixed bg-black top-[88px] ${Toggle ? 'right-0' : 'right-[100%]'} flex flex-col items-center justify-center`}>
            <li className='text-2xl py-4'>Home</li>
            <li className='text-2xl py-4'>Company</li>
            <li className='text-2xl py-4'>About</li>
            <li className='text-2xl py-4'>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
