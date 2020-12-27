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

let pname,pphone,com_id,com_name,min,max
const registerteam = (req,res)=>{
    if(req.session.participant)
    {
        db.query("select *from participants where part_id = ?",[
            req.session.participant
        ],(err,result)=>{
            pname = result[0].Part_Name,
            pphone = result[0].Part_Phone
            db.query("select *from competitions where comp_id = ?",[
                req.params.id
            ],(err,result)=>{
                com_id = result[0].comp_id
                com_name = result[0].comp_name
                min = result[0].min_part
                max = result[0].max_part
                data = result[0]
            var sql = "insert into participation values(?,?,?,?,0)"
            db.query(sql,[
                req.body.teamName,
                req.session.participant,
                com_id,
                com_name
            ],(err,result)=>{
                if(err!=null)
                {
                    error = err.sqlMessage
                    if(error.includes('PRIMARY'))
                    res.render('registerteam',{message:'Team Name already exists',ComData:data})
                }
                else{
                    var count = Object.keys(req.body).length
                    if(count>2){
                    var count1 = Object.keys(req.body.namemember).length
                    console.log(count1)
                    if(count==4){
                    db.query("insert into teams values(?,?,?)",[
                        req.body.namemember,
                        req.body.teamName,
                        req.body.phonemember
                        ],(err,result)=>{
                            if(err){
                            console.log(err)
                            error  = err.sqlMessage
                            if(error.includes('phone'))
                            res.render('registerteam',{message:'Phone number already eisits',ComData:data})
                            }
                         })
                        }
                        else{
                    for (var i = 0; i<count1; i++){
                        db.query("insert into teams values(?,?,?)",[
                        req.body.namemember[i],
                        req.body.teamName,
                        req.body.phonemember[i]
                        ],(err,result)=>{
                            if(err){
                            console.log(err)
                            error  = err.sqlMessage
                            if(error.includes('phone'))
                            res.render('registerteam',{message:'Phone number already eisits',ComData:data})
                            }
                         })
                        }
                        }
                        res.redirect('/participant')
                }
                else{
                    db.query("insert into teams values(?,?,?)",[
                        pname,
                        req.body.teamName,
                        pphone
                    ],(err,result)=>{
                        if(err){
                            console.log(err)
                            res.render('registerteam',{ComData:data})
                        }
                        res.redirect('/participant')
                    })
                }
                }
            })
            })
        })
    }
    else{
        res.redirect('/login')
    }
    
}
module.exports = registerteam