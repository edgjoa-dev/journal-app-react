import { Box } from '@mui/system'
import React from 'react'
import { NavBar } from '../components/NavBar';

export const JournalLayout = ({ children }) => {

    const drawerWidth = 240;

    return (
            <Box sx={{ display: 'flex' }}>

                <NavBar drawerWidth={drawerWidth}/>
                {/* Sidebar drawerWidth */}

                <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
                >
                    {/* Toolbar */}

                    { children }
                </Box>

            </Box>
    )
}
