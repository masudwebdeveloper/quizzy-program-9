import React from 'react';
import { Link, useRouteError } from 'react-router-dom';


const ErrorPage = () => {
   const error = useRouteError();
   return (
      <div>
         <h1 className='text-5xl font-bold text-gray-500'>Oops-404!</h1>
         <p>Sorry, an unexpected error has occurred.</p>
         <p>
            <i className='text-red-400 text-2xl'>{ error.statusText || error.message}</i>
         </p>
         <button className='text-2xl'>
            <Link to="/home">

               Back To Home
            </Link>
        </button>

      </div>
   );
};

export default ErrorPage;