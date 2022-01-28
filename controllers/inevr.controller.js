const db = require("../models");
const ineVeracruz2018 = db.ineVeracruz2018;
const municipiosChiapas = db.municipiosChiapas;
const Op = db.Sequelize.Op;


exports.getDireccionVeracruz = (req, res) => {
  ineVeracruz2018.findOne({
    attributes: ['calle', 'int', 'ext', 'cp', 'e', 'm'],
    where: { curp: req.params.curp }
  }).then(data => {
    municipiosChiapas.findOne({
      attributes: ['nombreEntidad', 'nombreMunicipio'],
      where: { entidad: data.e, municipio: data.m }
    }).then(data2 => {
      data.e = data2.nombreEntidad;
      data.m = data2.nombreMunicipio;
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message: err    });
        console.log("aqui");
    });
  }).catch(err => {
    res.status(500).send({
      message: err    });
  });

};

