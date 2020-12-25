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

const editcompetitions = (req,res)=>{
    console.log(req.body)
    var sql = "update competitions set comp_name=?,min_part=?,max_part=?,price=? where comp_name=?"
    db.query(sql,[
        req.body.name,
        req.body.MinNumber,
        req.body.MaxNumber,
        req.body.Price,
        req.body.name
    ],(err,result)=>{
        if(err)
        throw err
        console.log(req.params.id)
        res.redirect('/admin/competitions')
    })
}
module.exports = editcompetitions