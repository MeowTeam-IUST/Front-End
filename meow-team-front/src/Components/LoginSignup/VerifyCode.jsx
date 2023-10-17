import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Styles from "./LoginStyles.module.css"
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
import CloseIcon from '@mui/icons-material/Close';
import { inputLabelClasses } from "@mui/material/InputLabel";

function VerifyCode(props) {
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
        password: Yup.string()
        .required('شماره مبایل الزامی است')
        .min(11, 'شماره مبایل 11 رقمی خود را به شکل صحیح وارد کنید')
        .max(11, 'شماره مبایل 11 رقمی خود را به شکل صحیح وارد کنید'),
    });
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState

    async function onLogin(data, event) {}

    const openForm = (event) => {
        document.getElementById("myForm").style.display = "block";
    };
    const closeForm = (event) => {
        document.getElementById("myForm").style.display = "none";
    };
    return(
        <div className={Styles.index}>
            <div>
                <button className={Styles.openbtn} onClick={openForm} >باز کردن</button>
            </div>
            <div className={Styles.authformcontainer} id="myForm">
                {/* <Button sx={{ color: 'black', display: 'inline-block', marginLeft: '1%', padding: '0rem'}} startIcon={<CloseIcon />} onClick={closeForm}/> */}
                <CloseIcon sx={{ display: 'inline-block' , cursor: 'pointer', color: 'rgba(0, 0, 0, 0.7)', marginLeft: '0.8rem'}} onClick={closeForm} />
                <p className={Styles.textstyle}>
                    ورود/ثبت نام
                </p>
                <form className={Styles.loginform} onSubmit={handleSubmit(onLogin)}>
                    <div className={Styles.line}><hr/></div>
                    <TextField 
                        dir="rtl"
                        sx={{
                            '& .MuiInput-underline:before': { borderBottomColor: 'rgba(72, 72, 72, 0.7)' },
                            '& .MuiInput-underline:after': { borderBottomColor: 'black' },
                            input: { color: 'black', fontSize: '0.9rem', marginRight: '0.1rem'},
                            "& .MuiInputLabel-root": {
                                right: 0,
                                textAlign: "right",
                                color: 'rgba(72, 72, 72, 0.7)',
                                paddingRight: '3%'
                            },
                            "& .MuiInputLabel-shrink":{
                                color: 'black',
                                transformOrigin: "top right",
                                paddingRight: '3%',
                                fontSize: 'mediom',
                            },
                        }}
                        onChange={UsernameOrEmailHandler} 
                        type="number" 
                        step="1"
                        style={{ direction: "rtl" }}
                        InputLabelProps={{
                            sx: {
                                [`&.${inputLabelClasses.shrink}`]: {
                                  color: "black"
                                }
                              }
                        }}
                        id="phonenumber"
                        label = "کد تایید را وارد کنید"
                        variant="standard" 
                        {...register('password')}
                        className={`${errors.password ? 'is-invalid' : ''}`}
                    />
                    <div className={Styles.errormessage}>{errors.password?.message}</div>
                    <div className={Styles.divbutton}>
                        <Button sx={{ fontWeight: "bold", width: '10rem' , marginRight: '0.5rem', marginTop: '0.8rem', backgroundColor: 'rgb(242, 27, 27)' }} variant="contained" type="submit">تایید و ورود</Button>
                        <Button sx={{ fontWeight: "bold",width: '10rem' , marginLeft: '0.5rem' , marginTop: '0.8rem', backgroundColor: 'rgb(255, 255, 255)', color: 'black', border: 1 }} variant="contained" onClick={() => props.onFormSwitch('Login')}>
                            تغییر شماره تلفن
                        </Button>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default VerifyCode;