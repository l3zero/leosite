var url = require('url');
var bodyParser = require('body-parser');
var express = require('express'),
  ejs = require('ejs');

var app = express();
app.use(express.static('public')); //For serving css, js, imgs..
app.use(bodyParser.urlencoded({ extended: true }));

//Setup express app
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

//Main page route
app.get('/', function (req, res) {
  app.render('index.html', function (err, renderedData) {
    res.send(renderedData);
  });
});

app.get('/resume', function (req, res) {
  app.render('resume.html', function (err, renderedData) {
    res.send(renderedData);
  });
});

//Routes to handle illegal calls -@TODO all old stuff below, just keeping for reference
/*app.get('/error', function (req, res) {
  app.render('error_page.html', function (err, renderedData) {
    res.send(renderedData);
  });
});
app.get('/add', function (req, res) {
  res.redirect('/error');
});
app.get('/subtract', function (req, res) {
  res.redirect('/error');
});*/

const server = app.listen(8001, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });