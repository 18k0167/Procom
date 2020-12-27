const path = require('path')
const express = require('express')
const db = require('../connection/database')
var bodyParser = require('body-parser');
const emailverifier = require('email-verifier')

const app = express()
const locat = path.join(__dirname,'../public')
// const viewspath = path.join(__dirname,'../Templating')
app.set('view engine', 'ejs')
app.use(express.static(locat))
app.use(bodyParser.urlencoded({ extended: true }));
const participantoptions = (req,res)=>{
    console.log(req.session.participant)
    if(req.session.participant)
    res.render('participant',{title:'Reg',UserName:req.session.participant})
    else
    {
        res.redirect('login')
    }
}
module.exports = participantoptions