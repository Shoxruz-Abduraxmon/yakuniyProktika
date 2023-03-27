var express = require('express');
var mysql = require('mysql');
const exphbs = require('express-handlebars');
var app = express();
var controller = require('./controllers/indexControllers');
var registerControllers = require('./controllers/registerControllers');
var profileControllers = require('./controllers/profileControllers');


// app.engine('hbs', exphbs({
//     defaultLayout: 'main',
//     extname: '.hbs'
// })
// );

app.set('view engine', 'hbs');

app.use('/assets', express.static('assets'));





controller(app);

registerControllers(app);

profileControllers(app);

app.listen(3000, () => {
    console.log('server open 3000...');
});