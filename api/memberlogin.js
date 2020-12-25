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
const memberslogin = (req,res)=>{
    var sql = "select *from members M,departments D where M.member_id = ? and M.dept_id = D.Department_Id and D.Department_pass = ?"
    db.query(sql,[
    req.body.member_id,
    req.body.password
    ],(err,result)=>{
        console.log(result)
    if(result.length>0)
    {
    if(result[0].Department_name == 'Admins')
    res.redirect('/about')
    else
    res.redirect('/')
}
    })
}
module.exports = memberslogin