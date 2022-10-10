import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Root from "../components/Root";
import Topics from "../components/Topics";

export const router = createBrowserRouter([{
   path: '/',
   element: <Root />,
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
      {path: '*', element: <Home/>}
   ]
}])