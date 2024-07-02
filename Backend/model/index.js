const dbConfig = require("../Config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  port: 3306,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// importing model files
db.users = require("./userModel")(sequelize, DataTypes);

sequelize
  .authenticate()
  .then(async () => {
    console.log("CONNECTED!!");
    // check if admin exists or not
    // seedAdmin(db.users);
  })
  .catch((err) => {
    console.log("Error" + err);
  });

db.sequelize.sync({ force: false }).then(() => {
  console.log("yes re-sync done!!");
});

module.exports = db;