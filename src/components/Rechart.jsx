import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Rechart = () => {
   const [quiz, setQuiz] = useState([]);
   console.log(quiz);
   useEffect(() => {
      axios.get('https://openapi.programming-hero.com/api/quiz')
         .then(data => {
            const quizLoaded = data.data.data;
            const quies = quizLoaded.map(quiz => {
               const singleQuiz = {
                  name: quiz.name,
                  quizNumber: quiz.total
               }
               return singleQuiz;
            })
            setQuiz(quies);
         })
   }, [])
   return (
      <div className='w-full lg:w-3/12 mx-auto text-center'>
         <ResponsiveContainer width="100%" height={400}>
            <BarChart data={quiz}>
               <Bar dataKey="quizNumber" fill="#8884d8" />
               <XAxis dataKey="name" />
               <YAxis />
               <Legend />
               <Tooltip />
               <CartesianGrid />
            </BarChart>
         </ResponsiveContainer>
      </div>
   )
};

export default Rechart;