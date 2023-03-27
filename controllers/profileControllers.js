var mysql = require('mysql');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended : false});

module.exports = (app) => {

app.get('/profile', (req, res) => {
    res.render('profile');
});


}
