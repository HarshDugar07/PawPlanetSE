import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <a
        href="/"
        className="text-center text-[14px] px-6 py-3 rounded-md font-bold bg-yellow-50 text-black hover:scale-95 transition-all duration-200"
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
