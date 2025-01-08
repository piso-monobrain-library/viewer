import { useState, useContext } from 'react';
import { TabContext } from '../../../context/TabContext';

function Host() {
	const { host, folders, setHost, setFolders } = useContext(TabContext);

	const handleHostChange = (e) => {
		setHost(e.target.value);
	};

	const handleFoldersChange = (e) => {
		setFolders(e.target.value.split('\n').filter((folder) => folder.trim() !== ''));
	};

	return (
		<div>
			<h2>HOST</h2>
			<form className='flex flex-col gap-2'>
				<div>
					<label htmlFor='host'>Host</label>
					<input
						className='w-[100%] h-[100%] resize-none theme-default border border-gray-300 rounded p-2'
						type='text'
						id='host'
						value={host}
						placeholder='ex) 127.0.0.1:5500, http://monobrain.ipdisk.co.kr:8080, ...'
						onChange={handleHostChange}
					/>
				</div>
				<div>
					<label htmlFor='folders'>Folders</label>
					<textarea
						className='w-[100%] h-[100%] resize-none theme-default border border-gray-300 rounded p-2'
						id='folders'
						rows={10}
						cols={80}
						value={folders.join('\n')}
						onChange={handleFoldersChange}
					/>
				</div>
			</form>
		</div>
	);
}

export default Host;
