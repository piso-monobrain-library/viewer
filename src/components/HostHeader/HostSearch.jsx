import React, { useContext, useState } from 'react';
import { TabContext } from '../../context/TabContext';

function HostSearch() {
	const { folders, link, setLink, host } = useContext(TabContext);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const filteredFolders = folders.filter((folder) => folder.toLowerCase().includes(searchTerm.toLowerCase()));

	const handleFolderClick = (folder) => {
		setLink(host + folder + '.html');
		setIsFilterOpen(false);
	};

	return (
		<div className='theme-default relative w-full'>
			<input
				type='text'
				title={link}
				placeholder='Search links...'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
				onFocus={() => setIsFilterOpen(true)}
				onClick={() => setIsFilterOpen(true)}
				className='theme-default border border-gray-300 rounded p-2 w-full'
			/>
			{isFilterOpen ? (
				<ul
					onMouseLeave={() => setIsFilterOpen(!isFilterOpen)}
					className='theme-default absolute right-1 border border-gray-300 rounded p-2 max-h-60 overflow-y-auto bg-white z-10'>
					{filteredFolders.slice(0, 5).map((folder, index) => (
						<li
							key={index}
							onClick={() => handleFolderClick(folder)}
							className='cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'>
							{folder}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}

export default HostSearch;
