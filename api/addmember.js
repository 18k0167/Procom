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

let dep_id,com_id;
const addmember = (req,res)=>{
    db.query("select comp_id from competitions where comp_name = ?",[
        req.body.comp_name
    ],(err,result)=>{
        com_id = result[0].comp_id
        db.query("select Department_id from departments where Department_name = ?",[
            req.body.dept_name
        ],(err,result)=>{
            dep_id = result[0].Department_id
            if(req.body.dept_name=='PR Team'){
                var sql = "insert into members values(?,?,?,?,?)"
                db.query(sql,[
                req.body.name,
                req.body.id,
                req.body.pheonName,
                dep_id,
                com_id
            ],(err,result)=>{
                if(err)
                throw err
                res.redirect('/admin/member')
            })
        }
            else{
            var sql = "insert into members values(?,?,?,?,null)"
        db.query(sql,[
            req.body.name,
            req.body.id,
            req.body.pheonName,
            dep_id
        ],(err,result)=>{
            if(err)
            throw err
            res.redirect('/admin/member')
        })
        }
        })
    })   
}
module.exports = addmember