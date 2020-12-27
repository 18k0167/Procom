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

const selectcompetition = (req,res)=>{
    if(req.session.participant)
    {
        var sql = "select *from competitions"
        db.query(sql,(err,result)=>{
            res.render('selectcompetition',{CompetitionData:result})
        })
    }
    else
    res.redirect('/login')
}
module.exports = selectcompetition