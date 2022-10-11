import React from 'react';

const Option = ({ option, handlequiz }) => {
   return (
      <div onClick={()=>handlequiz(option)} className='my-5 text-xl rounded-lg bg-slate-500 w-[70%] mx-auto py-3 px-1 text-white font-bold'>
         <button >
            <input className='mr-5 w-[20px]' type="checkbox" />
            <span >{option}</span>
         </button>
      </div>
   );
};

export default Option;