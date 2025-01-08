import React, { useContext, useState } from 'react';
import { TabContext } from '../../context/TabContext';

function LinksSearch() {
	const { links, link, setLink } = useContext(TabContext);
	const [isFilterOpen, setIsFilterOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');

	const filteredLinks = links.filter((link) => link.toLowerCase().includes(searchTerm.toLowerCase()));

	const handleLinkClick = (link) => {
		setLink(link);
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
					{filteredLinks.slice(0, 5).map((link, index) => (
						<li
							key={index}
							onClick={() => handleLinkClick(link)}
							className='cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'>
							{link}
						</li>
					))}
				</ul>
			) : null}
		</div>
	);
}

export default LinksSearch;
