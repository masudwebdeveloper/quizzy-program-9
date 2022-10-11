import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import homeImg from '../assets/quiz-home-page.jpg'
import Topic from './Topic';

const Home = () => {
   const topics = useLoaderData();
   const { data } = topics;
   return (
      <div>
         <img className='h-[700px] w-full' src={homeImg} alt="" />
         <div className='bg-gray-200 py-10 my-10'>
            <div className='w-3/4 mx-auto'>
               <h1 className='text-2xl font-medium mb-5'>Case Study: Programming Hero Community Schools Quizzy program Plan Supports Blended Learning, Early Literacy, and High Engagement</h1>
               <p className='mb-5'>“When funding became available, we were ready,” Quigley said. “With some tools, the free version is good enough, but we really felt like the additional features on the Quizizz District Plan would enhance instruction in the ways that we wanted. It gave teachers more resources to make learning effective, and the tools felt more attainable for students.</p>
               <button className='hover:bg-green-700 duration-500 text-2xl bg-green-500 text-white rounded-md px-5 py-3 font-bold'>
                  <Link to='/about'>
                  Learn More
                  </Link>
               </button>
            </div>
         </div>
         <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mx-10'>
            {
               data.map(topic => <Topic key={topic.id} topic={topic} />)
            }
         </div>
      </div>
   )
};

export default Home;