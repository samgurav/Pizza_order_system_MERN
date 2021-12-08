import React from 'react'
import { Navigate } from 'react-router'
import { NavigationBar } from './NavigationBar'
import {Card,Container} from 'react-bootstrap'
export const Profile = () => {
    return (
        <>
        {localStorage.getItem('user') !== undefined ?
        <div>
          <NavigationBar/>
          
                    <Card className="text-center" style={{ height:'500px',textAlign:'center',paddingTop:'100px'}}>
        <Card.Header style={{fontSize:'50px'}}><b>Profile</b></Card.Header>
        <Card.Body>
            <Card.Title>Welcome <b> {JSON.parse(localStorage.getItem('user')).name}</b></Card.Title>
            <Card.Text>
            Email : <b> {JSON.parse(localStorage.getItem('user')).email}</b>
            </Card.Text>
            <Card.Text>
            Phone Number : <b> {JSON.parse(localStorage.getItem('user')).phone}</b>
            </Card.Text>
           
        </Card.Body>
       
        </Card>
        </div>
        
        : <Navigate to='/login'></Navigate> }
        </>
    )
}
