const express = require('express');

const app=express();

app.listen(process.env.port, ()=>{console.log("Server started")});

app.get('/',(req,res)=>{res.sendFile(__dirname+"/pages/index.html")});

