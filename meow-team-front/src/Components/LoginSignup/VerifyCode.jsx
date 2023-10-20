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
import axios from "axios";
import { ShowToast } from "./Toastify";
import LoadingButton from '@mui/lab/LoadingButton';

function ConfirmCode(props) {
    const [verify_code, SetConfirmCode] = useState('');
    
    const ConfirmCodeHandler = (inp) => {
        SetConfirmCode({ verify_code: inp.target.value })
    }
    
    const formSchema = Yup.object().shape({
        ConfirmCode: Yup.string()
        .required('وارد کردن کد تایید الزامی است')
        // .min(4, 'کد تایید 4 رقمی را به شکل صحیح وارد کنید')
        // .max(4, 'کد تایید 4 رقمی را به شکل صحیح وارد کنید'),
    });
    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState } = useForm(formOptions)
    const { errors } = formState

    const [load, SetIsLoading] = React.useState({
        is_loading: false,
    });
    async function onLogin(data, event) {
        event.preventDefault();
        try{
            let number = '' + data.phonenumber;
            SetIsLoading({ is_loading: true })
            await axios.post('http://localhost:5056/api/Account/login',
            {
                phoneNumber: props.PhoneNumber,
                step: 2,
                confirmNumber: data.ConfirmCode,
            },
            {
                headers: {
                    'accept': 'text/plain' ,
                    'Content-Type': 'application/json' ,
                }
            },).then((response) =>(
                localStorage.setItem('token' , response.data.data.token),
                (
                    response.data.isSuccess === false ?
                    ShowToast("error", `! ${response.data.message}`) :
                    (
                        ShowToast("success", ". با موفقیت وارد شدید"),
                        setTimeout(function(){
                            // window.location = '/';
                        }, 3000)
                    )
                )
            ));
        }
        catch (error)
        {
            ShowToast("error", "! مشکلی پیش آمده است");
            // console.log(error)
        }
        finally
        {
            setTimeout(function(){
                SetIsLoading({ is_loading: false })
            }, 3000)
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
                        onChange={ConfirmCodeHandler} 
                        type="number" 
                        Step="1"
                        ConfirmCode
                        InputLabelProps={{
                            sx: {
                                [`&.${inputLabelClasses.shrink}`]: {
                                  color: "black"
                                }
                              }
                        }}
                        id="ConfirmCode"
                        label = "کد تایید را وارد کنید"
                        variant="standard" 
                        {...register('ConfirmCode')}
                        className={`${errors.ConfirmCode ? 'is-invalid' : ''}`}
                    />
                    <div className={Styles.errormessage}>{errors.ConfirmCode?.message}</div>
                    <div className={Styles.divbutton}>
                        <LoadingButton loading={load.is_loading} sx={{ fontWeight: "bold", width: '10rem' , marginRight: '0.5rem', marginTop: '0.8rem', backgroundColor: 'rgb(242, 27, 27)' }} variant="contained" type="submit">تایید و ورود</LoadingButton>
                        <LoadingButton disabled={load.is_loading} sx={{ fontWeight: "bold",width: '10rem' , marginLeft: '0.5rem' , marginTop: '0.8rem', backgroundColor: 'rgb(255, 255, 255)', color: 'black', border: 1 }} variant="contained" onClick={() => props.onFormSwitch('Login' , null)}>
                            تغییر شماره تلفن
                        </LoadingButton>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}

export default ConfirmCode;