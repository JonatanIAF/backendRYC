const db = require("../models");
const Asistencias = db.asistencias;
const Op = db.Sequelize.Op;

exports.create = (req, res) => { 
  Asistencias.create({
    idUsuario : req.body.idUsuario,
    data : req.body.data,
  }).then(data => {
    res.send(data);
  }).catch(err => {
    console.log(err)
    res.status(500).send({ message: err.message });
  });
};

exports.findById = (req, res) => {
  const id = req.params.id;
  Asistencias.findAll({
  	attributes: ['data'],
    where: { idUsuario: id}
  }).then(data => {
    res.send(data);
   }).catch(err => {
     res.status(500).send({
      message: "Error retrieving data"
    });
  });
};

exports.getBusinessDays = (req, res) => {
  const idUsuario = req.params.idUsuario;
  const startDate = req.params.startDate;
  const endDate = req.params.endDate;
  Asistencias.count({
    where: { idUsuario: idUsuario, "createdAt" :{[Op.between] : [startDate , endDate ]}, data:{[Op.contains]:{title: "Entrada"}} }
  }).then(c => {
    res.send(c.toString());
   }).catch(err => {
     res.status(500).send({
      message: "Error retrieving data"
    });
  });
};