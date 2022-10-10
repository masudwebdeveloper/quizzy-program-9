import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
   const {id, logo, name } = topic;
   return (
      <div className='bg-gray-400 px-10'>
         <img src={logo} alt="" />
         <div className='grid grid-cols-2 justify-between'>
            <div>{name}</div>
            <div>
               <Link
                  to={`/topics/${id}`}
                  className='px-3 py-2 bg-white rounded-lg'>
                  Start Quiz
               </Link>
            </div>

         </div>
      </div>
   );
};

export default Topic;