import React from "react";
import p1 from "../../assets/ress(2)/a.avif"
import p2 from "../../assets/ress(2)/b.avif"
import p3 from "../../assets/ress(2)/c.png"
import p4 from "../../assets/ress(2)/d.avif"

const Stats = [
  { count: "24hr Delivery", label: "In 24 Cities", im: p1},
  { count: "1,50,000+", label: "Happy pet parents", im: p2 },
  { count: "Complimentary Vet", label: "For every new member", im: p3 },
  { count: "Pet Pharmacy", label: "Exclusive", im: p4 },
];

const StatsComponenet = () => {
  return (
    <div className="bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-row justify-center items-center mr-[-10px]">

                <div>
                  <img src={data.im} className="w-[6rem] rounded-full" />
                </div>

                <div className="flex flex-col py-10" key={index}>
                  <h1 className="text-[20px] font-bold  text-caribbeangreen-800">
                    {data.count}
                  </h1>
                  <h2 className="font-semibold text-[14px]  text-caribbeangreen-300">
                    {data.label}
                  </h2>
                </div>


              </div>

              
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;