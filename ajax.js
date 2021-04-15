
const a =44
 const  b =88
   const c =a+b
  console.log(c)

/******nodejs 中发起http请求的方式 */
/***http标准库 */
const https = require("https");
https.get("http://vue.api.comcto.com/api/helloworld.php", resp => {
    let data = "";
    resp.on("data", function(chunk) {
        data += chunk;
    });
    resp.on("end", () => {
        sendDataToWeb(JSON.parse(data).url);
    });
    resp.on("error", err => {
        console.log(err.message);
    });
});

/*****
 *  Request 请求*
 * 安装 npm install request@XXX -S
 * 如果想使用Promise可以引入requset-promise
 */
const request = require("request");
request(
    " http://vue.api.comcto.com/api/helloworld.php",
    { json: true },
    (err, res, body) => {
        if (err) {
            return console.log(err);
        }
        console.log(body.url);
        sendDataToWeb(body.url);
    }
);

/******
 * axios
 * 基于promise的http客户端可以用于浏览器和客户端
 * 安装：npm install axios@XXX
 */
const axios = require("axios");
axios
    .get(" http://vue.api.comcto.com/api/helloworld.php")
    .then(res => {
        console.log(res.data.url);
        sendDataToWeb(res.data.url);
    })
    .catch(err => {
        console.log(err);
    });

/****利用axios发送多次请求 */

axios
    .all([
        axios.get(
            " http://vue.api.comcto.com/api/helloworld.php"
        ),
        axios.get(
            " http://vue.api.comcto.com/api/helloworld.php"
        ),
        axios.get(
            " http://vue.api.comcto.com/api/helloworld.php"
        )
    ])
    .then(
        axios.spread((res1, res2, res3) => {
            console.log(res1.data.url);
            console.log(res2.data.url);
            console.log(res3.data.url);
            sendDataToWeb(res3.data.url);
        })
    )
    .catch(err => {
        console.log(err);
    });

/****
 *  superAgent
 *  主要应用与浏览器中ajax请求同样也使用与nodejs中
 * 安装：npm install superagent@XXX -S
 * 可以进行链式调用
 *
 */
const superagent = require('superagent');
superagent.get('https://api.nasa.gov/planetary/apod')
    .query({ api_key: 'DEMO_KEY', date: '2017-08-02' })
    .end((err, res) => {
        if (err) { return console.log(err); }
        console.log(res.body.url);
        console.log(res.body.explanation);
    });












