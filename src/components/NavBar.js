// NavBar Component

import React from 'react';

// https://coolors.co/330036-38182f-2f394d-56666b-eee1b3
// write component function
const NavBar = () => {
	return (
		<div className="bg-customColor">
			<div className="container mx-auto flex justify-between items-center py-3">
				<div className="flex items-center">
					<a className='text-lg ml-20 text-white'>Education</a>
					<div className="w-1"></div> 
					<a className='text-lg ml-20 text-white'>Experience</a>
				</div>
				<a className="text-2xl text-white">Dan Nguyen</a>
				<div className="flex items-center">
					<a className="text-lg mr-4 text-white">Skills</a>
					<div className="w-12"></div>
					<a className="text-lg mr-20 text-white">Contact Me</a>
				</div>
			</div>
		</div>
	);
} // no need for semicolon

export default NavBar;
