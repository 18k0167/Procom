const path = require('path')
const express = require('express')
const db = require('../connection/database')
var bodyParser = require('body-parser');
const emailverifier = require('email-verifier')
const bcrypt = require('bcrypt')
const app = express()
const locat = path.join(__dirname,'../public')
// const viewspath = path.join(__dirname,'../Templating')
app.set('view engine', 'ejs')
app.use(express.static(locat))
app.use(bodyParser.urlencoded({ extended: true }));

const register = (req,res)=>{
    var sql = "insert into participants values (?,?,?,?,null)"
    db.query(sql,[
        req.body.name,
        req.body.email,
        req.body.phoneNumber,
        bcrypt.hashSync(req.body.password,5)
    ],(err,result)=>{
        if(err)
        throw err;
        console.log(result)
    })
    res.redirect('/')
}
module.exports = register