import React,{useState} from "react";
import Login from "./Login";
import VerifyCode from "./VerifyCode";

function LoginVerify() {
    const [propvalues, setPropValues] = React.useState({
        currentForm: "Login",
        phone_number: null,
    });
    const toggleForm = (formName , prop_phone_number) =>
    {
        setPropValues({
            currentForm: formName,
            phone_number: prop_phone_number,
        });
    }
    return(
    <div>
    {
        propvalues.currentForm === "Login" ? <Login onFormSwitch={toggleForm} /> : <VerifyCode PhoneNumber={propvalues.phone_number} onFormSwitch={toggleForm}/>
    }
    </div>
    );
}

export default LoginVerify;