import { useState, useContext } from 'react';
import { TabContext } from '../../context/TabContext';

import LinksSelector from './LinksSelector';
import LinksSearch from './LinksSearch';
import LinksModal from './LinksModal';

export default function LinkHeader() {
	const { links, setLink } = useContext(TabContext);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : links.length - 1));
		setLink(links[currentIndex]);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex < links.length - 1 ? prevIndex + 1 : 0));
		setLink(links[currentIndex]);
	};

	return (
		<div className='flex gap-1 items-center justify-start'>
			<div className='flex-2 w-full'>
				<LinksSelector />
			</div>
			<div className='flex-2 w-full'>
				<LinksSearch />
			</div>
			<button className='flex-1 w-full' onClick={handlePrevious}>
				<i className='bx bxs-chevron-left'></i>
			</button>
			<button className='flex-1 w-full' onClick={handleNext}>
				<i className='bx bxs-chevron-right'></i>
			</button>
			<LinksModal />
		</div>
	);
}
