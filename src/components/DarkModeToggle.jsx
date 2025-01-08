import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
	const [darkMode, setDarkMode] = useState(() => {
		const savedMode = localStorage.getItem('darkMode');
		if (savedMode) {
			return savedMode === 'true';
		}
		return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	useEffect(() => {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
		localStorage.setItem('darkMode', darkMode);
	}, [darkMode]);

	return (
		<label className='flex items-center cursor-pointer'>
			<div className='relative'>
				<input type='checkbox' className='hidden' checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
				<div className={`block w-14 h-8 rounded-full ${darkMode ? 'bg-green-900' : 'bg-white'}`}></div>
				<div
					className={`dot absolute left-1 top-1 w-6 h-6 rounded-full transition ${
						darkMode ? 'transform translate-x-full bg-rose-50' : 'bg-green-900'
					}`}></div>
				<i
					className={`absolute left-1.5 top-1 transition-opacity ${
						darkMode ? 'opacity-0' : 'opacity-100'
					} text-rose-50`}>
					<i className='bx bx-moon'></i>
				</i>
				<i
					className={`absolute right-1.5 top-1 transition-opacity ${
						darkMode ? 'opacity-100' : 'opacity-0'
					} text-green-900`}>
					<i className='bx bx-sun'></i>
				</i>
			</div>
		</label>
	);
};

export default DarkModeToggle;
