let express = require('express');
var bodyParser = require('body-parser');
let app = express();

var urlencodeParser = app.use(bodyParser.urlencoded({ extended: false }))

var users = {
  "david" : "123",
  "adri" : "456",
  "marc" : "789",
  "roger" : "101"
};

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', function (req, res){
  for(var item in users){
    if(item == req.body.usuario && users[item] == req.body.contra){
      res.send("El usuario es correcto. Hola " + req.body.usuario + ".");
      return;
    }
    res.send("El usuario es incorrecto.");
  }
});

app.get('/api/login/:user/:pass', function (req, res){
  for(var item in users){
    if(item===req.params.user && users[item]===req.params.pass){
      var msgOK = {"status":"OK"};
      res.send(JSON.stringify(msgOK));
      return;
    }
  }
  var msgFail = {"status":"ERROR"};
  res.send(JSON.stringify(msgFail));
});

app.listen(process.env.PORT, () => console.log('Example app listening on port 4000!'));
