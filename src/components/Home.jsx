import React from 'react';
import { useLoaderData } from 'react-router-dom';
import homeImg from '../assets/quiz-home-page.jpg'
import Topic from './Topic';

const Home = () => {
   const topics = useLoaderData();
   const { data } = topics;
   return (
      <div>
         <img className='h-[700px] w-full' src={homeImg} alt="" />
         <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            {
               data.map(topic => <Topic key={topic.id} topic={topic} />)
            }
         </div>
      </div>
   )
};

export default Home;