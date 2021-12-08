import React, {useEffect, useState } from 'react'
import { getmenu, getPosts } from '../config/Myservice'
import { NavigationBar } from './NavigationBar'

export default function Menu() {
  
    const [state, setstate] = useState([])
    const [info, setinfo] = useState(0)

    const refresh = ()=>{
      getmenu().then(res => {
        setstate(res.data)     
      })
      let items =  JSON.parse(localStorage.getItem('cart'))
      let sum = 0
      if(items.length !=0){
        items.forEach(ele => {
         sum+=ele.quantity
        })
      }
      setinfo(sum)
    }
    
    useEffect(() => {
      refresh()
    }, [])
  
    const add = (ele) => {
   
      let data = JSON.parse(localStorage.getItem('cart'))
  
      let flag = data.filter(item =>
        item.name === ele.name
      )
      if (flag.length === 0) {
        let details = { name: ele.name, price: ele.price, quantity: 1 }
        data.push(details)
        localStorage.setItem('cart', JSON.stringify(data));
        alert("Item added succesfully!!")
      }
      else{
       data.map((e,index)=>{
         if(e.name===ele.name){
           data[index].quantity +=1
           data[index].price *=data[index].quantity
           
           localStorage.setItem('cart', JSON.stringify(data));
           alert("Added")
         }
       } )
      }
      refresh()
    }
    return (
        <>
 
   <NavigationBar user={info}/>
          
          <div className="container mt-4 ml-4" >
            <div>
            <div className="row d-flex justify-content-around">
           { state.map(ele=>
           <div className="col-lg-3 ">
               <div className="card" style={{width:"300px",border:'1px solid grey',padding:'10px',margin:'4px'}}>
               <img className="mx-auto" src={ele.path} height="250px" width="280px" alt="..."/>
               <div className="card-body">
                 <h3 className="card-title text-center" style={{marginLeft:'65px'}}>{ele.name}</h3>
               
                 <span style={{marginLeft:"80px",fontSize:'20px'}}>Price ${ele.price}</span><br/>
                 <p style={{marginLeft:"80px",fontSize:'20px',color:'red'}}>size:{ele.size}</p>
                
                 <button href="#" className="btn btn-primary px-4" style={{background:'black', height:'50px'}}onClick={() => add(ele)}>Add Cart</button>
                
               </div>
             </div>
             </div>
           )
           }
           </div>
        </div>
        </div>
        </>
    )
}
