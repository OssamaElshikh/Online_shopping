var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
res.render('login.ejs');
});

app.post('/',function(req,res){
  res.render('home');
  });
  
app.post('/',function(req,res){
  res.render('phones');
});

app.listen(3000);

