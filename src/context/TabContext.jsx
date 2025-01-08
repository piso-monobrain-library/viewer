import React, { createContext, useState, useEffect } from 'react';

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
	const [method, setMethod] = useState(() => {
		const savedMethod = localStorage.getItem('method');
		return savedMethod ? savedMethod : 'link';
	});
	const [links, setLinks] = useState(() => {
		const savedLinks = localStorage.getItem('links');
		return savedLinks ? JSON.parse(savedLinks) : [];
	});
	const [link, setLink] = useState('');

	const [host, setHost] = useState(() => {
		const savedHost = localStorage.getItem('host');
		return savedHost ? savedHost : '';
	});

	const [folder, setFolder] = useState('');

	const [folders, setFolders] = useState(() => {
		const savedFolders = localStorage.getItem('folders');
		return savedFolders ? JSON.parse(savedFolders) : [];
	});

	useEffect(() => {
		localStorage.setItem('method', method);
		localStorage.setItem('links', JSON.stringify(links));
		localStorage.setItem('host', host);
		localStorage.setItem('folders', JSON.stringify(folders));
	}, [method, links, link, host, folders, folder]);

	useEffect(() => {
		const handleBeforeUnload = () => {
			localStorage.setItem('method', method);
			localStorage.setItem('host', host);
			localStorage.setItem('links', JSON.stringify(links));
			localStorage.setItem('folders', JSON.stringify(folders));
		};

		window.addEventListener('beforeunload', handleBeforeUnload);

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload);
		};
	}, [method, links, link, host, folders, folder]);

	return (
		<TabContext.Provider
			value={{
				method,
				setMethod,
				links,
				setLinks,
				link,
				setLink,
				host,
				setHost,
				folders,
				setFolders,
				folder,
				setFolder,
			}}>
			{children}
		</TabContext.Provider>
	);
};
