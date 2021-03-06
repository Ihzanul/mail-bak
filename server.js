require('./models/db');

const express = require('express');
const path = require('path');
const exphbs =require('express-handlebars');
const bodyparser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const mailController = require('./controllers/mailController');

var app = express();

app.use(bodyparser.urlencoded({
    extended: true    
}));
app.use(multer({dest: __dirname+'/uploads/'}).single('draw'));
app.use(bodyparser.json());
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
app.use('/', mailController);