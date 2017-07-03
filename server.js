var express = require('express')
var app = express();
	app.set('port', 8080);
	app.use(express.static(__dirname));
	
app.get('*',  function (req, res) {
  res.sendFile('index.html', { root: __dirname})
})
app.listen(8080);