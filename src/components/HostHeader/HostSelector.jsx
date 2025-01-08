import React, { useContext } from 'react';
import { TabContext } from '../../context/TabContext';

function HostSelector() {
	const { folder, folders, setLink, host } = useContext(TabContext);

	const handleFolderChange = (e) => {
		setLink(host + e.target.value + '.html');
	};

	return (
		<select className='theme-default border border-gray-300 rounded p-2 w-full' onChange={handleFolderChange}>
			value={folder}
			{folders.map((folder, index) => (
				<option key={index} value={folder}>
					{folder}
				</option>
			))}
		</select>
	);
}

export default HostSelector;
