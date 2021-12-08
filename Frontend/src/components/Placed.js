import React from 'react'
import { Navigate } from 'react-router'
import {Link} from 'react-router-dom'
export const Placed = () => {
    return (
        <div >
            {localStorage.getItem('user') != undefined ?
            <div className="container" style={{marginLeft:'350px',marginTop:'200px'}}>
                <h1>Order Has Been Placed Successfully!</h1>
                <h4 className="bg-success" style={{color:'red'}}>Thank You For Choosing us... </h4>
                <h4 className="bg-success">You will Recive the Notification On email </h4>
                <Link to="/Menu" style={{ textDecoration: "none", textAlign: "right" ,height:'40px'}} className="btn btn-dark" >Go and Order Somemore</Link>
            </div>
            :<Navigate to='/login'></Navigate>}
        </div>
    )
}
