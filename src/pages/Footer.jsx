import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import datag from "../data.json";
import image from "../assets/img.jpeg";
const Footr = () => {
  return (
    <div className="flex mx-28 my-24 bg-slate-100 px-10 py-20">
      <div className="mx-20">
        <KeyboardArrowLeftIcon />
      </div>
      <div className="justify items-center text-center mx-10">
        <p className="text-2xl font-bold"> {datag.testimonial.text}</p>
        <div className="flex mx-40 my-8">
          <div className="justify items-center mx-2">
            <img src={image} alt="" className=" rounded-full w-10 h-10" />
          </div>
          <div className="mx-8">
            <p>{datag.testimonial.reviewer_name}</p>
            <p>{datag.testimonial.reviewer_designation}</p>
          </div>
        </div>
      </div>
      <div className="mx-20">
        <ChevronRightIcon />
      </div>
    </div>
  );
};

export default Footr;
