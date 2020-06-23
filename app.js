const express = require("express"),
  bodyParser = require("body-parser"),
  cors = require('cors'),
  helmet = require("helmet"),
  compression = require("compression")

const app = express();
const corsOptions = {
   allowedHeaders: 'Access-Control-Allow-Headers,Origin, X-Requested-With, Content-Type, Accept',
   origin: '*',
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());
app.use(helmet());
app.use(helmet.referrerPolicy({policy: 'same-origin'}));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || '9000';
app.listen(port);
