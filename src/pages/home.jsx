import React from "react";
import datag from "../data.json";

const home = () => {
  return (
    <>
      <div className="bg-center flex items-center bg-[url('/src/assets/nityanad.jpeg')] h-screen/60 bg-cover relative">
        <div className="bg-black opacity-50 absolute w-full h-full" />
        <div className=" text-white font-bold text-left justify-content absolute mx-10 mt-28">
          <p className=" text-lg">{datag.instructor.name}</p>
          <p className="text-3xl w-2/3 my-6">{datag.course.title}</p>
        </div>
      </div>
    </>
  );
};

export default home;
