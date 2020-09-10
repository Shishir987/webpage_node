const express = require('express');

const app=express();

app.listen(4000, ()=>{console.log("Server started")});

app.get('/',(req,res)=>{res.sendFile(__dirname+"/pages/index.html")});

