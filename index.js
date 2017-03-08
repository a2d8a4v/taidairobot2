module.exports = require('./lib/linebot');
var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: '1504673238',
  channelSecret: '50204be21e06c51429166d2b2f56694c',
  channelAccessToken: '5j4XzPkh7g9ss9Fpw3cWVIxjdFrn4aPBoZBC96x/Qgx2jbSo4kqY5Go1zjbDT9HVvjYmJf8s18fJurR48M58sTsOpdO2S9HsKw+DBba6xuoVPsv/FNnCd6rAXls1uN5MeaS1GSR2elKT6KS5uIaGqgdB04t89/1O/w1cDnyilFU='
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});