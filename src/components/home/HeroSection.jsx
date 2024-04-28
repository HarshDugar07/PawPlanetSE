import React from 'react'
import heroImg from "../../assets/hero2.jpg"
import Button from './Button'

const HeroSection = () => {
  return (
    <div className='flex justify-between w-full mx-auto'>

      <div className='w-[35rem] flex flex-col items-start'>
         
         <p className='text-[4rem] text-left'
         >Revolutionize Your Pet's Care</p>
         
         <p className='text-left'
         >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa doloremque quod suscipit, quia blanditiis dolore culpa praesentium magni fugit eos.</p>
         
         <div className='mt-[2rem]'>
           <Button children={"Explore Our Services"} active={1} linkto="/" className="mt-[10rem]" />
         </div>
         

         <div className='flex flex-row mt-[2rem]'>
            <div className='mr-[2rem]'> <Button active={1} children={"Get Started"} className="mr-[2rem]"/></div>
            
            <div><Button active={0} children={"Join Now"} className="ml-[2rem] mx-4"/></div>
         </div>
      </div>

      <div className='bg-yellow w-[50rem] '>
         <img src={heroImg} className='shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] w-[35rem] ml-[8rem]'/>
      </div>
    </div>
  )
}

export default HeroSection