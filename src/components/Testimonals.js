import React, { useState } from 'react';
import Card from "./Card";
import { RiArrowLeftDoubleFill, RiArrowRightDoubleLine } from "react-icons/ri";

const Testimonals = (props) => {
  const [index, setIndex] = useState(0);
  let reviews = props.reviews;
  function leftHandler()
  {
    if(index-1<0)
      {
        setIndex(reviews.length-1);
      }
      else
      {
        setIndex(index-1);
      }
  }
  function rightHandler()
  {
    if(index+1>=reviews.length)
      {
        setIndex(0);
      }
      else{
        setIndex(index+1);
      }
  }
   function surpriseHandler()
   {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
   }
  return (
    <div className=' bg-slate-100 flex flex-col justify-center items-center mt-6'>
     <Card review ={reviews[index]} />
     <div className="flex justify-center gap-3">
        <button className="text-violet-500 hover:text-violet-800 " onClick={leftHandler}>
          <RiArrowLeftDoubleFill />
        </button>
        <button className="text-violet-500  hover:text-violet-800" onClick={rightHandler}>
          <RiArrowRightDoubleLine />
        </button>
      </div>
        <button className="h-[30px] w-[150px] bg-violet-500 text-white font-bold mt-3 rounded-md hover:bg-violet-900 mb-2" onClick={surpriseHandler}>Surprise Me</button>
    </div>
  )
}

export default Testimonals;
