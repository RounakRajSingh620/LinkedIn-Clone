import React, { useState } from 'react';
import "./Login.css";
import { auth } from "./firebase";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");


    const loginToApp = (e) => {
        e.preventDefault();
    };
    const register = () => { };
    return (
        <div className="Login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name(required if registrating)'
                    type="text" />
                <input placeholder='Profile pic URL (optional)' type="text" />
                <input
                    value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" />
                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>
            <p>Not a member ?{" "}
                <span className="Login_register" onClick={register}>Register Now</span></p>
        </div>
    );
}

export default Login
