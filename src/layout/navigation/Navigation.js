// Navigation
import React, { useState } from 'react';

// Custom components
import AppsBar from './Topbar/Topbar';
import Sidebar from './Sidebar/Sidebar';

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
			<Sidebar open={open} handleDrawerClose={handleDrawerClose} />
		</header>
	);
};

export default Navigation;
