import React from 'react';
import { Link } from 'react-router-dom';

const Option = ({ option, handlequiz }) => {
   return (
      <div className='text-xl rounded-md bg-slate-500 w-[70%] mx-auto py-3 px-1 text-white font-bold'>
         <button onClick={()=>handlequiz(option)}>
            <input className='mr-5' type="checkbox" />
            <span>{option}</span>
         </button>
      </div>
   );
};

export default Option;