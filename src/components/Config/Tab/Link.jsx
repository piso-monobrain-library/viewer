import React, { useContext } from 'react';
import { TabContext } from '../../../context/TabContext';

function Link() {
	const { links, setLinks } = useContext(TabContext);

	const handleChange = (e) => {
		setLinks(e.target.value.split('\n').filter((link) => link.trim() !== ''));
	};

	return (
		<div>
			<div>LINK</div>
			<textarea
				className='w-[100%] h-[100%] resize-none theme-default border border-gray-300 rounded p-2'
				rows={10}
				cols={80}
				value={links.join('\n')}
				onInput={handleChange}
			/>
		</div>
	);
}

export default Link;
