import React from 'react'
import {Navigate} from 'react-router-dom'
function ProtectedRoute({children}){
let data = 'data'

    return ( data ? children :  <Navigate to='/' />)

}

export default ProtectedRoute