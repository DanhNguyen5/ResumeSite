// NavBar Component
import { EnvelopeIcon} from '@heroicons/react/24/solid'
import React from 'react';

// https://coolors.co/330036-38182f-2f394d-56666b-eee1b3
// write component function
const NavBar = () => {
	return (
	  <div className="bg-customColor font-custom">
		<div className="container mx-auto flex flex-col sm:flex-row justify-between items-center py-3">
		  <div className="flex items-center space-x-2">
			<a href="#" className='text-lg text-white underline'>About Me</a>
		  </div>
		  <div className="flex items-center space-x-2">
		  	<a href="#" className='text-lg text-white underline'>Experience</a>
		  </div>
		  <a href="#" className="text-2xl text-white font-bold">Dan Nguyen</a>
		  <div className="flex items-center space-x-2">
			<a href="#" className="text-lg text-white underline">Skills</a>	
		  </div>
		  <div className="flex items-center space-x-2">
		  	<EnvelopeIcon className="flex-shrink-0 h-5 w-5 text-white ml-2" />
			<a href="#" className="text-lg text-white underline">Contact Me</a>
		  </div>
		</div>
	  </div>
	);
  }
  
  export default NavBar;
  
