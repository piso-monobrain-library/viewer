import React from 'react';
import { TabProvider } from '../context/TabContext';
import Header from '../components/Header';

function Home() {
	return (
		<TabProvider>
			<div className='theme-default min-h-screen'>
				<Header />
			</div>
		</TabProvider>
	);
}

export default Home;
