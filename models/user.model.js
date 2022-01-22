module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("usuarios", {
    nombre: {
      type: Sequelize.STRING
    },
    horaEntrada: {
      type: Sequelize.STRING
    },
    precalifData: {
      type: Sequelize.STRING
    },
    diaslaborados: {
      type: Sequelize.INTEGER
    },
    retardos: {
      type: Sequelize.INTEGER
    },
    salario: {
      type: Sequelize.DOUBLE
    },
    bonoQuincenal: {
      type: Sequelize.DOUBLE
    },
    bonoMensual: {
      type: Sequelize.DOUBLE
    },
    username: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    rol: {
      type: Sequelize.STRING
    },
    avatar: {
      type: Sequelize.STRING
    },
  });
  return User;
};