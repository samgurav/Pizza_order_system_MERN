import React,{useEffect, useState} from 'react'
import {placeOrder} from '../config/Myservice'
import {useNavigate,Navigate} from 'react-router'
import { NavigationBar } from './NavigationBar'
import { email } from '../config/Myservice'
export const Order = () => {
    const navigate = useNavigate() 
    const [state, setstate] = useState({})
    useEffect(() => {
        let Order = JSON.parse(localStorage.getItem('order'));
        setstate(Order)
    },[])
    const checkout = ()=>{
        email()
        placeOrder(state)
        localStorage.removeItem("order");
        localStorage.setItem('cart', JSON.stringify([]))
        navigate('/placed')

        
    }
    return (
        <>
        <NavigationBar/>
        {localStorage.getItem('user') != undefined ?
        <div className="container" style={{marginLeft:'500px' , marginTop:'100px'}}>

        <h1>Checkout</h1>
        <form className="container">
            <div class="form-group">
                <label>Credit Card Number:  </label>
                <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter Card details " required/><br/>
                <small id="emailHelp" class ="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <h5>Order Total:{state.price}</h5><br/>
            <button  className="btn btn-secondary" onClick={()=>checkout()}>Checkout</button>
        </form>
    </div>
    :<Navigate to='/login'></Navigate>}
    </>
    )
}
