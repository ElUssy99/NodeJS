let express = require('express');
let app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/', function (req, res){
	res.send("rebut");
});

app.listen(4000, () => console.log('Example app listening on port 4000!'));
