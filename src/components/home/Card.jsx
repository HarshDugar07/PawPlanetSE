import React from "react";
import refImage from "../../assets/hero.jpeg"
import Button from "./Button";

const Card = ({name, specialization, brief}) => {
  return (
    <div
      className="lg:w-[18rem] pb-[2rem] flex flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mx-auto"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      
    >
      <img src={refImage} alt="Doctor Image" />

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
         {name}
      </h5>
      <p className="font-normal font-lora text-gray-500 dark:text-gray-400">
         {specialization}
      </p>
      <p className="font-small text-gray-700 dark:text-gray-400">
         {brief}
      </p>

      <Button className='mx-auto'>
        Book Appointment
      </Button>
    </div>
  );
}

export default Card;

