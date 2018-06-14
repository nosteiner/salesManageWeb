
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mysql= require('mysql');



// Get our API routes
const api = require('./server/routes/api');
const customersApi = require('./server/routes/customersApi');
const compeniesApi = require('./server/routes/companiesApi');

// Get Data access
const connection = require('./server/Data-Access/DA');
const compenyDA = require('./server/Data-Access/CompenyDA');
const customerDA = require('./server/Data-Access/CustomerDA');

const app = express();



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'node_modules')));


// Set our api routes
app.use('/api/customers', customersApi);
app.use('/api/compenies', compeniesApi);
app.use('/', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);


/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = app;