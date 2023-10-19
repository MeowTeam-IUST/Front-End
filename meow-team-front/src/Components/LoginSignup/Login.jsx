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
import axios from 'axios';
import { ShowToast } from "./Toastify";

function Login(props) {
    const [phone_number, SetUsernameOrEmail] = useState('');

    const PhoneNumberHandler = (inp) => {
        SetUsernameOrEmail({ phone_number: inp.target.value })
    }

    const formSchema = Yup.object().shape({
        phonenumber: Yup.string()
        .required('شماره مبایل الزامی است')
        .min(11, 'شماره مبایل 11 رقمی خود را به شکل صحیح وارد کنید')
        .max(11, 'شماره مبایل 11 رقمی خود را به شکل صحیح وارد کنید'),
    });
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState

    const [res, SetResponce] = useState();
    async function onLogin(data, event) {
        event.preventDefault();
        try{
            let number = '' + data.phonenumber;
            await axios.post('http://localhost:5056/api/Account/login',
            {
                phoneNumber: number,
                step: 1,
                confirmNumber: 0,
            },
            {
                headers: {
                    'accept': 'text/plain' ,
                    'Content-Type': 'application/json' ,
                }
            },).then((response) =>(
                SetResponce({ res: response.data })
            ));
            if (res.res.isSuccess === false)
            {
                ShowToast("error", `${res.res.message}!`);
            }
            else
            {
                ShowToast("success", "کد تایید برای شما ارسال شد.");
                setTimeout(function(){
                    props.onFormSwitch('Verify' , number);
                }, 2000);
            }
        }
        catch (error)
        {
            ShowToast("error", "مشکلی پیش آمده است !");
            // console.log(error)

            // if (error.response.data.phonenumber === undefined)
            // {
            //     ShowToast("error", `${error.response.data.detail}!`);
            // }
            // if (error.response.data.phonenumber !== undefined)
            // {
            //     ShowToast("error", "شماره تلفن شما اشتباه است.");
            // }
            // else {
            //     ShowToast("error", "مشکلی پیش آمده است !");
            // }
        }
        return false
    }

    const openForm = (event) => {
        document.getElementById("myForm").style.display = "block";
    };

    const closeForm = (event) => {
        window.location = '/';
    };

    return(
        <div className={Styles.index}>
            {/* <div>
                <button className={Styles.openbtn} onClick={openForm} >باز کردن</button>
            </div> */}
            <div className={Styles.authformcontainer} id="myForm">
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
                        onChange={PhoneNumberHandler} 
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
                        label = "شماره تلفن خود را وارد کنید"
                        variant="standard" 
                        {...register('phonenumber')}
                        className={`${errors.phonenumber ? 'is-invalid' : ''}`}
                    />
                    <div className={Styles.errormessage}>{errors.phonenumber?.message}</div>
                    <Button sx={{ fontWeight: "bold", marginTop: '0.8rem', backgroundColor: 'rgb(242, 27, 27)' }} variant="contained" type="submit" >ارسال کد تائید</Button>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default Login;