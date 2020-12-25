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

const showmember = (req,res)=>{
    var sql = "select *from members where dept_id!=6"
    db.query(sql,(err,result)=>{
        res.render('showmembers',{title:'Procom Members',MemberData:result})
    })
}
module.exports = showmember