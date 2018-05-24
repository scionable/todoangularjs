const express = require('express');
const mongoose = require('mongoose');
// const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();

app.use(express.static(__dirname + '/assets'));                // set the static files location /assets/img will be /img for users
// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended': 'true', limit: '50mb'}));          // parse application/x-www-form-urlencoded
app.use(bodyParser.json({limit: '50mb'}));                                    // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json',limit: '50mb'}));  // parse application/vnd.api+json as json
app.use(methodOverride());


mongoose.connect('mongodb://localhost/test')
	.then(() => console.log('connected'))
	.catch(() => console.log('error'));

require('./api/routes/routes')(app);

app.listen(7000);