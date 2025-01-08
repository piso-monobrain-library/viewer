import React, { useContext } from 'react';
import DarkModeToggle from './DarkModeToggle';
import Config from './Config/Config';

import { TabContext } from '../context/TabContext';

const Header = () => {
	const { method } = useContext(TabContext);
	return (
		<header className='theme-default flex justify-end p-4 items-center gap-1'>
			<DarkModeToggle />
			<Config />
		</header>
	);
};

export default Header;
