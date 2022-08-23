import { createTheme, ThemeOptions } from '@mui/material';
import { grey } from '@mui/material/colors';

const theme = (value) =>
	createTheme({
		palette: {
			primary: {
				main: '#06113CE5',
				dark: '#141110',
			},
			secondary: {
				main: '#FF8C32',
			},
			
		},
		
	}) ;

export default theme;
