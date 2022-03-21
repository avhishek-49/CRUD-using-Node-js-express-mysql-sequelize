module.exports = {
  db_host: "localhost",
  db_port: 3306,
  db_user: "root",
  db_password: "1234",
  database: "steven-smith",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
