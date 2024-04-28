import React from 'react'
import Button from './Button';
import coll1 from "../../assets/coll1.jpeg";  
import coll2 from "../../assets/coll2.jpeg";  
import coll3 from "../../assets/coll3.jpeg";  

const LearningLanguageSection = () => {
  return (
    <div>
        <div className="text-4xl font-semibold text-center my-10">
            
            <p className='text-[4rem] font-light mt-[4rem] mb-[3rem]'>One Stop Solution To All Your Troubles </p>
            <div className="text-center text-richblack-700 font-medium lg:w-[75%] mx-auto leading-6 text-base mt-3">
              Using spin making learning multiple languages easy. with 20+
              languages realistic voice-over, progress tracking, custom schedule
              and more.
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center mt-8 lg:mt-0">
              <img
                src={coll1}
                alt=""
                className="object-contain  lg:-mr-32 w-[20rem] ml-[-10rem]"
              />
              <img
                src={coll2}
                alt=""
                className="object-contain lg:-mb-10 lg:-mt-0 -mt-12"
              />
              <img
                src={coll3}
                alt=""
                className="object-contain  lg:-ml-36 lg:-mt-5 -mt-16"
              />
            </div>
          </div>

          <div className="w-fit mx-auto lg:mb-20 mb-8 -mt-5">
            <Button active={true} linkto={"/signup"}>
              <div className="">Learn More</div>
            </Button>
          </div>
    </div>
  )
}

export default LearningLanguageSection