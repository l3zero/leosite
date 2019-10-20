var url = require('url');
var bodyParser = require('body-parser');
var express = require('express'), ejs = require('ejs');
const sqlite3 = require('sqlite3').verbose();


var app = express();
app.use(express.static('public')); //For serving css, js, imgs..
app.use(bodyParser.urlencoded({ extended: true }));

//Setup express app
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

//Setup local SQlite DB
let db = new sqlite3.Database('ly_votw.db', sqlite3.OPEN_READONLY, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the local votw database.');
});

//@TODO Change script to find the latest urls; Maybe setup caching too?
let songUrl;
let videoUrl;
let sql = `SELECT URL url FROM sotw WHERE Title = ?`;
db.serialize(() => {
  db.each(sql,['Tycho-Japan'], (err, row) => {
    if (err) {
      console.error(err.message);
    }
    songUrl = row.url;
  });
});
sql = `SELECT URL url FROM votw WHERE Title = ?`;
db.serialize(() => {
  db.each(sql,['Dog-Thing'], (err, row) => {
    if (err) {
      console.error(err.message);
    }
    videoUrl = row.url;
  });
});
//Closing SQLite DB
db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Close the database connection.');
});

//Main page route
app.get('/', function (req, res) {
  app.render('index', {songUrl:`${songUrl}`, videoUrl: `${videoUrl}`}, function (err, html) {
    res.send(html);
  });
});

app.get('/resume', function (req, res) {
  app.render('resume.html', function (err, html) {
    res.send(html);
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