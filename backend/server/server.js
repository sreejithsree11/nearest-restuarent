'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Load the environment variables for the application
var os = require('os');
require('dotenv').config({
  path: os.homedir() + '/honestfood.env',
});
// const MongoClient = require('mongodb').MongoClient;
// const uri = 'mongodb+srv://sreep-y123:6zvjHswgYykFFvdc@cluster1-didrx.mongodb.net/test?retryWrites=true';
// MongoClient.connect(uri, { useNewUrlParser: true }, function(err, client) {
//   if(err) {
//        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//   }
//   console.log('Connected...');
//   // const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
