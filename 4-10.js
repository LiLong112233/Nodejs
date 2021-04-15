const ax =require("axios")
const url =" http://vue.api.comcto.com/api/helloworld.php"
ax.get(url).then(function (d) {
    console.log(d.status)
    console.log(d.data)
})

















const pwd1 =" http://vue.api.comcto.com/api/password1.php"
ax.get(pwd1).then(function (d) {
    // console.log(d.status)
    console.log(d.data)
})
const pwd2 =" http://vue.api.comcto.com/api/password2.php"
ax.get(pwd2).then(function (d) {
    // console.log(d.status)
    console.log(d.data)
})
const pwd3 =" http://vue.api.comcto.com/api/password3.php"
ax.get(pwd3).then(function (d) {
    // console.log(d.status)
    console.log(d.data)
})
const pwd4 =" http://vue.api.comcto.com/api/password4.php"
ax.get(pwd4).then(function (d) {
    // console.log(d.status)
    console.log(d.data)
})


