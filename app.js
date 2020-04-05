const express = require("express");

const app = express();
const port = 5000;

app.get('/',(req,res) => {
    res.sendFile(__dirname + '/index.html');
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