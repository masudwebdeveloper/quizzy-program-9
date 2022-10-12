import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
   return (
      <div >
         {/* header */}
         <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col max-w-full mx-auto overflow-hidden rounded">
               <img src="https://media-exp1.licdn.com/dms/image/C5616AQGrM62Zf-7Q7w/profile-displaybackgroundimage-shrink_350_1400/0/1664084348545?e=1671062400&v=beta&t=Y7ZVpGP3PqKvUxHo_ExFF9IVMF0zCMcVsRDP9TMnzqI" alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
               <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 lg:rounded-md dark:bg-gray-900">
                  <div className="space-y-2">
                     <Link rel="noopener noreferrer" to="/" className="inline-block text-2xl font-semibold sm:text-3xl">Do Somthing today that your future self will thank you for</Link>
                     <p className="text-xs dark:text-gray-400">By
                        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/mrmasudrana/" className="text-xs hover:underline"> Masud Rana</a>
                     </p>
                  </div>
                  <div className="dark:text-gray-100">
                     <p>I will never give up...</p>
                  </div>
               </div>
            </div>
         </div>

         <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-x-1'>
            {/* profile */}
            <div className='col-span-1 dark:bg-gray-800'>
               <div className="max-w-md p-8 sm:flex sm:space-x-6 dark:bg-gray-900 dark:text-gray-100">
                  <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                     <img src="https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-1/240972713_2898430330487371_1139205994692314943_n.jpg?stp=dst-jpg_p240x240&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeEISvAiMUmDhOLO_ZTYqdmo3hDpPS20edreEOk9LbR52h2YarCHAlTKsUC0EzakkhGr-bXf2tUfxd61RI8OKWgw&_nc_ohc=WZSwp3RfOzYAX-ehKFF&_nc_ht=scontent.fdac11-1.fna&oh=00_AT94fs92wOKE8zqoFlWd9f3Fna3fTHJAAlXYKqZAAqxVMA&oe=634A70B1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                  </div>
                  <div className="flex flex-col space-y-4">
                     <div>
                        <h2 className="text-2xl font-semibold">Masud Rana</h2>
                        <span className="text-sm dark:text-gray-400">Jr. Web Developer</span>
                     </div>
                     <div className="space-y-1">
                        <span className="flex items-center space-x-2">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
                              <path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
                           </svg>
                           <span className="dark:text-gray-400">abdullainfo30@gmail.com</span>
                        </span>
                        <span className="flex items-center space-x-2">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Phonenumber" className="w-4 h-4">
                              <path fill="currentColor" d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"></path>
                           </svg>
                           <span className="dark:text-gray-400">+880 1796 682951</span>
                        </span>
                     </div>
                  </div>
               </div>
               <div className='text-white text-left dark:bg-gray-900 w-[90%] mt-10 py-5 pl-5'>
                  <h3 className="mb-3 text-lg font-bold md:text-xl">Dream</h3>
                  <ul className="space-y-4">
                     <li className="space-y-1">
                        <div className="flex items-center space-x-2">
                           <h4 className="font-medium">Full stack Developer &</h4>
                           <h4 className="font-medium">Entrepreneur</h4>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
            {/* sidebar */}
            <div className='col-span-2 text-left'>
               <section className="dark:bg-gray-800 dark:text-gray-100">
                  <div className="container px-4 py-16 mx-auto space-y-8 lg:max-w-3xl">
                     <h2 className="text-2xl font-bold md:text-4xl">About me</h2>
                     <div className="space-y-8">
                        <div>
                           <h3 className="mb-3 text-lg font-bold md:text-xl">Summary</h3>
                           <ul className="space-y-4">
                              <li className="space-y-1">
                                 <div className="flex items-center space-x-2">
                                    <h4 className="font-medium">I am Jr. Web Developer. I am learning now React by Progamming Hero Team.My dream become Full stack Web Developer.Then I want to start My own Business.</h4>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        <div>
                           <h3 className="mb-3 text-lg font-bold md:text-xl">Experience</h3>
                           <ul className="space-y-4">
                              <li className="space-y-1">
                                 <p className="ml-7 dark:text-gray-400">July, 2022</p>
                                 <div className="flex items-center space-x-2">
                                    <h4 className="font-medium">Learn web development With Programing Hero</h4>
                                 </div>
                              </li>
                           </ul>
                        </div>
                        <div>
                           <h3 className="mb-3 text-lg font-bold md:text-xl">Skill</h3>
                           <ul className="space-y-4">
                              <li className="space-y-1">
                                 <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                       <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                       <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">HTML</h4>
                                 </div>
                                 <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                       <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                       <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">CSS</h4>
                                 </div>
                                 <h4 className="font-medium">CSS Framwork</h4>
                                 <p className="ml-7 dark:text-gray-400">Bootsrap, Tailwind</p>
                                 <h4 className="font-medium">CSS Framwork Components</h4>
                                 <p className="ml-7 dark:text-gray-400">DaisyUI, MambaUI, Kitwind</p>
                                 <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                       <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                       <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">GIT & GITHUB</h4>
                                 </div>
                                 <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                       <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                       <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">JavaScript</h4>
                                 </div>
                                 <p className="ml-7 dark:text-gray-400">DOM, ES6, DEBUG & DEVTOOLS, API</p>
                                 <h4 className="font-medium">JavaScript Libary</h4>
                                 <p className="ml-7 dark:text-gray-400">Reactjs, React Router</p>
                                 <div className="flex items-center space-x-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current dark:text-violet-400">
                                       <path d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"></path>
                                       <polygon points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"></polygon>
                                    </svg>
                                    <h4 className="font-medium">Firebase</h4>
                                 </div>
                                 <p className="ml-7 dark:text-gray-400">Now Learning</p>
                              </li>
                           </ul>
                        </div>
                        <div>
                           <h3 className="mb-3 text-lg font-bold md:text-xl">Education</h3>
                           <ul className="space-y-4">
                              <li className="space-y-1">
                                 <p className="ml-7 dark:text-gray-400">2015 - 2019</p>
                                 <div className="flex items-center space-x-2">
                                    <h4 className="font-medium">Diploma in Engineering</h4>
                                 </div>
                                 <p className="ml-7 dark:text-gray-400">Barguna Polytechnic institute. </p>
                              </li>
                           </ul>
                        </div>
                        <div>
                           <h3 className="mb-3 text-lg font-bold md:text-xl">Hobies</h3>
                           <ul className="space-y-4">
                              <li className="space-y-1">
                                 <div className="flex items-center space-x-2">
                                    <h4 className="font-medium">Coding , Readging & Traveling.</h4>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </section>
            </div>
         </div>

      </div>
   );
};

export default About;