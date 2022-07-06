import { Toolbar } from '@mui/material';
import { Box } from '@mui/system'
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';
import 'animate.css';

const drawerWidth = 350;

export const JournalLayout = ({ children }) => {

    return (
            <Box
            className="animate__animated animate__headShake"
            sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            }}>
                <NavBar drawerWidth={ drawerWidth }/>
                <SideBar drawerWidth={ drawerWidth }/>

                    <Box
                    component='main'
                    sx={{ flexGrow: 1, p: 3  }}
                    >
                        <Toolbar/>
                        { children }
                    </Box>
            </Box>
    )
}