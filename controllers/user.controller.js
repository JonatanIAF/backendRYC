const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;



exports.getUsersAttendance = (req, res) => {
  User.findAll({
    where: { rol : { [Op.ne]: 'Director'}},
    order: [['id', 'ASC'],],
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err    });
  });
};

exports.getUsersAttendanceAsistencia = (req, res) => {
  const id = req.params.id;
  User.update({diaslaborados : req.body.diaslaborados, retardos : req.body.retardos},
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

