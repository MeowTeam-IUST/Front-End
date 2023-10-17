import React,{useState} from "react";
// import {Login} from "./Login";
// import {Signup} from "./Signup";
import Login from "./Login";
import VerifyCode from "./VerifyCode";

function LoginVerify() {
    const [currentForm, setCurrentForm] = useState("Login");
    console.log(currentForm);
    const toggleForm = (formName) =>
    {
        setCurrentForm(formName);
    }
    return(
    <div>
    {
        currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <VerifyCode onFormSwitch={toggleForm}/>
    }
    </div>
    );
}

export default LoginVerify;