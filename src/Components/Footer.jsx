import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { useState } from 'react';
const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='max-w-screen-xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-white'>
        <div className='text-center md:text-left'>
          <h1 className='text-3xl font-bold'>WsCube Tech.</h1>
          <p className='py-4'>Web Soul Tech specializes in custom software, web, and mobile app development, along with cloud solutions and ongoing support.</p>
          <div className='flex justify-between  md:w-[75%] mx-auto md:mx-0 my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
          </div>
        </div>
        <div className='flex flex-wrap justify-between md:col-span-2'>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <h6 className='font-bold'>Solutions</h6>
            <ul>
              <li className='py-2'>Analytics</li>
              <li className='py-2'>Marketing</li>
              <li className='py-2'>Commerce</li>
              <li className='py-2'>Insights</li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <h6 className='font-bold'>Support</h6>
            <ul>
              <li className='py-2'>Pricing</li>
              <li className='py-2'>Documentation</li>
              <li className='py-2'>Guides</li>
              <li className='py-2'>API Status</li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <h6 className='font-bold'>Company</h6>
            <ul>
              <li className='py-2'>About</li>
              <li className='py-2'>Blog</li>
              <li className='py-2'>Jobs</li>
              <li className='py-2'>Press</li>
              <li className='py-2'>Careers</li>
            </ul>
          </div>
          <div className='w-full md:w-1/2 lg:w-1/4'>
            <h6 className='font-bold'>Legal</h6>
            <ul>
              <li className='py-2'>Claim</li>
              <li className='py-2'>Policy</li>
              <li className='py-2'>Terms</li>
            </ul>
          </div>
        </div>
      </div>
      created by dhruv parmar
    </div>
  );
};

export default Footer;
