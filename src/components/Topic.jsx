import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
   const {id, logo, name } = topic;
   return (
      <div className='bg-gray-400 px-10 rounded-lg my-10 py-5'>
         <img className='rounded-full bg-gray-500 hover:scale-75 duration-500 ease-in-out' src={logo} alt="" />
         <div className='grid grid-cols-2 justify-between items-center my-5'>
            <div className='px-3 py-2 bg-white rounded-lg font-bold'>{name}</div>
            <div>
               <Link
                  to={`/topics/${id}`}
                  className='px-3 py-2 bg-white rounded-lg hover:bg-green-500 hover:text-white font-bold'>
                  Start Quiz
               </Link>
            </div>

         </div>
      </div>
   );
};

export default Topic;