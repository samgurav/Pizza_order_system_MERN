const express=require('express');
const fs=require('fs')
const router = express.Router();
const jwt=require('jsonwebtoken')
const jwtSecret="asd889asdas656asasksksfhd"
const catModel=require('../db/userschema')
const menuModel=require('../db/menuSchema')
const orderModel=require('../db/orderSchema')
const nodemailer=require('nodemailer')
router.get('/fetchpost', (req, res) => {
    catModel.find({}, (err, data) => {
        if (err) throw err;
        res.send(data)
    })
})



router.get("/list",(req,res)=>{
    catModel.find({},(err,data)=>{
        if(err) throw err;
        else{
        res.send('user data saved')
        }
    })
})


router.post('/addpost',(req,res)=>{
   
         console.log(req.body)
    let name=req.body.name;
    let email=req.body.email;
    let phone=req.body.phone;
    let address=req.body.address;
    let pass=req.body.pass;
    let data=[]
    
    //insert data
    let ins=new catModel({name:name,email:email,phone:phone,address:address,pass:pass,data:[]});
    ins.save((err)=>{
        if(err){ res.send("Already Added")}
       
    })
})
router.post("/insertmenu",(req,res)=>{
    let pid=req.body.pid;
    let name=req.body.name;
    let path=req.body.path;
    let price=req.body.price;
    let size=req.body.size;
    let ins=new menuModel({pid:pid,name:name,path:path,price:price,size:size});
    ins.save((err)=>{
        if(err){ res.send("Already Added")}
        else{
        res.send("Category Added");
        }
    })
})

router.get("/getpost", (req, res) => {
    menuModel.find({}, (err, data) => {
        if (err) throw err;
        else {
            res.send(data)
        }
    })
})
router.post('/order', (req, res) => {

   
    let insert2 = new orderModel({
        details: req.body.details,
        price: req.body.price,
        status: req.body.status,
      
    })
    console.log(insert2, "line 15")

    insert2.save((e) => {
        console.log(e)
        if (e) {
            res.send("Already added")
        }
        else {
            res.send("category added")
            
        }

    })
})
router.get("/allorders", (req, res) => {
    orderModel.find({}, (err, data) => {
        if (err) throw err;
        else {
            res.send(data)
        }
    })
})
router.get("/fetchtable", (req, res) => {
    table.find({}, (err, data) => {
        if (err) throw err;
        else {
            res.send(data)
        }
    })
})

router.post('/email', async (req,res)=>{
 
  var transporter = nodemailer.createTransport({
    service: 'gmail',
  
    auth: {
        user: 'your mail id',
        pass: 'password'
      }
  });
  
  var mailOptions = {
    from: 'guravsamiksha17@gmail.com',
    to: 'guravsamiksha17@gmail.com',
    subject: 'Your Order Has been Placed Successfully!!',
    text:
     `
Hi [Customer],

Thank you so much for referring your friend [Friend's name] to us. I hope You will Love the test, Thank you for being our regular customer.

We're lucky to have you. Thanks again for being such a fantastic customer! As a token of our appreciation, here's a [coupon/discount] for you to enjoy.

Cheers,

[Insight Pizza Hub]`
    
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
  ren.send("Email Sent!")
})

module.exports=router;


//post
//http://localhost:8000/api/posts/addpost

//to get the data 

//http://localhost:8000/api/posts/fetchpost