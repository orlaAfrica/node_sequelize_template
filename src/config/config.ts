import config from "./index";

const { secrets, dbVariables } = config();

module.exports = {
  development: {
    username: secrets.username,
    password: secrets.password,
    database: secrets.name,
    host: secrets.host,
    port: secrets.port,
    dialect: "postgres",
    dialectOptions: {
      bigNumberStrings: true,
    },
    databases: {
      Customer: {
        username: dbVariables.dbCustomerUsername,
        password: dbVariables.dbCustomerPassword,
        database: dbVariables.dbCustomerName,
        host: dbVariables.dbCustomerHost,
        port: 5432,
        dialect: "postgres",
        dialectOptions: {
          bigNumberStrings: true,
        },
      },
      Auth: {
        username: dbVariables.dbAuthUsername,
        password: dbVariables.dbAuthPassword,
        database: dbVariables.dbAuthName,
        host: dbVariables.dbAuthHost,
        port: 5432,
        dialect: "postgres",
        dialectOptions: {
          bigNumberStrings: true,
        },
      },
      Wallet: {
        username: dbVariables.dbWalletUsername,
        password: dbVariables.dbWalletPassword,
        database: dbVariables.dbWalletName,
        host: dbVariables.dbWalletHost,
        port: 5432,
        dialect: "postgres",
        dialectOptions: {
          bigNumberStrings: true,
        },
      },

      Merchant: {
        username: dbVariables.dbMerchantUsername,
        password: dbVariables.dbMerchantPassword,
        database: dbVariables.dbMerchantName,
        host: dbVariables.dbMerchantHost,
        port: 5432,
        dialect: "postgres",
        dialectOptions: {
          bigNumberStrings: true,
        },
      },
      Role: {
        username: dbVariables.dbRoleUsername,
        password: dbVariables.dbRolePassword,
        database: dbVariables.dbRoleName,
        host: dbVariables.dbRoleHost,
        port: 5432,
        dialect: "postgres",
        dialectOptions: {
          bigNumberStrings: true,
        },
      },
    },
  },
};
