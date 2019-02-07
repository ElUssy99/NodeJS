let express = require('express');
var bodyParser = require('body-parser');
let app = express();

var urlencodeParser = app.use(bodyParser.urlencoded({ extended: false }))

var users = {
  "david" : "123",
  "adri" : "456",
  "marc" : "789",
  "jaime" : "101"
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

app.listen(4000, () => console.log('Example app listening on port 4000!'));
