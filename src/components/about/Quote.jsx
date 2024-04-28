import React from 'react'
import HighlightText from './HighlightText'

const Quote = () => {
  return (
    <div className=" text-xl md:text-4xl mx-auto py-5 pb-20 text-center font-light text-richblack-700">
        We are passionate about revolutionizing the way we learn. Our
        innovative platform <HighlightText text={"combines technology"} />,{" "}
        <span className="bg-gradient-to-b from-[#FF512F] to-[#F09819] text-transparent bg-clip-text ">
            {" "}
            expertise
        </span>
        , and community to create an
        <span className="bg-gradient-to-b from-[#E65C00] to-[#F9D423] text-transparent bg-clip-text ">
            {" "}
            unparalleled educational
        experience.
        </span> 
    </div>
  )
}

export default Quote