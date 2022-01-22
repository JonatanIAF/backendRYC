module.exports = (sequelize, Sequelize) => {
  const Database = sequelize.define("databases", {
    name: {
      type: Sequelize.STRING
    },
    index: {
      type: Sequelize.STRING
    }
  });
  return Database;
};