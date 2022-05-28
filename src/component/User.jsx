import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
function User() {
    const params = useParams()
    const{name} = params;
    console.log("User -> name", name)
    return (
        <>
            <Navbar />
            <div>this is {name} Data</div>

        </>
    )
}

export default User