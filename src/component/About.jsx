import React from 'react'
import Navbar from './Navbar'
import {NavLink,Outlet} from 'react-router-dom'
function About() {
    return (
        <div>
            <Navbar />
            This is About Component
            <NavLink to={'profile'}>Profile</NavLink>
            <NavLink to={'address'}>Address</NavLink>
            <Outlet />
        </div>
    )
}

export default About