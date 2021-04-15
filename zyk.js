const express = require('express')
const app = express()
const port = 8080


var mysqli = require('mysql')
var connection = mysqli.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'edu2008'
})
app.get('/user',function(req,res){
    res.send('你好，欢迎访问用户界面')
})
app.get('/users',function(req,res){
    connection.query(`select user_id,user_name from p_users limit 10`,function(errot,results,fields){
        res.send(results)
    })
})

app.get('/find',function(req,res){
    req.query
    // connection.query()
})

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.get('/list',(req,res)=>{
    res.send('欢迎访问 展示页面')
})

app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`)
})