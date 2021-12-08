import React from 'react'
import  '../home.css'
import { NavLink } from 'react-router-dom'
import {Nav,Navbar,Container} from 'react-bootstrap'
export const Home = () => {
    return (
        <>
         

<header id="header">
    <img src="./Images/pizzalogo.jpg" width="100px" height="100px" />
    <Navbar  >
        <Container >
        
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"  >
              <li>  <Nav.Link as={NavLink} to="/signup" style={{marginLeft:'800px',marginRight:'50px',fontSize:'20px',fontFamily:'bold'}}  >SignUp</Nav.Link>
           <Nav.Link   style={{fontSize:'20px',fontFamily:'bold',color:'white',marginRight:'10px'}} as={NavLink} to="/login"  >SignIn</Nav.Link></li>
                {/* {flag? navigate('/login'):null} */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar> 
  
</header>
<div>
<section class="banner" id="banner">
    <div class="content">
        <h2 class="e">Insight Pizza Hub</h2>
        <p><b>Welcom to The Pizza Delivery Service.  </b>This is the Place When you may chose the most Delicious Pizza You Like<br/> from whie variety of Options!.
      </p>
      <p>We'are performing deliveryy free of charge in case if you order is Higher than20$</p>
        <a href="http://localhost:3000/signup" class="btn1" >Sign In and Order</a>
     
    </div>
</section>
</div>

        
        </>
    )
}
