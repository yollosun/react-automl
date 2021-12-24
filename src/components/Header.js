import React from 'react'
import img from '../media/img/3d-hologram.png'
import '../styles/header.css'
import { Link, useNavigate } from 'react-router-dom'
import tree from '../media/img/tree.png'

let newyear = []
for (let i = 0; i < 20; i++) {
    newyear.push(
        <img src={tree} />

    )
}

function Header() {
    const navigate = useNavigate();


    function exit() {
        localStorage.removeItem("JWT")
        navigate('/signin')
        window.location.reload()
    }
    return (
        <header>
            <div className='line'>
                {newyear && newyear.map(el => (
                    el
                ))}
            </div>
            <div className="wrapper container">
                <div className="logo">
                    <img src={img} alt="logo" />
                </div>

                <nav>
                    {localStorage.JWT ?

                        <ul>
                            <li className='dropdown'>
                                <Link className="main-link" to="">Main</Link>
                                <div className="dropdown-content">
                                    <Link to='/'>Main</Link>
                                    <Link to='profile'>Profile</Link>
                                </div>
                            </li>
                            <li className='dropdown'>
                                <Link className="main-link" to="">Process</Link>
                                <div className="dropdown-content">
                                    <Link to='/charts'>Charts</Link>
                                    <Link to="/ml">Auto ML</Link>
                                    <Link to="#">Network Planning</Link>
                                </div>
                            </li>
                            <li className='dropdown'>
                                <Link className="main-link" to="">Docs</Link>
                                <div className="dropdown-content">
                                    <Link to="#">How does it work</Link>
                                    <Link to="#">Link 2</Link>
                                    <Link to="#">Link 3</Link>
                                </div>
                            </li>
                            <li><Link to="" onClick={exit}>LogOut</Link></li>

                        </ul> :
                        <ul>
                            <li><Link to="signin">SignIn</Link></li>
                            <li><Link to="signup">SignUp</Link></li>
                        </ul>
                    }

                </nav>
            </div>

        </header>
    )
}

export default Header
