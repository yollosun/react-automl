import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../api';

function SignIn() {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    function auth(event) {
        event.preventDefault()
        const authUser = { "username": login, "password": password };
        api
            .post("/auth/jwt/create/", authUser)
            .then((res) => {

                localStorage.setItem('JWT', res.data.access);
                console.log(localStorage)
                navigate("/");
            })
            .catch((e) => console.log(e));

    }
    return (
        <div className='Authentication'>
            <div className='authform'>
                <form action="submit">
                    <h1>Welcome</h1>
                    <input type="text" placeholder="Name" onChange={(e) => { setLogin(e.target.value) }} />
                    <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                    <button onClick={auth}>Login</button>
                </form>

            </div>

        </div>
    )
}

export default SignIn
