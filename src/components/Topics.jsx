import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Topics = () => {
   const topics = useLoaderData();
   const { name, questions } = topics.data;
   return (
      <div>
         <h1 className='text-4xl font-bold'>{name}</h1>
         {
            questions.map(singlequestion => <Quiz
               key={singlequestion.id}
               singlequestion={singlequestion}
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