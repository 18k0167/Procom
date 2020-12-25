const path = require('path')
const express = require('express')
const jade = require('jade')
const db = require('../connection/database')
const getlogin = require('../api/getlogin')
const login = require('../api/login')
const getregister = require('../api/getregister')
const register = require('../api/register')
const getmemberslogin = require('../api/getmemberslogin')
const memberlogin = require('../api/memberlogin')
const show = require('../api/showparticipants')
const competitions = require('../api/competitions')
const geteditcompetitions = require('../api/geteditcompetitions')
const editcompetitions = require('../api/editcompetitions')
const getaddcompetitions = require('../api/getaddcompetitions')
const addcompetions = require('../api/addcompetitions')
const getadmin = require('../api/getadmin')
const showmember = require('../api/showmember')
const getmemberedit = require('../api/getmemberedit')
// const deletecompetition = require('../api/deletecompetition')
const getdeletecompetition = require('../api/getdeletecompetition')
const getaddmember = require('../api/getaddmember')
const addmember = require('../api/addmember')
const geteditmember = require('../api/geteditmember')
const editmember = require('../api/editmember')
var bodyParser = require('body-parser');
const emailverifier = require('email-verifier')
var router = express.Router();
const app = express()
// app.use('/showparticipants',show);
const locat = path.join(__dirname,'../public')
// const viewspath = path.join(__dirname,'../Templating')
app.set('view engine', 'ejs')
app.use(express.static(locat))
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);
// app.set('view engine', 'hbs')
// app.set('views', viewspath)
app.get('/',(req,res)=>{
    res.render('index')
})
// app.get('/login',(req,res)=>{
//     res.render('login')
// })
app.get('/about',(req,res)=>{
    res.render('about')
})
router.get('/login',getlogin)
// app.post('/login',(req,res)=>{
//     res.send('posted')
// })
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
router.post('/login',login)
//router.get('/memberslogin',getmemberslogin)
router.get('/memberslogin',getmemberslogin)
router.post('/memberslogin',memberlogin)
router.get('/register',getregister)
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
router.post('/register',register)
app.post('/admin',(req,res)=>{
    var sql = "insert into members values(?,?,?,?,?)"
    db.query(sql,[

    ],(err,result)=>{
        if(err)
        throw err
        console.log(result)
    })   
    res.redirect('/admin')
})
router.get('/showparticipants',show)
router.get('/admin/competitions',competitions)
router.get('/admin/competition/edit/:id',geteditcompetitions)
router.post('/admin/competition/edit/:id',editcompetitions)
router.get('/admin/competition/add',getaddcompetitions)
router.post('/admin/competition/add',addcompetions)
router.get('/admin',getadmin)
router.get('/admin/member',showmember)
router.get('/admin/member/edit:id',getmemberedit)
router.get('/admin/competition/delete/:id',getdeletecompetition)
router.get('/admin/member/add',getaddmember)
router.post('/admin/member/add',addmember)
router.get('/admin/member/edit/:id',geteditmember)
router.post('/admin/member/edit/:id',editmember)
router.get('/participant',(req,res)=>{
    res.render('participant')
})
router.get('/part',(req,res)=>{
    res.render('registerteam')
})
// router.post('/admin/competition/delete/:id',deletecompetition)
// app.get
    // console.log(req.body.email) 
        // // console.log(req.body.email)
        // console.log(req.body.phoneNumber) 
        // console.log(req.body.password)        
// app.post('/register',(req,res)=>{
//     db.query("insert into paricipants values(1,req.body.name,req.body.phoneNumber,req.body.email,req.body.password,3)",
//     (err,result)=>{
//         res.send("Data Inserted")
//     })
// })
// db.query("SELECT * FROM participants",(err, result, fields)=> {
//     if (err) throw err;
//     console.log(result);
// })
app.listen(3000,()=>{
    console.log('Server is upto on 3000')
})