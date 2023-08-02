"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(path.resolve("build/config", "config.js"))[env];

const db = {};
const databases = Object.keys(config.databases);

for (let i = 0; i < databases.length; ++i) {
  let database = databases[i];
  let dbPath = config.databases[database];
  if (config.use_env_variable) {
    db[database] = new Sequelize(process.env[config.use_env_variable], config);
  } else {
    db[database] = new Sequelize(
      dbPath.database,
      dbPath.username,
      dbPath.password,
      dbPath
    );
  }
}

for (let i = 0; i < databases.length; ++i) {
  let database = databases[i].toLowerCase();
  fs.readdirSync(`${__dirname}/${database}`)
    .filter((file) => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
      );
    })
    .forEach((file) => {
      const model = require(path.join(`${__dirname}/${database}`, file))(
        db[databases[i]],
        Sequelize.DataTypes
      );

      db[model.name] = model;
    });
}

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

module.exports = db;
