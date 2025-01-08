import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === 'Escape') {
				onClose();
			}
		};

		if (isOpen) {
			window.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
			<div className='bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text p-4 rounded shadow-lg'>
				{React.cloneElement(children, { onClose })}
			</div>
		</div>
	);
};

export default Modal;
