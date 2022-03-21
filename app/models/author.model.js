module.exports = (sequelize, Sequelize) => {
  const Author = sequelize.define("author", {
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  });
  return Author;
};
