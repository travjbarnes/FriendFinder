var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

var PORT = process.env.PORT || 8080;

//app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ type: 'application/*+json' }));

//app.use(bodyParser.raw({type: 'application/vnd.api+json' }));
app.use(bodyParser.raw({type: 'application/vnd.custom-type' }));

app.use(bodyParser.text({type: 'text/html'}))

require("./app/routing/html-routes.js")(app);
require("./app/routing/api-routes.js")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
  });



// module.exports = function(app) {

//   app.get("/api/reservation", function(req, res) {
//     res.json(tableData);
//   });

//   app.get("/api/tables", function(req, res) {
//     res.json(waitListData);
//   });