import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from '@mui/material'
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';



const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [ (value) => value.includes('@'), 'El correo debe contener @'],
    password: [ (value) => value.length >= 8, 'El password debe tener al menos 8 caracteres' ],
    displayName: [ (value) => value.length >= 3, 'El nombre no es válido' ]
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { status, errorMessage } = useSelector( state => state.auth );
    const isCheckingAuthentication = useMemo(() => status === 'checking', [status])


    const {
        formState,
        isFormValid,
        displayName,
        displayNameValid,
        email,
        emailValid,
        password,
        passwordValid,
        onInputChange,
    } = useForm(formData, formValidations)

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true)

        if(!isFormValid) return;
        dispatch(startCreatingUserWithEmailPassword(formState));
    }
    return (
        <AuthLayout title='Register' >
            <form onSubmit={onSubmit} >
                    <Grid container padding={3}>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                            autoFocus= {true}
                            label="Nombre completo"
                            type="text"
                            placeholder="Enter your name"
                            fullWidth
                            name='displayName'
                            value={displayName}
                            onChange={onInputChange}
                            error={!!displayNameValid && formSubmitted}
                            helperText={displayNameValid}
                        />
                        </Grid>
                        <Grid item xs={12} sx={{ mt: 2 }}>
                            <TextField
                            label="Correo"
                            type={'email'}
                            placeholder="email@google.com"
                            fullWidth
                            name='email'
                            value={email}
                            onChange={onInputChange}
                            error={!!emailValid && formSubmitted}
                            helperText={emailValid}
                        />
                        </Grid>

                        <Grid item xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Password"
                            type='password'
                            placeholder="Enter your password"
                            fullWidth
                            name='password'
                            value={password}
                            onChange={onInputChange}
                            error={!!passwordValid && formSubmitted}
                            helperText={passwordValid}
                            />
                        </Grid>

                        <Grid container spacing={2} sx={{mb: 2, mt: 1 }}>

                            <Grid
                            item
                            xs={12}
                            display={ !!errorMessage ? '' : 'none' }
                            >
                                <Alert severity='error'>{errorMessage}</Alert>
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <Button
                                disabled={isCheckingAuthentication}
                                type='submit'
                                variant='contained'
                                fullWidth >
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
