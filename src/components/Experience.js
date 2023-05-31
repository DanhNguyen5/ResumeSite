import React from 'react';
import { BookOpenIcon } from '@heroicons/react/24/solid';
const Experience = () => {
  return (
    <div id="experience">
      <div className="container mx-auto bg-customColor px-10 py-6 font-customTwo text-customColorThree" style={{ maxWidth: '78%' }}>
        <div className="text-center">
          <h1 className="sm:text-4xl text-3xl mb-4">Education</h1>
        </div>
        <div className="text-left text-xl bg-customColorTwo rounded-lg pr-2 pl-10 py-4 mt-4 sm:mt-0">
          <ul>
            <li className="flex items-center">
              <BookOpenIcon className="h-5 w-5 mr-6" /> B.S Mechanical Engineering
            </li>
            <li className="flex items-center">
              <BookOpenIcon className="h-5 w-5 mr-6" /> Minor in Mathematics
            </li>
            <li className="flex items-center">
              <BookOpenIcon className="h-5 w-5 mr-6" /> CompTIA A+ Certification
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
