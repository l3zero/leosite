const url = require('url');
const sqlite = require('./public/scripts/sqlite');
const devApi = require('./public/scripts/devapi');
const bodyParser = require('body-parser');
const path = require('path');
// const schedule = require('node-schedule');
const express = require('express'), ejs = require('ejs');

const app = express();
app.use(express.static('public')); //For serving css, js, imgs..
app.use(bodyParser.urlencoded({ extended: true }));

//Setup express app
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

//Setup DB and retrieve info
let songUrl, videoUrl;
let db = sqlite.setup();
sqlite.getSong(db, (song) => { songUrl = song; });
sqlite.getVideo(db, (vid) => { videoUrl = vid; });
sqlite.closeDB(db);

//Dev API trending article pull
let articleInfo = []; //Array with url, title, image, likes
devApi.grabArticle((info) => { articleInfo = [...info]; });

//Index
app.get('/', (req, res) => {
  app.render('index', {songUrl: `${songUrl}`, videoUrl: `${videoUrl}`, articleTitle: `${articleInfo[1]}`, articleImageUrl: `${articleInfo[2]}`, articleUrl: `${articleInfo[0]}`, articleLikes: `${articleInfo[3]}`}, function (err, html) {
    res.set('Cache-Control', ['public', 'max-age=2419200']);
    res.send(html);
  });
});
//Resume
app.get('/resume', (req, res) => {
  app.render('resume', function (err, html) {
    res.set('Cache-Control', ['public', 'max-age=2419200']);
    res.send(html);
  });
});
//Resume PDF Download
app.get('/resume/:file(*)', (req,res) => {
  let file = req.params.file;
  let fileLocation = path.join('./public/images', file);
  console.log(fileLocation);
  res.download(fileLocation, file, (err) => {
    console.log("Error downloading PDF file");
    // res.redirect(301,'/resume');
  })
})

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