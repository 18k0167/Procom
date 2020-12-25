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

let dep_id,com_id
const editmember = (req,res)=>{
    db.query("select Department_Id from departments where Department_name = ?",[
        req.body.dept_name
    ],(err,result)=>{
        dep_id = result[0].Department_Id
    db.query("select comp_id from competitions where comp_name=?",[
        req.body.comp_name
    ],(err,result)=>{
        com_id = result[0].comp_id
        if(req.body.name=='PR Team'){
        var sql = "update members set member_phone=?,dept_id=?,competition_id=? where member_id=?"
        db.query(sql,[
            req.body.PhoneNumber,
            dep_id,
            com_id,
            req.params.id
        ],(err,result)=>{
            if(err)
            throw err
            res.redirect('/admin/member')
        })
    }
    else{
        var sql = "update members set member_phone=?,dept_id=?,competition_id=null where member_id=?"
        db.query(sql,[
            req.body.PhoneNumber,
            dep_id,
            req.params.id
        ],(err,result)=>{
            if(err)
            throw err
            res.redirect('/admin/member')
        })
    }
    })
    })
}
module.exports = editmember