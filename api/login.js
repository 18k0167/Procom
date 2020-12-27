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

const login = (req,res)=>{
    console.log(req.session.participant)
    if(req.session.participant)
    res.redirect('/participant')
    else{
    var check =  false
    var sql = "select *from participants where Part_Email = ?"
    db.query(sql,[
        req.body.email
    ],(err,result)=>{
        // if(err)
        // throw err
        // console.log(bcrypt.hashSync(req.body.password,5))
        // if(result.length>0){
        // res.redirect('/')
        // }
        // else 
        // res.redirect('/login')
        if(result.length>0){
        check = bcrypt.compareSync(
                req.body.password,
                result[0].Part_Password,
                (err,res)=>{
                    if(err)
                    res.redirect('/login')
                })
        if(check)
        {
            req.session.participant = result[0].Part_Id
            console.log(req.session.participant)
            res.redirect('/participant')
        }
        }
        else
            res.redirect('/login')
    })
}
}
module.exports = login