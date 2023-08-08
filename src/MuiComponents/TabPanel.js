import React from 'react';

const TabPanel = ({ value, index, children, padding }) => {
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			style={{ padding }}
		>
			{value === index && <div>{children}</div>}
		</div>
	);
};

export default TabPanel;
