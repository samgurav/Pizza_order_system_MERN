import React, { useEffect } from 'react'
import axios from 'axios';
import '../login.css'
import { Nav,Navbar,Container } from 'react-bootstrap';
import { addPost, getPosts } from '../config/Myservice';
import { useNavigate,NavLink } from 'react-router-dom'
import { useRef,useState } from 'react';

export const Login = () => {
   
    const navigate = useNavigate()
    const emailRef = useRef(null)
    const passwordRef = useRef(null)
    const [state, setstate] = useState([])
    const [flag, setFlag] = useState(false)
    useEffect(()=>{
        getPosts().then(res=>{
          setstate(res.data)
          console.log(res.data)
        })
      },[])

      const checkdata=(event)=>{
          event.preventDefault()
          let flag=true
          let email=emailRef.current.value;
          let pass=passwordRef.current.value;

          state.forEach(ele=>{
            if(email===ele.email && pass===ele.pass){
                localStorage.setItem('user',JSON.stringify(ele))
                localStorage.setItem('cart',JSON.stringify([]))
                flag=false
                alert("Login Succesfully")
                navigate("/menu")
            }
        })
        if(flag){
          alert("Email or Password does not match")
        }
      }

    

   return (
        <>
        <header id="header">
    <img src="./Images/pizzalogo.jpg" width="100px" height="100px" />
    <Navbar  >
        <Container>
        
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"  >
            <li>  <Nav.Link as={NavLink} to="/" style={{marginRight:'50px',fontSize:'20px',fontFamily:'bold'}}  >Home</Nav.Link>
           <Nav.Link as={NavLink} to="/signup" style={{marginRight:'50px',fontSize:'20px',fontFamily:'bold'}}  >SignUp</Nav.Link>
           <Nav.Link   style={{fontSize:'20px',fontFamily:'bold',color:'white',marginRight:'10px'}} as={NavLink} to="/login" >SignIn</Nav.Link></li>
                {/* {flag? navigate('/login'):null} */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar> 
  
</header>
       <section>
            <div class="center" style={{marginTop:'80px'}}>
                <h1>Login</h1>
                <form method="post">
                    <div class="txt">
                        <input type="text" name="email" placeholder="Enter Email" ref={emailRef} required />
                    </div>
                   
                      <div class="txt">
                        <input type="password" name="pass" placeholder="Enter Password" ref={passwordRef}  required />
                    </div>
                 

                        <button  class="btn"onClick={checkdata}>Login</button>
                     
                        <div class="signup">Create New Account?<a href="http://localhost:3000/signup">register</a>  </div>
                  
                </form>
            </div>
        </section>

     
        
      
            
        </>
    )
}
