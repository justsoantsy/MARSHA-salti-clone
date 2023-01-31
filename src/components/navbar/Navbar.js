import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineBell, AiOutlineMail, AiOutlineUser} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../../assets/dragverselogo.png'
import ConnectWallet from '../ConnectWallet/ConnectWallet';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <div className='navbar'>
            <div className="container">
            <Link to='/' ><img src={Logo} alt="DRAGVERSE"/></Link>
            <input placeholder='Search...' className='input'/>
                <ul className={click ? 'nav active' : 'nav'}>
                    
                    <li className="nav-item">
                        <a href="/feed">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/feed">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/create-avatar">Resources</a>
                    </li>
                    <li className="nav-item">
                        <AiOutlineMail className='icon' />
                    </li>
                    <li className="nav-item">
                        <AiOutlineBell className='icon' />
                    </li>
                    <li className="nav-item">
                        <AiOutlineUser className='icon' />
                    </li>
                    <li className="nav-item">
                        <ConnectWallet className= 'btn' />
                    </li>

                </ul>
                <div onClick={handleClick} className="hamburger">
                    {click ? (<AiOutlineClose className='icon' />) : (<AiOutlineMenu className='icon' />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar