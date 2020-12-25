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


const competitions = (req,res)=>{
    var sql = "select *from competitions"
    db.query(sql,(err,result)=>{
        res.render('competitions',{title:'Competitions',CompetitionData:result})
    })
    
}

module.exports = competitions;