import React from "react";

const Stats = [
  { count: "25K+", label: "Active Pet Owners" },
  { count: "2K+", label: "Animals Saved" },
  { count: "800+", label: "Co-Workers" },
  { count: "50+", label: "Awards" },
];

const StatsComponenet = () => {
  return (
    <div className="bg-white shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
      {/* Stats */}
      <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-white mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-4 text-center">
          {Stats.map((data, index) => {
            return (
              <div className="flex flex-col py-10" key={index}>
                <h1 className="text-[40px] font-bold text-richblack-900">
                  {data.count}
                </h1>
                <h2 className="font-semibold text-[20px] text-richblack-600">
                  {data.label}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsComponenet;