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

const getdeletecompetition = (req,res)=>{
    var sql = "delete from competitions where comp_id = ?"
    db.query(sql,[
        req.params.id
    ],(err,result)=>{
        res.redirect('/admin/competitions')
    })
}
module.exports = getdeletecompetition