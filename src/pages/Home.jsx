import React from 'react';
import DarkModeToggle from '../components/DarkModeToggle';

function Home() {
	return (
		<div className='min-h-screen bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text flex items-center justify-center'>
			<h1 className='text-3xl font-bold text-center'>Home Page 홈페이지</h1>
			<DarkModeToggle />
		</div>
	);
}

export default Home;
