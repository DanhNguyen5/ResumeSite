// src/components/Skills.js

import { CheckIcon} from "@heroicons/react/24/solid";
import React from "react";
import { MySkills, MyTechnologies } from "../data/data"; 



const Skills = () => {
  return (
    <div id="skills">
      <div className="container mx-auto bg-customColor px-20 py-20 font-customTwo" style={{ margin: '0 auto', maxWidth: '100%' }}>
        <div className="text-center md-10">
          <h1 className="sm:text-4xl text-3xl text-white mb-4">
            Skills
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {MySkills.map((skill) => (
            <div key={skill} className="p-1 sm:w-1/3 w-full">
              <div className="bg-customColorTwo rounded flex p-4 h-full items-center">
                <CheckIcon className="text-customColorFour w-6 h-6 flex-shrink-0 mr-4" />
                <span className="text-customColorThree">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <h1 className="sm:text-4xl text-3xl font-medium text-white mb-4">
            Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {MyTechnologies.map((technology) => (
            <div key={technology} className="p-1 sm:w-1/3 w-full">
              <div className="bg-customColorTwo rounded flex p-4 h-full items-center">
                <CheckIcon className="text-customColorFour w-6 h-6 flex-shrink-0 mr-4" />
                <span className="text-customColorThree">
                  {technology}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;