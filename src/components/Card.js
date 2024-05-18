import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Card = (props) => {
  let review = props.review;
  return (
    <div className="h-[330px] bg-slate-100 w-[620px]  rounded-lg md:relative mt-3 hover:bordered ">
      <div className="h-[140px] w-[140px] absolute top-[-35px] left-[245px] ">
        <img 
        className="rounded-full"
        src={review.image} alt="no" />
      </div>
      <div>
        <p className="font-bold mt-[105px]">{review.Name}</p>
        <p className="text-xs uppercase text-violet-500">{review.job}</p>
      </div>
      <div className="text-violet-500 mt-3 px-[300px]">
        <ImQuotesLeft />
      </div>
      <div className="mt-2">
        <p className="text-gray-800 text-justify px-5">{review.Description}</p>
      </div>
      <div className="text-violet-500 mt-2 px-[300px]">
        <ImQuotesRight />
      </div>
    </div>
  );
};

export default Card;
