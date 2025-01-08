import { useState, useContext } from 'react';
import { TabContext } from '../../context/TabContext';

import HostSelector from './HostSelector';
import HostSearch from './HostSearch';
import HostsModal from './HostsModal';

export default function HostHeader() {
	const { folders, host, setLink } = useContext(TabContext);
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : folders.length - 1));
		setLink(host + folders[currentIndex - 1] + '.html');
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex < folders.length - 1 ? prevIndex + 1 : 0));
		setLink(host + folders[currentIndex + 1] + '.html');
	};

	return (
		<div className='flex gap-1 items-center justify-start'>
			<div className='flex-4 w-full'>
				<HostSelector />
			</div>
			<div className='flex-2 w-full'>
				<HostSearch />
			</div>

			<HostsModal />

			<button className='flex-1 w-full' onClick={handlePrevious}>
				<i class='bx bxs-chevron-left'></i>
			</button>
			<button className='flex-1 w-full' onClick={handleNext}>
				<i class='bx bxs-chevron-right'></i>
			</button>
		</div>
	);
}
