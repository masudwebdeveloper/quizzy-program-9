import Option from './Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify'
import { useState } from 'react';


const Quiz = ({ singlequestion, score, setScore }) => {
   // const [demo, setDemo] = useState([]);
   const { question, options, correctAnswer } = singlequestion;
   const handlequiz = (quiz) => {
      const correctExist = options.find(existQuiz => existQuiz === quiz);
      if (correctAnswer === correctExist) {
         toast.success('your answer is right!', { autoClose: 500 })
         
      } else {
         toast.error('your answer is wrong!', { autoClose: 500 })
      }
   }

   const handleEye = () => {
      toast.success(correctAnswer, { autoClose: 5000 })

   }
   return (
      <div>
         {/* header */}

         <div className='bg-gray-100 m-4 w-full lg:w-1/2 mx-auto p-4 rounded-[30px]'>
            <h1 className='text-xl mb-3 text-center'>
            
               {question.slice(3,-4)}
            </h1>
            {/* <div dangerouslySetInnerHTML={{_html:question}}></div> */}
            <EyeIcon onClick={handleEye} className="h-6 w-6 text-blue-500" />
            <div className='gap-4 shadow-lg pb-4 rounded-[25px]' >
               {
                  options.map((option, index) => <Option key={index} option={option} handlequiz={handlequiz} />)
               }
            </div>
         </div>
      </div>
   );
};

export default Quiz;