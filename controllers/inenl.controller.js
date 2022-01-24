const db = require("../models");
const inenl = db.inenl;
const municipiosNuevoLeon = db.municipiosNuevoLeon;
const Op = db.Sequelize.Op;


exports.getDireccionNuevoLeon = (req, res) => {
  inenl.findOne({
    attributes: ['calle', 'int', 'ext', 'cp', 'e', 'm'],
    where: { curp: req.params.curp }
  }).then(data => {
    console.log(data.toJSON());
    municipiosNuevoLeon.findOne({
      attributes: ['nombreEntidad', 'nombreMunicipio']
    }).then(all => {
      console.log(all.toJSON());
    }).catch(err => {
      console.log(err);
    })


  }).catch(err => {
    console.log(err);
  });

};
