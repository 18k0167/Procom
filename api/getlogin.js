const path = require('path')
const express = require('express')
const db = require('../connection/database')
var bodyParser = require('body-parser');
const emailverifier = require('email-verifier')
var router = express.Router();

const app = express()
const locat = path.join(__dirname,'../public')
// const viewspath = path.join(__dirname,'../Templating')
app.set('view engine', 'ejs')
app.use(express.static(locat))
app.use(bodyParser.urlencoded({ extended: true }));
const getlogin = (req,res)=>{
    res.render('login')
}
module.exports = getlogin
// app.set('view engine', 'hbs')
// app.set('views', viewspath)
// app.get('/',(req,res)=>{
//     res.render('index')
// })
// app.get('/login',(req,res)=>{
//     res.render('login')
// })
// // app.post('/login',(req,res)=>{
// //     res.send('posted')
// // })
// app.post('/login',(req,res)=>{
//     var sql = "select *from participants where Part_Email = ? and Part_password = ?"
//     db.query(sql,[
//         req.body.email,
//         req.body.password
//     ],(err,result)=>{
//         if(err)
//         throw err
//         res.redirect('/')
//     })
// })
// app.get('/memberslogin',(req,res)=>{
//     res.render('memberslogin')
// })
// app.post('/memberslogin',(req,res)=>{
//     var sql = select *from 
// })
// app.get('/register',(req,res)=>{
//     res.render('register')
//     // console.log(req.body.name)
// })
// app.post('/register',(req,res)=>{
//     var sql = "insert into participants values (?,?,?,?,null)"
//     db.query(sql,[
//         req.body.name,
//         req.body.email,
//         req.body.phoneNumber,
//         req.body.password
//     ],(err,result)=>{
//         if(err)
//         throw err;
//         console.log(result)
//     })
//     res.redirect('/')
// })
//     // console.log(req.body.email) 
//         // // console.log(req.body.email)
//         // console.log(req.body.phoneNumber) 
//         // console.log(req.body.password)        
// // app.post('/register',(req,res)=>{
// //     db.query("insert into paricipants values(1,req.body.name,req.body.phoneNumber,req.body.email,req.body.password,3)",
// //     (err,result)=>{
// //         res.send("Data Inserted")
// //     })
// // })
// // db.query("SELECT * FROM participants",(err, result, fields)=> {
// //     if (err) throw err;
// //     console.log(result);
// // })
// app.listen(3000,()=>{
//     console.log('Server is upto on 3000')
// })