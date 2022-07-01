import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth';
import { useMemo } from 'react';

export const LoginPage = () => {

    const { status } = useSelector(state => state.auth )
    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: '',
        password: '',
    })

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword( { email, password } ));
    }

    const onGoogleSignIn = () => {
        console.log('Google auth');
        dispatch(startGoogleSignIn());
    }

    return (
        <AuthLayout title='Login' >
            <form onSubmit={onSubmit}>
                    <Grid container padding={3}>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                            autoFocus= {true}
                            label="Correo"
                            type={'email'}
                            placeholder="email@google.com"
                            fullWidth
                            name='email'
                            value={ email }
                            onChange={ onInputChange }
                        />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type='password'
                            placeholder="Enter your password"
                            fullWidth
                            name='password'
                            value={ password }
                            onChange={ onInputChange }
                            />
                        </Grid>

                        <Grid container spacing={2} sx={{mb: 2, mt: 1 }}>
                            <Grid item xs={12} sm={6}>
                                <Button
                                disabled={isAuthenticating}
                                type="submit"
                                variant='contained'
                                fullWidth >
                                    Login
                                </Button>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button
                                disabled={isAuthenticating}
                                onClick={onGoogleSignIn}
                                variant='contained'
                                fullWidth >
                                    <Google/>
                                    <Typography sx={{ml: 1}}>Google</Typography>
                                </Button>
                            </Grid>

                            <Grid container direction='row' justifyContent='end'>
                                <Link component={ RouterLink } color='inherit' to='/auth/register'>
                                    Crear una cuenta
                                </Link>
                            </Grid>

                        </Grid>

                    </Grid>

                </form>
        </AuthLayout>
    )
}
