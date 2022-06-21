import { Grid, Typography } from "@mui/material"


export const AuthLayout = ( {children, title = ''} ) => {
    return (

        <Grid
        container
        alignContent='center'
        direction='column'
        justifyContent='center'
        spacing={0}
        sx={{
            minHeight: '100vh',
            backgroundColor: 'primary.main',
            padding: '4'
            }}
        >

            <Grid item
                className='box-shadow'
                xs={3}
                sx={{
                    width: { xs: 280,  sm: 300, md: 450, lg: 600 },
                    backgroundColor: 'white',
                    borderRadius: '2'
                    }}
                padding={2}
            >
                <Typography variant='h5' sx={{ mb: 1 }}> { title } </Typography>

                {children}
        </Grid>
    </Grid>
    )
}