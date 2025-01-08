import React, { useContext, useEffect, useState } from 'react';
import { TabContext } from '../context/TabContext';

function Viewer({ headerRef }) {
	const { link } = useContext(TabContext);
	const [headerHeight, setHeaderHeight] = useState(0);

	useEffect(() => {
		if (headerRef.current) {
			setHeaderHeight(headerRef.current.offsetHeight);
		}
	}, [headerRef]);

	return (
		<div style={{ height: `calc(100vh - ${headerHeight}px)`, overflow: 'hidden' }}>
			<iframe className='w-full h-full' src={link} title='Viewer' style={{ overflow: 'hidden' }} />
		</div>
	);
}

export default Viewer;
