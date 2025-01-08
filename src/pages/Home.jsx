import React, { useRef } from 'react';
import { TabProvider } from '../context/TabContext';
import Header from '../components/Header';
import Viewer from '../components/Viewer';

function Home() {
	const headerRef = useRef(null);

	return (
		<TabProvider>
			<main className='theme-default flex flex-col min-h-screen'>
				<Header ref={headerRef} />
				<div className='flex-grow'>
					<Viewer headerRef={headerRef} />
				</div>
			</main>
		</TabProvider>
	);
}

export default Home;
