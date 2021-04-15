var mysqli =require('mysql')

var connection = mysqli.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'edu2008'
})

connection.query("select * from p_course",function (error,results,fields) {
   if (!error==null){
       console.log(error)
   }else {
       console.log(results)
   }

})

