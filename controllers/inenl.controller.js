const db = require("../models");
const inenl = db.inenl;
const municipiosNuevoLeon = db.municipiosNuevoLeon;
const municipiosChiapas= db.municipiosChiapas;
const Op = db.Sequelize.Op;



exports.getDireccionNuevoLeon = (req, res) => {
  inenl.findOne({
    attributes: ['calle', 'int', 'ext', 'cp', 'e', 'm'],
    where: { curp: req.params.curp }
  }).then(data => {
    res.send(data);
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
