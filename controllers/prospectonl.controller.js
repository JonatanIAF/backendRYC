const db = require("../models");
const prospectonl = db.prospectonl;
const Op = db.Sequelize.Op;

exports.findByCond = (req, res) => {
  const cond = req.params.cond;
  if(cond == 'siperono'){
    prospectonl.findAll({
      where: { aplica: 'no', montolinea4 : { [Op.ne]: null}}
    }).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:err
      });
    });
  }else{
    prospectonl.findAll({
      where: { aplica: cond }
    }).then(data => {
      res.send(data);
    }).catch(err => {
      res.status(500).send({
        message:err
      });
    });
  }
};

exports.updatePrecalif = (req, res) => {
  const id = req.params.id;
  prospectonl.update({precalif : true, direccion : req.body.direccion, anotacion : req.body.anotacion},
   {
    where: { id: id }
  }).then(num => {
    if (num == 1) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  }).catch(err => {
    res.sendStatus(500);
  });
};

exports.getByRange = (req, res) => {
  prospectonl.findAll({
    where: {aplica: 'si', precalif: 'false'},
    offset: req.params.inferior, limit: req.params.superior
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:err
    });
  });
};



exports.getAll = (req, res) => {
  prospectonl.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message:err
    });
  });
};

exports.add = (req, res) => {
  prospectonl.create({
    superId: req.body.superId,
    nombre: req.body.nombre,
    nss: req.body.nss,
    fechaNacimiento: req.body.fechaNacimiento,
    montolinea4: req.body.montolinea4,
    montolinea2: req.body.montolinea2,
    descMensual: req.body.descMensual,
    aplica: req.body.aplica,
    excepcion: req.body.excepcion
  }).then(data => {
    res.send({ message: "Register was registered successfully" });
  }).catch(err => {
      console.log(err)
      res.status(500).send({ message: err.message });
  });

};
