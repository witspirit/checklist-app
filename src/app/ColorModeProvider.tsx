import React, {PropsWithChildren, useContext, useMemo, useState} from "react";
import {createTheme, IconButton, ThemeProvider, useTheme} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {
    },
});

export const useColorMode = () => {
    const theme = useTheme()
    const colorMode = useContext(ColorModeContext)
    const mode = theme.palette.mode

    return {
        colorMode,
        mode,
        ToggleButton : <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
    }
}

export const ColorModeProvider = ({children}: PropsWithChildren) => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    </ColorModeContext.Provider>
}
