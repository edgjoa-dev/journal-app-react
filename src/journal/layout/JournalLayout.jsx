import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';

export const JournalLayout = ({ children }) => {

const drawerWidth = 340;

    return (
            <Box sx={{ display: 'flex' }}>

                <NavBar drawerWidth={drawerWidth}/>
                <SideBar drawerWidth={drawerWidth}/>

                <Box
                component='main'
                sx={{ flexGrow: 1, p: 3 }}
                >
                    <Toolbar />

                    { children }
                </Box>

            </Box>
    )
}