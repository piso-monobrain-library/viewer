import React, { createContext, useState, useEffect } from 'react';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
	const [method, setMethod] = useState(() => {
		const savedMethod = localStorage.getItem('tabMethod');
		return savedMethod ? savedMethod : 'link';
	});

	useEffect(() => {
		localStorage.setItem('tabMethod', method);
	}, [method]);

	useEffect(() => {
		const handleBeforeUnload = () => {
			localStorage.setItem('tabMethod', method);
		};

		window.addEventListener('beforeunload', handleBeforeUnload);

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
		};
	}, [method]);

	return <TabContext.Provider value={{ method, setMethod }}>{children}</TabContext.Provider>;
};
