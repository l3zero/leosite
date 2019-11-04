const express = require('express'), ejs = require('ejs'), url = require('url'), bodyParser = require('body-parser'), helmet = require('helmet');
const leoRouter = require('./public/scripts/leoRouter');

const app = express();
app.use(express.static('public')); //For serving css, js, imgs..
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use('/', leoRouter);

//Setup express app
app.set('views', './views');
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

const server = app.listen(8001, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });