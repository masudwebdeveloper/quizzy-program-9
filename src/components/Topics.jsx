import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from './Quiz';

const Topics = () => {
   const topics = useLoaderData();
   const { name, questions } = topics.data;
   console.log();return (
      <div>
         <h1>{name}</h1>
         {
            questions.map(singlequestion => <Quiz key={singlequestion.id} singlequestion={ singlequestion} />)
         }
      </div>
   );
};

export default Topics;