const express = require("express");
const app = express();
const port = 5000;

app.get('/',(req,res) => {
    res.send("Hello from home");
})

app.get('/about',(req,res) => {
    res.send("Hello from about");
})

app.listen(port,() => {
    console.log("Server is running + " , port);
})