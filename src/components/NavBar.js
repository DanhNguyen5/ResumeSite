// NavBar Component
import { EnvelopeIcon, UserIcon, FlagIcon, AcademicCapIcon} from '@heroicons/react/24/solid'
import React from 'react';

// https://coolors.co/330036-38182f-2f394d-56666b-eee1b3
// write component function
const NavBar = () => {
	return (
	  <div className="bg-customColorTwo font-custom sticky top-0 z-10">
		<div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-3">
		  <div className="flex items-center space-x-2">
			<UserIcon className="flex-shrink-0 h-5 w-5 text-white ml-2" />
			<a href="#aboutme" className='text-lg text-white underline'>About Me</a>
		  </div>
		  <div className="flex items-center space-x-2">
		  <FlagIcon className="flex-shrink-0 h-5 w-5 text-white ml-2" />
		  	<a href="#" className='text-lg text-white underline'>Experience</a>
		  </div>
		  <a href="#" className="text-2xl text-white font-bold">Dan Nguyen</a>
		  <div className="flex items-center space-x-2">
		  <AcademicCapIcon className="flex-shrink-0 h-5 w-5 text-white ml-2" />
			<a href="#skills" className="text-lg text-white underline">Skills &amp; Technologies</a>	
		  </div>
		  <div className="flex items-center space-x-2">
		  	<EnvelopeIcon className="flex-shrink-0 h-5 w-5 text-white ml-2" />
			<a href="#" className="text-lg text-white underline">Hire Me</a>
		  </div>
		</div>
	  </div>
	);
  }
  
  export default NavBar;
  
