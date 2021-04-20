const express=require('express')  // 引入 api 接口 模块
const bodyParser=require('body-parser')  //引入body - parse 用来解析收到的 post 数据
const mysql = require('mysql') //引入 数据库模块
const app=express()   //调用express
const port= 8080 //服务器 运行端口

//连接 数据库
 var connection = mysql.createConnection({
    host    :'127.0.0.1',
    user    :'root',
    password:'123456',
    database:'edu2008'
})
//设置夸域问题
app.all('*',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-type",)
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,OPTIONS,DELETE")
    res.header("Content-Type","application/json;charset=utf-8");
    next();
})
app.use(bodyParser.json())

//登录验证接口
app.post('/user/login',function (req,res) {
  console.log(req.body)
    var the_res =req.body
    var key1 = []
    var value2 =[]
    for (let [key,value] of Object.entries(the_res)){
        key1.push(key)
        value2.push( value)
    }
   connection.query(`select * from p_users where ${key1[0]} = ${value2[0]}  and  ${key1[1]}=${value2[1]}`,function (error,require,fields) {
       console.log(`select * from p_users where ${key1[0]} = ${value2[0]}  and  ${key1[1]}=${value2[1]}`)
       if (require){
           let response={
               "error":0,
               "msg":"ok",
               "data":{}
           }
           res.send(response)
       }else {
           let response={
               "error":4001,
               "msg":"no",
               "data":{
                errors:"用户名或密码错误"
               }
           }
           res.send(response)
       }

   } )

})
//个人中心
app.get("/user/center",function(req,res){

})

//用户列表
app.get('/user/list',(req,res)=>{
    connection.query(`select * from p_users limit 10`,function (error,require,fields) {
        if (require){
            let response={
                "error":0,
                "msg":"ok",
                "data":{ require }
            }
            res.send(require)
        }else {
            let response={
                "error":4001,
                "msg":"no",
                "data":{
                    errors:"所查用户列表为空"
                }
            }
            res.send(response)
        }
    })



})

app.get('/', (req, res) => {
    res.send()
})

// 用户注册
app.post('/user/reg',function(req,res){
    // 接收post数据
    const body = req.body
    res.send('ok')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})