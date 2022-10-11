import React from 'react';

const Option = ({ option, handlequiz }) => {
   return (
      <div className='my-5 text-xl rounded-lg bg-slate-500 w-full lg:w-[70%] mx-auto py-3 px-1 text-white font-bold'>
         <label >
            <input onClick={() => handlequiz(option)} className='mr-5' type="radio" name="male" id="" />
            <span >{option}</span>
         </label>
      </div>
   );
};

export default Option;