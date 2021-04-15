var mysql =require('mysql');

var connection = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password:'123456',
    database:'edu2008'
})
//查找
function select() {
  connection.connect(function (err) {
   if(err){
       console.error('error connecting:'+err.stack)
   }
   console.log('connected as id'+connection.threadId)
  })
  connection.query('SELECT * FROM p_course ',function (error,results,fields) {
     if (error) throw  error;
     console.log('The solution is:',results)
  });
  connection.end()
}
var mysql_res = select()
//增加
// var data = Date
// console.log('jhhh',data)
function add() {
   let post ={
    id:3,
    uid:1,
    course_id:1,
    score_num:1,
    score_text:'aaa',
   }
 let query =connection.query("INSERT  INTO course_score SET ?",post ,function (error,results,fields) {
  if (error) throw  error;
 })
console.log(query.sql);
}
// add()
//修改
function updeate() {
  connection.connect(function (err) {
   if (err){
       console.log('error connecting:'+err.stack);
   }
   console.log('connected as id' + connection.threadId )
  })
    connection.query('UPDATE course_score SET uid =? where id=?',['update',1],function (error,results,fields) {
         if (error)throw  error;
        console.log('changed:'+results.changeRows+"rows");
    })
    connection.end()
}
 // updeate()







