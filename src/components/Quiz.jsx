import React, { useState } from 'react';
import Option from './Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import {toast} from 'react-toastify'




const Quiz = ({ singlequestion }) => {
   const { question, options } = singlequestion;
   console.log(singlequestion);
   const handlequiz = (quiz) => {
      if (singlequestion.correctAnswer === quiz) {
         alert('Answare is Correct')
         return;
      } else {
         alert('wrong');
         return;
      }
   }
   const handleEye = () => {
      
   }
   return (
      <div className='bg-gray-100 m-4 w-1/2 mx-auto p-4 rounded-lg'>

         <h1 className='text-xl mb-3 text-center'>Quiz: {question}</h1>
         
         <EyeIcon onClick={() => handleEye} className="h-6 w-6 text-blue-500" />
         <div className='grid grid-cols-2 gap-2 shadow-lg pb-4 rounded-lg' >
            {
               options.map((option , index)=> <Option key={index} option={option} handlequiz={handlequiz} />)
            }
         </div>
      </div>
   );
};

export default Quiz;