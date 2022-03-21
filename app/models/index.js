const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const Book = require("./book.model");
const Author = require("./author.model");

const dbSequelize = new Sequelize(dbConfig.database, dbConfig.db_user, dbConfig.db_password, {
  host: dbConfig.db_host,
  port: dbConfig.db_port,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.dbSequelize = dbSequelize;

db.Book = Book(dbSequelize, Sequelize);
db.Author = Author(dbSequelize, Sequelize);

module.exports = db;
