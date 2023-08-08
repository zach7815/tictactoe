import * as React from 'react';
import { Tabs, Tab, AppBar, Box } from '@mui/material';
import TabPanel from '../MuiComponents/TabPanel.js';

export const FullWidthTabs = ({ difficulties }) => {
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const a11yProps = (index) => {
		return {
			id: `full-width-tab-${index}`,
			'aria-controls': `full-width-tabpanel-${index}`,
		};
	};

	return (
		<>
			<div className='buttons'>
				<Box
					sx={{
						width: '28%',
						height: 'fit-content',
						backgroundColor: 'primary.dark',
						fontSize: '1.5rem',
					}}
				>
					<AppBar position='static'>
						<Tabs
							value={value}
							onChange={handleChange}
							indicatorColor='secondary'
							textColor='inherit'
							variant='fullWidth'
							aria-label='full width tabs example'
						>
							{difficulties.map((difficulty, index) => (
								<Tab
									key={difficulty}
									label={difficulty.difficulty}
									{...a11yProps(index)}
								/>
							))}
						</Tabs>

						{difficulties.map((difficulty, index) => (
							<TabPanel
								key={difficulty.index}
								value={value}
								index={index}
								padding='2rem'
							>
								{difficulty.description}
							</TabPanel>
						))}
					</AppBar>
				</Box>
			</div>
		</>
	);
};
