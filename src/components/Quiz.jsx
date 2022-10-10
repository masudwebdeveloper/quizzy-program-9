import React from 'react';
import Option from './Option';

const Quiz = ({ singlequestion }) => {
   const { question, options } = singlequestion;
   const handlequiz = (quiz) => {
      if (singlequestion.correctAnswer === quiz) {
         alert('succes')
         return;

      } else {
         alert('wrong');
         return;
      }
   }
   return (
      <div className='bg-gray-100 m-4 w-1/2 mx-auto p-4 rounded-lg'>

         <h1 className='text-xl mb-3'>{question}</h1>
         
         <div className='grid grid-cols-2 gap-2 shadow-lg pb-4 rounded-lg' >
            {
               options.map((option , index)=> <Option key={index} option={option} handlequiz={handlequiz} />)
            }
         </div>
      </div>
   );
};

export default Quiz;