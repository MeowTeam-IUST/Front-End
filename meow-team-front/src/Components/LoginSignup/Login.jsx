import React from "react";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import Styles from "./LoginStyles.module.css"
import TextField from '@mui/material/TextField';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CloseIcon from '@mui/icons-material/Close';
import { inputLabelClasses } from "@mui/material/InputLabel";
import axios from 'axios';
import { ShowToast } from "./Toastify";
import LoadingButton from '@mui/lab/LoadingButton';

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
    
    const [load, SetIsLoading] = React.useState({
        is_loading: false,
    });

    async function onLogin(data, event) {
        event.preventDefault();
        try{
            let number = '' + data.phonenumber;
            SetIsLoading({ is_loading: true })
            await axios
              .post(
                "https://45.147.99.177:9001/api/Account/login",
                {
                  phoneNumber: number,
                  step: 1,
                  confirmNumber: 0,
                },
                {
                  headers: {
                    accept: "text/plain",
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((response) =>
                response.data.isSuccess === false
                  ? ShowToast("error", `! ${response.data.message}`)
                  : (ShowToast("success", ". کد تایید برای شما ارسال شد"),
                    setTimeout(function () {
                      props.onFormSwitch("Verify", number);
                    }, 3000))
              );
        }
        catch (error)
        {
            ShowToast("error", "! مشکلی پیش آمده است");
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

    return (
      <>
        <>
          {/* <CloseIcon
            sx={{
              cursor: "pointer",
              color: "rgba(0, 0, 0, 0.7)",
              marginLeft: "0.8rem",
            }}
            onClick={closeForm}
          /> */}
          {/* <p className={Styles.textstyle}>ورود/ثبت نام</p> */}
          <form className={Styles.loginform} onSubmit={handleSubmit(onLogin)}>
            <div className={Styles.line}>
              <hr />
            </div>
            <TextField
              dir="rtl"
              sx={{
                "& .MuiInput-underline:before": {
                  borderBottomColor: "rgba(72, 72, 72, 0.7)",
                  fontFamily: "Shabnam",
                },
                "& .MuiInput-underline:after": { borderBottomColor: "black" },
                input: {
                  color: "black",
                  fontSize: "0.9rem",
                  marginRight: "0.1rem",
                },
                "& .MuiInputLabel-root": {
                  right: 0,
                  textAlign: "right",
                  color: "rgba(72, 72, 72, 0.7)",
                  paddingRight: "3%",
                  fontFamily: "Shabnam",
                },
                "& .MuiInputLabel-shrink": {
                  color: "black",
                  transformOrigin: "top right",
                  paddingRight: "3%",
                  fontSize: "mediom",
                },
              }}
              onChange={PhoneNumberHandler}
              type="number"
              step="1"
              style={{ direction: "rtl" }}
              InputLabelProps={{
                sx: {
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "black",
                    fontFamily: "Shabnam",
                  },
                },
              }}
              id="phonenumber"
              label="شماره تلفن خود را وارد کنید"
              variant="standard"
              {...register("phonenumber")}
              className={`${errors.phonenumber ? "is-invalid" : ""}`}
            />
            <div className={Styles.errormessage}>
              {errors.phonenumber?.message}
            </div>
            <LoadingButton
              loading={load.is_loading}
              sx={{
                fontFamily: "Shabnam",
                marginTop: "0.8rem",
                backgroundColor: "rgb(242, 27, 27)",
                height: "45px",
                borderRadius: "10px",
              }}
              variant="contained"
              type="submit"
            >
              ارسال کد تائید
            </LoadingButton>
          </form>
          <ToastContainer />
        </>
      </>
    );
}

export default Login;