import { useState } from "react";
import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Styles from "./LoginSignupStyles.module.css"

function LoginSignup() {
    const [current_form, SetCurrentForm] = useState("Login");
    const toggleForm = (formName) =>
    {
        SetCurrentForm(formName);
    }
    return(
        <div className={Styles.index}>
            {
                current_form === "Login" ? <Login Switch={toggleForm}/> : <Signup Switch={toggleForm}/>
            }
        </div>
    );
}
export default LoginSignup;