import React from 'react';

const Blog = ({ blog }) => {
   const { title, body, author, imgUrl } = blog;
   return (
      <div className='w-3/4 mx-auto'>
         <img className='h-64 w-full' src={imgUrl} alt="" />
         <div className='px-4 py-2 bg-gray-600 opacity-70 text-white font-blod'>
            <h1 className='text-4xl font-bold'>{title}</h1>
            <p className='text-2xl'><small>{body}</small></p>
         </div>
      </div>
   );
};

export default Blog;