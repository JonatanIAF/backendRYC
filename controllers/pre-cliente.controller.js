const db = require("../models");
const precliente = db.precliente;
const Op = db.Sequelize.Op;

exports.getPreClientes = (req, res) => {
  precliente.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
     message: err});
  });
};

exports.add = (req, res) => {
  precliente.create({
  	idUsuario: req.body.idUsuario,
    nombre: req.body.nombre,
    curp: req.body.curp,
    nss: req.body.nss,
    direccion: req.body.direccion,
    longitud: req.body.longitud,
    latitud: req.body.latitud,
    dirFotos: req.body.dirFotos
  }).then(data => {
    res.send({ message: "Register was registered successfully" });
  }).catch(err => {
  	res.status(500).send({ message: err.message });
  });
};