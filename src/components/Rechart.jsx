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
      <div className='w-1/2 mx-auto'>
         <BarChart width={500} height={400} data={quiz}>
            <Bar dataKey="quizNumber" fill="#8884d8" />
            <XAxis dataKey="name" />
            <YAxis />
            <Legend />
            <Tooltip />
            <CartesianGrid/>
         </BarChart>
      </div>
   )
};

export default Rechart;