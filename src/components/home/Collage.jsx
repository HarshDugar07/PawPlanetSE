import React from 'react'
import collage1 from "../"
import collage2 from "../"
import collage3 from "../"
import Button from './Button'
const LearningLanguage = () => {
  return (
    <div className='mt-[130px]'>

        <div className='flex flex-col gap-5 '>

            <div className='text-4xl font-semibold text-center'>
                One Stop Solutions for all the problems with your furry friend
            </div>

            <div className='text-center text-richblack-600 mx-auto text-base mt-3 
            font-medium w-[70%]'>
                Using spin makes learning multiple languages easy. With 20+ languages,
                realistic voice-overs, progress tracking, and custom schedules and more
            </div>

            {/* 3 images */}
            <div className='flex flex-row items-center justify-centermt-5'>

                <img src={know_your_progress} 
                alt='Know Your Progress'
                className='object-contain -mr-32'/>


                <img src={compare_with_others} 
                alt='Know Your Progress'
                className='object-contain' />


                <img src={plan_your_lesson} 
                alt='Know Your Progress'
                className='object-contain -ml-36' />
            </div>

            <div className='w-fit mx-auto'>
                <Button active={true} linkto={"/signup"}>
                    Learn More
                </Button>
            </div>
        </div>

    </div>
  )
}

export default LearningLanguage
