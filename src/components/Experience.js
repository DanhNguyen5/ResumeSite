import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid';
import { Exp } from '../data/data';

const Experience = () => {
  return (
    <div id="experience">
      <div className="container mx-auto bg-customColor px-4 sm:px-10 py-6 font-customTwo lg:w-1/2">
        <div className="text-center">
          <h1 className="sm:text-4xl text-3xl text-white mb-4 pb-10">Education</h1>
        </div>
        <div className="text-left bg-customColorTwo text-customColorThree rounded-lg px-4 sm:px-10 py-4 mt-4 sm:mt-0">
          <ul>
            <li className="flex items-center">
              <BookOpenIcon className="h-5 w-5 mr-6 text-customColorFour" /> B.S Mechanical Engineering
              <span className="ml-auto">May 2021</span>
            </li>
            <li className="flex items-center">
              <BookOpenIcon className="h-5 w-5 mr-6 text-customColorFour" /> Minor in Mathematics
              <span className="ml-auto">May 2021</span>
            </li>
            <li className="flex items-center">
              <BookOpenIcon className="h-5 w-5 mr-6 text-customColorFour" /> CompTIA A+ Certification
              <span className="ml-auto">August 2022</span>
            </li>
          </ul>
        </div>

        <div className="text-center mt-20">
          <h1 className="sm:text-4xl text-3xl text-white pb-10">Experience</h1>
        </div>
        <div className="flex flex-wrap m-4 gap-10">
            {Exp.map((exp) => {
                return (
                 <div className="bg-customColorTwo rounded-lg px-4 sm:px-10 py-4 mt-4 sm:mt-0">
                    <p className="leading-relaxed text-center text-2xl text-white mb-6">{exp.title}</p>
                    <p className="leading-relaxed mb-6 text-customColorThree">{exp.summary}</p>
                </div>
                );
             
            })}
        </div>
      </div>
    </div>
  );
}

export default Experience;

