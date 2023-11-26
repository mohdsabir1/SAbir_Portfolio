import React from 'react'
import { FaInstagram, FaFacebook, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom';
export const Footer = () => {
  return (
    <>
      <div className='text-center pt-5 my-5 items-end justify-center'>
        <h1 className='uppercase text-white text-4xl'>Find Me on</h1>
        <h2 className='text-white text-xl mt-3'>Feel free to <span className='text-textcolor'>Connect</span> with me</h2>

        <ul className='flex justify-center mt-3 '>
          <NavLink to="https://www.facebook.com/mouscoleen"><li className=' '>

            <FaFacebook className=' md:text-3xl text-2xl text-center ml-10 mr-10 text-white rounded-full  shadow-lg cursor-pointer' />

          </li></NavLink>

          <NavLink to="https://github.com/mohdsabir1"><li>


            <FaGithub className=' md:text-3xl text-2xl text-center mr-10 text-white rounded-full  shadow-lg cursor-pointer' />

          </li></NavLink>
          <NavLink to="https://www.linkedin.com/in/mohd-sabir-3b375323a/"><li>


            <FaLinkedin className='md:text-3xl text-2xl text-center mr-10 text-white rounded-full  shadow-lg cursor-pointer' />

          </li></NavLink>
          <NavLink to=""><li>


            <FaInstagram className=' md:text-3xl text-2xl text-center mr-10 text-white rounded-full  shadow-lg cursor-pointer' />

          </li></NavLink>
        </ul>
        
      </div>
      <div className='md:mb-5 mb-5'>
        <ul className='lg:flex lg:w-fit lg:mx-auto lg:mt-3  md:flex md:w-fit md:mx-auto   w-fit mx-auto '>

          <li className='lg:px-5 lg:flex lg:text-lg md:px-5 md:flex px-5 flex  font-semibold cursor-pointer'> <FaPhone className='lg:mt-1 lg:mr-2 md:mt-1 md:mr-2 mt-1 mr-2 text-textcolor' /> <span className='text-textcolor'>+919990114029</span></li>

          <li className='lg:px-5 lg:flex lg:text-lg md:px-5 md:flex 5 flex font-semibold text-textcolor cursor-pointer'> <FaEnvelope className='lg:mt-2 lg:mr-3 md:mt-1 md:mr-2 mt-1 mr-2' /> <span>moh.sabir.ali.54321@gmail.com</span></li>
        </ul>
      </div>
    </>
  )
}



