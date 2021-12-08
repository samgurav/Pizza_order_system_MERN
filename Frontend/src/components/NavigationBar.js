import React,{useState,useEffect} from 'react'
import { NavLink,Link } from 'react-router-dom'
import { Nav,Navbar,Container } from 'react-bootstrap'
import '../login.css'
export const NavigationBar = ({user}) => {
    const [badge, setbadge] = useState(0)
    useEffect(() => {
        if(user === undefined){
            let items =  JSON.parse(localStorage.getItem('cart'))
            let sum = 0
            items.forEach(ele => {
             sum+=ele.quantity
            })
            setbadge(sum)
        }
        
    },[])

    const logout = ()=>{ 
        localStorage.removeItem('cart')
        localStorage.removeItem('order')
        localStorage.removeItem('user')
    }
    return (
        <div>
              <header id="header" >
    <img src="./Images/pizzalogo.jpg" width="100px" height="100px" />
             <Navbar  >
        <Container>
        
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"  >
            <li>  <Nav.Link  style={{marginRight:'50px',fontSize:'20px',fontFamily:'bold'}}  >Home</Nav.Link>
            <Nav.Link as={NavLink} to="/menu" style={{marginRight:'50px',fontSize:'20px',fontFamily:'bold'}}  >Menu </Nav.Link>
           <Nav.Link as={NavLink} to="/profile" style={{marginRight:'50px',fontSize:'20px',fontFamily:'bold'}}  >Profile</Nav.Link>
           <Nav.Link as={NavLink} to="/cart" style={{marginRight:'50px',fontSize:'20px',fontFamily:'bold'}}  >Cart &nbsp; <span>{user === undefined?badge:user}</span></Nav.Link>
           <Nav.Link as={NavLink} to="/Allorders" style={{marginRight:'50px',fontSize:'20px',fontFamily:'bold'}}  >Allorders</Nav.Link>
          
                <form class="d-flex">

<Link to="/login"> <button class="btn btn-danger" type="submit" onClick={()=>logout()}>Logout</button></Link>
</form>

          
                    </li>
                {/* {flag? navigate('/login'):null} */}
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar> 
  </header>
            {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Pizzaria</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/profile">Profile</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/cart">Cart &nbsp;
                               <span>{user === undefined?badge:user}</span>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/menu">Menu</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/Allorders">All Orders</Link>
                            </li>
                        

                        </ul>
                    </div>
                    <form class="d-flex">

                       <Link to="/login"> <button class="btn btn-danger" type="submit" onClick={()=>logout()}>Logout</button></Link>
                    </form>
                </div>
            </nav> */}
        </div>
    )
}
