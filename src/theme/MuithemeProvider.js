import { ReactNode } from "react";
import {useSelector} from 'react-redux';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './index';

const MuiThemeProvider=({children})=>{
   
    const themeMode=useSelector((store)=>store.theme.value);

    return(
		<ThemeProvider theme={theme(themeMode)}>
            <CssBaseline/>
            {children}
        </ThemeProvider>
	);
};

export default MuiThemeProvider;