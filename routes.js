
module.exports = (app) => {
    app.get('/',(req,res) => {
        res.sendFile(__dirname + '/index.html');
    })
    
    app.get('/about',(req,res) => {
        res.send("Hello from about");
    })
    
    app.get('/home',(req,res) => {
        res.send({msg:'I am response from server'});
    })
}