import React from 'react';
import LinksSelector from './LinkHeader/LinksSelector';
import LinksSearch from './LinkHeader/LinksSearch';

function LinksManager() {
	return (
		<div className='flex gap-2'>
			<LinksSelector />
			<LinksSearch />
		</div>
	);
}

export default LinksManager;
