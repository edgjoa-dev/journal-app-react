import { Grid, TextField, Typography } from '@mui/material'

export const LoginPage = () => {
    return (
        <Grid
        container
        alignContent='center'
        direction='column'
        justifyContent='center'
        spacing={0}
        sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: '4' }}
        >

            <Grid item
                className='box-shadow'
                xs={3}
                sx={{ backgroundColor: 'white', borderRadius: '2' }}
                padding={2}
            >
                <Typography variant='h5' sx={{ mb: 1 }}> Login </Typography>

                <form>
                    <Grid container padding={3}>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                            autoFocus= {true}
                            label="Correo"
                            type={'email'}
                            placeholder="email@google.com"
                            fullWidth
                        />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type='password'
                            placeholder="Enter your password"
                            fullWidth
                            />
                        </Grid>

                    </Grid>

                </form>
            </Grid>
        </Grid>
    )
}
