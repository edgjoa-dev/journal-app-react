import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
    return (
        <AuthLayout title='Register' >
            <form>
                    <Grid container padding={3}>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                            autoFocus= {true}
                            label="Nombre completo"
                            type="text"
                            placeholder="Enter your name"
                            fullWidth
                        />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
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

                        <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type='password'
                            placeholder="Comfirm your password"
                            fullWidth
                            />
                        </Grid>

                        <Grid container spacing={2} sx={{mb: 2, mt: 1 }}>
                            <Grid item xs={12} sm={6}>
                                <Button variant='contained' fullWidth >
                                    Create account
                                </Button>
                            </Grid>

                            <Grid container direction='row' justifyContent='end'>
                                <Typography  sx={{ mr: 1 }}>¿Ya tienes una cuenta?</Typography>
                                <Link component={ RouterLink } color='inherit' to='/auth/login'>
                                    Ingresa ya...
                                </Link>
                            </Grid>

                        </Grid>

                    </Grid>

                </form>
        </AuthLayout>
    )
}
