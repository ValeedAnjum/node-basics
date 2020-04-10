const mongoose = require("mongoose");
const { mongoUrl } = require("./config/keys");
const Wish = require('./models/wish');
mongoose.connect(mongoUrl,{useNewUrlParser:true});

module.exports = (app) => {
    app.get('/',(req,res) => {
        res.render('home',{data:{name:'Valeed Anjum'}});
    })
    app.get('/sent',(req,res) => {
        res.render('about');
    })
    app.get('/about',(req,res) => {
        res.send("Hello from about");
    })
    
    app.get('/home',(req,res) => {
        res.send({msg:'I am response from server'});
    })
    // app.post('/sent',(req,res) => {
    //     console.log(req.body);
    // })
    app.post('/sent',(req,res)=>{
        // console.log("Anjum");
        const Item = new Wish({
            wish:'AAA'
        });
        Item.save().then(data => {
            console.log('Saved');
        }).catch(err => {
            console.log(err.message);
        });

    })
}