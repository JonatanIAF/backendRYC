module.exports = (sequelize, Sequelize) => {
  const precliente = sequelize.define("pre-clientes", {
    idUsuario: {
      type: Sequelize.INTEGER
    },
    nombre: {
      type: Sequelize.STRING
    },
    curp: {
      type: Sequelize.STRING
    },
    nss: {
      type: Sequelize.STRING
    },
    direccion: {
      type: Sequelize.STRING
    },
    longitud: {
      type: Sequelize.STRING
    },
    latitud: {
      type: Sequelize.STRING
    },
    dirFotos: {
      type: Sequelize.STRING
    },
  });
  return precliente;
};