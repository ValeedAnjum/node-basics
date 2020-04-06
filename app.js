const express = require("express");

const app = express();
const port = 5000;
//serving static files
app.use(express.static('public'));

//importing routes
require('./routes')(app);

app.listen(port,() => {
    console.log("Server is running + " , port);
})