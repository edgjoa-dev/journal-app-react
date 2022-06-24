import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'

export const NavBar = ({ drawerWhidth = 240 }) => {
    return (
        <AppBar
        position='fixed'
        sx={{
            width: { sm: `calc(100% - ${ drawerWhidth }px)`},
            ml:{ sm: `${ drawerWhidth }px)`}
        }}
        >
            <Toolbar>
                <IconButton
                color='inherit'
                edge='start'
                sx={{ mr: 2, display:{ sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction='row' justifyContent='space-between' alignItems='center'
                sx={{ paddingLeft:{sm: '6rem'}}}
                >
                    <Typography variant='h6' component='div'> Journal App </Typography>
                    <IconButton color='error' >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
