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
    if(req.session.participant)
    res.redirect('/participant')
    else{
    var sql = "insert into participants values (?,?,?,?,null)"
    db.query(sql,[
        req.body.name,
        req.body.email,
        req.body.phoneNumber,
        bcrypt.hashSync(req.body.password,5)
    ],(err,result)=>{
        if(err)
        {
            error = err.sqlMessage
            if(error.includes('Part_Phone')){
                res.render('register',{message:'This phone number already exists'})
            }
            if(error.includes('Part_Email')){
                res.render('register',{message:'This email already exists'})
            }
            // if(err.('phone')){
            //     res.render('register',{messsage:'This phone number already exists'})
            // }
        }
        else{
        req.session.participant = result.insertId
        console.log(req.session.participant)
        res.redirect('/participant')
        }
    })
    }
}
module.exports = register