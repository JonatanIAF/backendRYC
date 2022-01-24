const db = require("../models");
const ineChiapas12 = db.ineChiapas12;
const municipiosChiapas = db.municipiosChiapas;
const Op = db.Sequelize.Op;



exports.getDireccion = (req, res) => {
  ineChiapas12.findOne({
  	attributes: ['calle', 'int', 'ext', 'cp', 'e', 'm'],
    where: { curp : req.params.curp}
  }).then(data => {
    municipiosChiapas.findOne({
      attributes: ['nombreEntidad', 'nombreMunicipio'],
      where: { entidad : data.e, municipio: data.m}
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
