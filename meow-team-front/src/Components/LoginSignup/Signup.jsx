import React from "react";
import { useState } from "react";
function Signup(props) {
    const [login_values, SetLoginValues] = useState({
        username_or_email: '',
        password: '',
        show_password: false,
    });
    return(
        <div>
            mamad
            <button onClick={() => props.Switch('Login')}>Login</button>
        </div>
    );
}

export default Signup;