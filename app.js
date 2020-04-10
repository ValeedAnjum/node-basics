const express = require("express");
const bodyParser = require("body-parser")
const app = express();

const port = 5000;
//serving static files
app.use(express.static('public'));

//importing routes
require('./routes')(app);
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

//view engine
app.set('view engine','ejs');

app.get('/profile/:id',(req,res) => {
    res.send("You Requisted for user no " + req.params.id);
})
app.listen(port,() => {
    console.log("Server is running + " , port);
})