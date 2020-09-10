const express = require('express');

const app=express();


app.set('port',process.env.PORT || 8080);
var port = app.get('port');
app.listen(port,()=>{console.log('Server running on port' + port)});

app.get('/',(req,res)=>{res.sendFile(__dirname+"/pages/index.html")});

