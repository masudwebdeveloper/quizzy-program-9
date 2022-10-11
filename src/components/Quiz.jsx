import Option from './Option';
import { EyeIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify'


const Quiz = ({ singlequestion,score, setScore }) => {
   const { question, options, correctAnswer } = singlequestion;
   const handlequiz = (quiz) => {
      const correctExist = options.find(existQuiz => existQuiz === quiz);
      if (correctAnswer === correctExist) {
         toast.success('your answer is right!', { autoClose: 500 })
         setScore(score + 1);
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

         <div className='bg-gray-100 m-4 w-1/2 mx-auto p-4 rounded-[30px]'>
            <h1 className='text-xl mb-3 text-center'>Quiz:
               {question}
            </h1>
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