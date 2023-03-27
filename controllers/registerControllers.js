var mysql = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});

module.exports = (app) => {

app.get('/register', (req, res) => {
    res.render('Register');
});

app.post('/register', urlencodedParser, (req, res) => {
    var name = req.body.name;
    var surname = req.body.surname;
    var email = req.body.email;
    var login = req.body.login;
    var pwd = req.body.pwd;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Register'
});

connection.connect((err)=>
     {
        if (err) throw err;
        
    console.log('serverga ulandi !!!');

    var sql = "INSERT INTO users (name, surname, email, login, pwd) VALUES ('"+name+"', '"+surname+"', '"+email+"', '"+login+"', '"+pwd+"')"; 

    connection.query(sql, (err, result) =>{
        console.log('bitta ustun qo`shildi ');

    });
    res.redirect('/');

});

});


}