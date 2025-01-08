import React, { useContext } from 'react';
import { TabContext } from '../../context/TabContext';

function LinksSelector() {
	const { links, setLink, link } = useContext(TabContext);

	return (
		<select
			className='theme-default border border-gray-300 rounded p-2 w-full'
			onChange={(e) => setLink(e.target.value)}>
			value={link}
			{links.map((link, index) => (
				<option key={index} value={link}>
					{link}
				</option>
			))}
		</select>
	);
}

export default LinksSelector;
