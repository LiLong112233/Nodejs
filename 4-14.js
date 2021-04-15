const express =require('express')  //引用express模块
const app =express()               //调用express
const port=8080                    // 服务器运行的端口
var set_the =this

app.get('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    //方便返回json
    res.header("Content-Type", "application/json;charset=utf-8");
    if (req.method == 'OPTIONS') {
        //让options请求快速返回
        res.sendStatus(200);
    } else {
        next();
    }
});

var mysqli =require('mysql')

var connection = mysqli.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'edu2008'
})
app.get('/user',function (req,res) {
    res.send('你好 ，欢迎 访问 用户界面')
})
app.get('/users',function (req,res) {
        var Bobby=req.query
    console.log(Bobby)
       var key1
       var value2
        for (let [key,value] of Object.entries(Bobby)){
              key1 = key
              value2 =  value
        }
        if (JSON.stringify(Bobby)=="{}"){
            connection.query(`select  user_id ,user_name from p_users  order by user_id asc  limit 10 ` ,function (error,results,fields) {
                if (!error==null){
                    res.send(error)
                }else {
                    res.send(JSON.stringify(results) )
                }
            })
        }else{
            connection.query(`select  user_id ,user_name from p_users where ${key1} = ${value2} limit 10  ` ,function (error,results,fields) {
                console.log(`select  user_id ,user_name from p_users limit 10 where ${key1} = ${value2}  `)
                if (!error==null){
                    res.send(error)
                }else {
                    res.send( results)
                }
            })
        }
})
app.get('/find',function (req,res) {
   var Bobby =req.query
    console.log(Bobby)
    var key
    var value
    for (let [k,v]of Object.entries(Bobby)){
        key=k
        value=v
   }
    if (JSON.stringify(Bobby)=='{}'){
        res.send('11111')
    }else{
        connection.query(`select * from p_users  where ${key} = ${value}`,function (error,results,fields) {
            console.log(error)
            if (!error==null){
                res.send(error)
            }else {
                res.send( results)
            }
        })
    }


})





app.get('/',(req,res)=>{
    res.send('hello World')
})
app.get('/list',(req,res)=>{
    res.send('欢迎访问 展示页面')
})


app.listen(port,()=>{
    console.log(`Example  app listening at htttp://localhost:${port} `)
})






