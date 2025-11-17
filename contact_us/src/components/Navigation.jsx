import React from 'react'
import './navigation.css'

function Navigation() {
    return (
        <nav className='container'>
            <div className='logo'>
                <img src="/images/logo.png" alt="do some coding logo" />
            </div>

            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

        </nav>
    )
}

export default Navigation
