const express = require("express");

const app = express();
const port = 5000;
//serving static files
app.use(express.static('public'));

//importing routes
require('./routes')(app);

//view engine
app.set('view engine','ejs');

app.get('/profile/:id',(req,res) => {
    res.send("You Requisted for user no " + req.params.id);
})
app.listen(port,() => {
    console.log("Server is running + " , port);
})