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
		<button onClick={() => setDarkMode(!darkMode)} className='p-2 border rounded'>
			{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
		</button>
	);
};

export default DarkModeToggle;
