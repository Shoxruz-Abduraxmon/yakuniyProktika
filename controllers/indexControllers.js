var mysql = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});

module.exports = (app) => {


app.get('/', (req, res) => {
    res.render('index');
});


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Register'
});

app.post('/login', urlencodedParser, (req, res) => {
    var login = req.body.login;  
    var pwd = req.body.pwd;  
  
    connection.connect( (err) => 
        {
          if (err) throw err;
          
          console.log("serverga ulandi!");
  
          connection.query("SELECT * FROM users WHERE login ='"+login+"'",  (err, result, fields) => {
              console.log(result);
              res.render('profile', {data: result});
          });
  
      });
  });

}