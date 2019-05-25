var express = require('express');
var path = require('path');
var app = express();
var engine = require('ejs-locals');

app.engine('ejs', engine);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get('/',function(req,res){
    res.render('index');
})

app.get('/public',function(req,res){
    res.render('index');
})

app.get('/login',function(req,res){
    res.render('index');
})

app.get('/protected',function(req,res){
    res.render('index');
})

app.use(function(req,res,next){
    res.status(404).send('抱歉! 您的頁面找不到');
})

app.use(function(err,req,res,next){
    res.status(500).send('程式有些問題, 請稍後嘗試');
})

var port = process.env.PORT || 9000;
app.listen(port);