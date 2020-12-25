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
    var sql = "select *from competitions where comp_id=?"
    db.query(sql,[
        req.params.id
    ],(err,result)=>{
        console.log(result)
        res.render('competitionsedit',{title: 'Selected Competition',SelectedCompetition:result[0]})
    })
}
module.exports = editcompetitions;