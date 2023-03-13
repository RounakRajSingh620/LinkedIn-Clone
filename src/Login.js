import React from 'react';
import "./Login.css";

function Login() {
    return (
        <div className="Login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
            <form>
                <input placeholder='Full name(required if registrating'
                    type="text" />
                    <input placeholder='Profile pic URL (optional)' type="text" />
            </form>
        </div>
    );
}

export default Login
