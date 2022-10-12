import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Rechart from "../components/Rechart";
import Root from "../components/Root";
import Topics from "../components/Topics";

export const router = createBrowserRouter([{
   path: '/',
   element: <Root />,
   errorElement: <ErrorPage/>,
   children: [
     {
         path: '/',
       element: <Home />
      },
      {
         path: 'home',
         loader: () => { 
            return fetch('https://openapi.programming-hero.com/api/quiz')
         },
         element: <Home/>
      },
      {
         path: '/topics/:topicId',
         loader: ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
         },
         element: <Topics/>
      },
      {
         path: 'blogs',
         element: <Blogs/>
      },
      {
         path: 'rechart',
         element: <Rechart/>
      },
      {
         path: 'about',
         element: <About/>
      },
      {
         path: 'contact',
         element: <Contact/>
      },
      
      {path: '*', element: <Home/>}
   ]
}])