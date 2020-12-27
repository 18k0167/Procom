const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({ 
    secret: 'thiskey123',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))
app.get('/',(req,res)=>{
    console.log(req.session)
    res.send("Hello World")
})
app.listen(5000,()=>{
    console.log('App running')
})