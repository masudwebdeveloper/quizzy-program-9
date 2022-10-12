import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Topics = () => {
   const [score, setScore] = useState(0);
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const topics = useLoaderData();
   const { name, questions } = topics.data;
   return (
      <div>
         {/* header */}
         <h1 className='text-4xl font-bold mb-5'>Quiz of {name}</h1>
         {/* your score */}
         {
            questions.map(singlequestion => <Quiz
               key={singlequestion.id}
               singlequestion={singlequestion}
               score={score}
               setScore={setScore}
            />)
         }
         <button className='text-3xl underline mb-5 bg-green-500 hover:bg-green-700 duration-500 p-3 rounded-md'>
            <Link to='/home'>
               Back to Topics
            </Link>
         </button>
      </div>
   );
};

export default Topics;