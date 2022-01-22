const db = require("../models");
const Database = db.database;

exports.findIndexDatabase = (req, res) => {
  const name = req.params.name;
  Database.findAll({
    where: { name: name }
  }).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: "Error retrieving register with name= " + name
    });
  });
};

exports.register = (req, res) => {
  // Save User to Database
  Database.create({
    name: req.body.name,
    index: req.body.index,
  }).then(data => {
    res.send({ message: "Database was registered successfully" });
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.update = (req, res) => {
  const id = req.params.id;
  Database.update(req.body, {
    where: { id: id }
  }).then(num => {
    if (num == 1) {
      res.send({
        message: "Database was updated successfully."
      });
    } else {
      res.send({
        message: `Cannot update Database with id=${id}. Maybe Database was not found or req.body is empty!`
      });
    }
  }).catch(err => {
    res.status(500).send({
      message: "Error updating Database with id=" + id
    });
  });
};