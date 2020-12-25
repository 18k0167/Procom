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

const getaddmember = (req,res)=>{
    var sql = "select comp_id,comp_name from competitions order by comp_id"
    // sql+="select departement_name,department_id from departments"
    db.query(sql,(err,result)=>{
    res.render('addmember',{title:'competitions',CompetitionData:result})
    })   
    // res.render('addmember')
}
module.exports = getaddmember