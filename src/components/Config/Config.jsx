import React, { useState, useContext } from 'react';
import { TabContext } from '../../context/TabContext';

import Modal from '../Modal';

import * as tabs from './Tab';

const Config = () => {
	const { method, setMethod } = useContext(TabContext);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [activeTab, setActiveTab] = useState(method);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const Tabs = [
		{ name: 'Link', caption: '링크' },
		{ name: 'Host', caption: '호스트 & 폴더명' },
	].map((caption) => ({ Tab: tabs[caption.name], caption: caption.caption, name: caption.name.toLowerCase() }));

	const handleTabChange = (tab) => {
		setActiveTab(tab);
		setMethod(tab);
	};

	// const activeTabComponent = Tabs[activeTab].Tab;
	const { Tab } = Tabs.find((tab) => tab.name === activeTab);

	return (
		<div>
			{/* gear button */}
			<button onClick={openModal} className='btn btn-primary'>
				<i className='bx bx-cog'></i>
			</button>

			{/* Modal Cotainer */}
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<div className='relative p-6'>
					<div className='flex mb-4 border-b border-light-primary dark:border-dark-primary'>
						{Tabs.map(({ name, caption }) => (
							<button
								onClick={() => handleTabChange(name)}
								className={`px-4 py-2 text-lg font-semibold transition-colors duration-300 ${
									activeTab === name
										? 'border-b-2 border-light-primary text-light dark:border-dark-primary'
										: 'text-gray-600'
								}`}>
								{caption}
							</button>
						))}
					</div>
					<Tab />
					{/* {activeTab === 'link' ? <Tab1 /> : <Tab2 />} */}
					{/* <button
							onClick={() => handleTabChange('link')}
							className={`px-4 py-2 text-lg font-semibold transition-colors duration-300 ${
								activeTab === 'link'
									? 'border-b-2 border-light-primary text-light dark:border-dark-primary'
									: 'text-gray-600'
							}`}>
							링크
						</button>
						<button
							onClick={() => handleTabChange('host')}
							className={`px-4 py-2 text-lg font-semibold transition-colors duration-300 ${
								activeTab === 'host'
									? 'border-b-2 border-light-primary text-light dark:border-dark-primary'
									: 'text-gray-600'
							}`}>
							호스트 & 폴더명
						</button> */}
					<button onClick={closeModal} className='btn btn-secondary absolute top-2 right-2'>
						<i className='bx bx-x'></i>
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default Config;
