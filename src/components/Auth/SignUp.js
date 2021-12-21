import React from 'react'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../api';

function SignUp() {
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    function registr(event) {
        event.preventDefault()
        const regUser = { "username": login, "password": password };
        api
            .post("/auth/users/", regUser)
            .then((res) => {
                navigate("/signin");
            })
            .catch((e) => console.log(e));
    }
    return (
        <div className='Registration'>
            <div className='container'>
                <h1>Sign Up</h1>
                <form action="submit">
                    <div className='reg'>
                        <input type="text" placeholder="Name" onChange={(e) => { setLogin(e.target.value) }} required />
                        <input type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} required />
                    </div>
                    <button onClick={registr}>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
