var express = require("express");
var bodyParser = require("body-parser");

var app = express();

var PORT = process.env.PORT || 8080;

var jsonParser = bodyParser.json();

var urlencodedParser = bodyParser.urlencoded({extended:false})



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

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