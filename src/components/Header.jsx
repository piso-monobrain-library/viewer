import React, { useState, useContext, forwardRef } from 'react';
import DarkModeToggle from './DarkModeToggle';
import Config from './Config/Config';

import LinkHeader from './LinkHeader';
import HostHeader from './HostHeader';

import { TabContext } from '../context/TabContext';

const Header = forwardRef((_, ref) => {
	const { link, method } = useContext(TabContext);

	return (
		<header ref={ref} className='theme-default border border-black'>
			<div className='theme-default flex justify-between p-4 items-center gap-1'>
				{method === 'link' ? <LinkHeader /> : <HostHeader />}
				<div className='flex items-center gap-1'>
					<DarkModeToggle />
					<Config />
				</div>
			</div>
			<span className='text-xs font-semibold p-2'>선택된 주소: {link}</span>
		</header>
	);
});

export default Header;
