import React, { useState, useContext } from 'react';
import { TabContext } from '../../context/TabContext';

import Modal from '../Modal';

const LinksModal = () => {
	const { links, setLink } = useContext(TabContext);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	const handleLinkClick = (link) => {
		setLink(link);
		closeModal();
	};

	return (
		<div>
			<button onClick={openModal} className='btn btn-primary'>
				<i className='bx bx-menu'></i>
			</button>

			{/* Modal Cotainer */}
			<Modal isOpen={isModalOpen} onClose={closeModal}>
				<div className='relative p-6'>
					<div className='flex mb-4 border-b border-light-primary dark:border-dark-primary'>Links</div>
					<div style={{ maxHeight: '80%', maxWidth: '100%', overflowY: 'auto' }}>
						<ul>
							{links.map((link) => (
								<li
									key={link}
									onClick={() => handleLinkClick(link)}
									className='hover:bg-gray-200 cursor-pointer p-2 rounded'>
									{link}
								</li>
							))}
						</ul>
					</div>

					<button onClick={closeModal} className='btn btn-secondary absolute top-2 right-2'>
						<i className='bx bx-x'></i>
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default LinksModal;
