const db = require("../models");
const inenl = db.inenl;
const municipiosNuevoLeon = db.municipiosNuevoLeon;
const Op = db.Sequelize.Op;



exports.getDireccionNuevoLeon = (req, res) => {
  inenl.findOne({
    attributes: ['calle', 'int', 'ext', 'cp', 'e', 'm'],
    where: { curp: req.params.curp }
  }).then(data => {
    res.send(data);
    municipiosNuevoLeon.findOne({
      attributes: ['nombreEntidad', 'nombreMunicipio'],
      where: { entidad: data.e, municipio: data.m }
    }).catch(err => {
      res.status(500).send({
        message: err
      });
      console.log("aqui");
    });
  });
};
