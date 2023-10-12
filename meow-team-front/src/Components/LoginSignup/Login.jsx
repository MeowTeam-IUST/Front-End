import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Styles from "./LoginSignupStyles.module.css"
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material'

function Login(props) {
    const [login_values, SetLoginValues] = useState({
        username_or_email: '',
        password: '',
        show_password: false,
    });

    const [username_or_email, SetUsernameOrEmail] = useState('');
    const [password, SetPassword] = useState('');

    const PasswordHandler = (ps) => {
       SetPassword({ password: ps.target.value });
    }

    const UsernameOrEmailHandler = (inp) => {
        SetUsernameOrEmail({ username_or_email: inp.target.value })
    }
    
    const ChangePassword = (prop) => (event) => {
        SetLoginValues({ ...login_values,
            [prop]: event.target.value });
        PasswordHandler();
    };

    const ShowPasswordWhenClick = () => {
        SetLoginValues({ ...login_values,
            show_password: !login_values.show_password });
    };

    const CancelType = (event) => {
        event.preventDefault();
    };

    const formSchema = Yup.object().shape({
        usernameOrEmail: Yup.string('Not A Proper Username Or Email')
        .required('Required'),
        password: Yup.string()
        .required('Password Required')
        .min(3, 'Password Must Be At Least 3 Characters'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState

    async function onLogin(data, event) {}

    return(
        <div className={Styles.authformcontainer}>
            <form className={Styles.signupform} onSubmit={handleSubmit(onLogin)}>
                <TextField 
                    sx={{
                        '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                        label: { color: 'white' },
                        input: { color: 'white'}
                    }}
                    onChange={UsernameOrEmailHandler} 
                    type="text" 
                    id="usernameOrEmail" 
                    label="Username Or Email" 
                    variant="standard" 
                    {...register('usernameOrEmail')}
                    className={`${errors.usernameOrEmail ? 'is-invalid' : ''}`}
                />
                <div className={Styles.errormessage}>{errors.usernameOrEmail?.message}</div>
                <p></p>
                <FormControl
                    sx={{ width: '100%', 
                        '& .MuiInput-underline:before': { borderBottomColor: 'white' },
                        label: { color: 'white' },
                        input: { color: 'white'}
                    }} 
                    variant="standard">
                    <InputLabel htmlFor="password">
                        Password
                    </InputLabel>
                    <Input 
                        {...register('password')}
                        name="password"
                        type={login_values.show_password ? 'text' : 'password'}
                        value={login_values.password}
                        onChange={ChangePassword('password')}
                        className={`${errors.password ? 'is-invalid' : ''}`}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={ShowPasswordWhenClick}
                                    onMouseDown={CancelType}
                                >
                                    {login_values.show_password ? <Visibility style={{ color: 'white' }}/> : <VisibilityOff style={{ color: 'white' }}/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <div className={Styles.errormessage}>{errors.password?.message}</div>
                <p><br></br></p>
                <Button variant="contained" type="submit">Log In</Button>
            </form>
            <button className={Styles.linkbtn} onClick={() => props.Switch('Signup')}>Sign Up</button>
            <ToastContainer />
        </div>
    );
}

export default Login;