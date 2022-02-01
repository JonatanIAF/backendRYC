const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
var pKey = fs.readFileSync('./server.key', 'utf8');
var pCert = fs.readFileSync('./server.crt', 'utf8');
const multipart = require ("connect-multiparty");
const multipartMiddleware = multipart();

const app = express();

const db = require("./models");
const Role = db.role;

const options = {
  key: pKey,
  cert: pCert
}

https.createServer(options, app).listen(8080);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.post('/imgUpload', multipartMiddleware, (req, res, next) => {
  var buff = new Buffer(req.body.photo.replace(/^data:image\/(png|gif|jpeg);base64,/,''), 'base64');
  fs.writeFileSync('./imgs/stack-abuse-logo-out.jpeg', buff, {encoding:'utf8'});
});

app.get('/imgs/:name', function (req,res, next) {
  res.sendFile(__dirname + '/imgs/avatar/'+req.params.name);
});

// parse requests of content-type - application/json
app.use(bodyParser.json());
//Futuros cambios
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/*db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  
})*/

db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Servidor online" });
});

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/database.routes')(app);
require('./routes/prospectos.routes')(app);
require('./routes/prospectovr.routes')(app);
require('./routes/prospectonl.routes')(app);
require('./routes/asistencias.routes')(app);
require('./routes/pre-cliente.routes')(app);
require('./routes/ineChiapas12.routes')(app);
require('./routes/ineVeracruz2018.routes')(app);
require('./routes/inenl.routes')(app);