// Navigation
import React, { useState } from 'react';

// Custom components
import AppsBar from './TopBar/TopBar';
import MiniDrawer from './SideBar/SideBar';

const Navigation = () => {
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<header>
			<AppsBar open={open} handleDrawerOpen={handleDrawerOpen} />
			<MiniDrawer open={open} handleDrawerClose={handleDrawerClose} />
		</header>
	);
};

export default Navigation;
