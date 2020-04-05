const express = require("express");
const app = express();
const port = 5000;

//
app.use(function(req,res,next) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET');
    next();
})
//
app.get('/',(req,res) => {
    res.send("Hello from home");
})

app.get('/about',(req,res) => {
    res.send("Hello from about");
})

app.get('/home',(req,res) => {
    res.send({msg:'I am response from server'});
})

app.listen(port,() => {
    console.log("Server is running + " , port);
})