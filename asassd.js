// const  axiox =request("axios")
// axiox.get (" http://vue.api.comcto.com/api/helloworld.php").then(function (response) {
// console.log(response)
// })


var request = require('request');
request(' http://vue.api.comcto.com/api/helloworld.php', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the baidu homepage.
    }
})

