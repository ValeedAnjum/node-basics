
module.exports = (app) => {
    app.get('/',(req,res) => {
        res.render('home',{data:{name:'Valeed Anjum'}});
    })
    
    app.get('/about',(req,res) => {
        res.send("Hello from about");
    })
    
    app.get('/home',(req,res) => {
        res.send({msg:'I am response from server'});
    })
}