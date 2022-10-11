import React from 'react';
import Blog from './Blog';

const Blogs = () => {
   const blogPosts = [
      {
         title: "What is purpose of React Router?",
         body: `React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
         Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.`,
         author: "Nishant Singh ",
         imgUrl:
            "https://res.cloudinary.com/practicaldev/image/fetch/s--SINhWgFo--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/8r0ymglytx7xi3uzme48.png",
      },
      {
         title: "How does context API Work?",
         body: `The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.`,
         author: "Suresh Kr",
         imgUrl:
            "https://www.loginradius.com/blog/static/caf00c33b55e22e63d32a724e11eea7d/701ee/react.jpg",
      },
      {
         title: "What is useRef",
         body: `The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.`,
         author: "Monu Kr",
         imgUrl:
            "https://miro.medium.com/max/1200/1*rp5PJMP1LtmLiwVQpReFuQ.jpeg",
      },
   ];
   return (
      <div >
         <div className='grid grid-cols-1 lg:grid-cols-1 gap-5 my-10'>
            {
               blogPosts.map((blog, index) => (
                  <Blog key={index} blog={blog} />
               ))
            }
         </div>
      </div>
   );
};

export default Blogs;