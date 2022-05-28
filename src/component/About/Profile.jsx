import React from 'react'
import {NavLink} from 'react-router-dom'
function Profile() {
    return (
        <div>
            <h1>this is company profile</h1>
            <li><NavLink to={'/user/wali'}>wali</NavLink></li>
            <li><NavLink to={'/user/hamza'}>hamza</NavLink></li>
        </div>
    )
}

export default Profile