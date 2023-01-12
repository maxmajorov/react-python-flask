import React, { useState } from 'react';
import { useFormik } from 'formik';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import LinearProgress from '@mui/material/LinearProgress';
import OutlinedInput from '@mui/material/OutlinedInput';
import style from './SignUp.module.scss';
import Link from '@mui/material/Link';
import { useDispatch } from 'react-redux';
import { signUpTC } from '../../store/reducers/auth-reducer';

export const SignUp: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },

        validate: values => {
            const errors: FormikErrorType = {};

            if (!values.username) {
                errors.username = 'Required';
            } else if (values.username.length <= 3) {
                errors.username = 'Invalid username';
            }

            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length <= 7) {
                errors.password = 'Less then 8 symbols';
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required';
            } else if (values.confirmPassword !== values.password) {
                errors.confirmPassword = "Passwords don't match";
            }
            return errors;
        },

        onSubmit: values => {
            if (values.password === values.confirmPassword) {
                dispatch(
                    signUpTC({
                        username: values.username,
                        email: values.email,
                        password: values.password,
                    }),
                );
            }
        },
    });

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <Grid container justifyContent={'center'}>
                <div className={style.heading}>
                    <h3>Sign up</h3>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>
                        <FormControl sx={{ m: 1, width: '250px' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-email">Username</InputLabel>
                            <OutlinedInput
                                placeholder={'Enter username'}
                                label="Username"
                                {...formik.getFieldProps('username')}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div style={{ color: 'red' }}>{formik.errors.username}</div>
                            ) : null}
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '250px' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
                            <OutlinedInput
                                placeholder={'Enter email'}
                                label="Email"
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div style={{ color: 'red' }}>{formik.errors.email}</div>
                            ) : null}
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '250px' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                {...formik.getFieldProps('password')}
                                placeholder={'Enter password'}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div style={{ color: 'red' }}>{formik.errors.password}</div>
                            ) : null}
                        </FormControl>

                        <FormControl
                            sx={{ m: 1, width: '250px' }}
                            variant="outlined"
                            style={{ marginBottom: '30px' }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password">
                                Confirm password
                            </InputLabel>
                            <OutlinedInput
                                {...formik.getFieldProps('confirmPassword')}
                                placeholder={'Confirm your password'}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm password"
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div style={{ color: 'red' }}>{formik.errors.confirmPassword}</div>
                            ) : null}
                        </FormControl>

                        <Button
                            type={'submit'}
                            variant={'contained'}
                            style={{ width: '60%', margin: 'auto' }}
                            color={'primary'}
                            // disabled={disableBtn}
                        >
                            Register
                        </Button>

                        <span>Already have an account?</span>

                        <Link onClick={() => {}} style={{ cursor: 'pointer' }}>
                            Sign In
                        </Link>
                    </FormGroup>
                </form>
            </Grid>
        </>
    );
};

// ==== TYPES ====

type FormikErrorType = {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
};
