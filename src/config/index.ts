import dotenv from "dotenv";
import path from "path";
import { fetchAllDbConfig } from "../helpers/dbConfig";

// describes a secrets object
type Secrets = Readonly<{
  env: string;
  version: string;
  port: string;
  secrets: {
    name: string;
    host: string;
    port: number;
    username: string;
    password: string;
  };
  dbVariables: {
    dbCustomerURL: string;
    dbCustomerName: string;
    dbCustomerHost: string;
    dbCustomerPassword: string;
    dbCustomerUsername: string;

    dbWalletURL: string;
    dbWalletName: string;
    dbWalletHost: string;
    dbWalletPassword: string;
    dbWalletUsername: string;

    dbRoleURL: string;
    dbRoleName: string;
    dbRoleHost: string;
    dbRolePassword: string;
    dbRoleUsername: string;

    dbAuthURL: string;
    dbAuthName: string;
    dbAuthHost: string;
    dbAuthPassword: string;
    dbAuthUsername: string;

    dbMerchantURL: string;
    dbMerchantName: string;
    dbMerchantHost: string;
    dbMerchantPassword: string;
    dbMerchantUsername: string;
  };
}>;

const env = process.env.NODE_ENV || "development";
let envfile: string;

switch (env) {
  case "production":
    envfile = ".env";
    break;
  case "test":
    envfile = ".env.test";
    break;
  case "development":
  default:
    envfile = ".env.local";
    break;
}

const envpath: string = path.join(__dirname, "../..", envfile);
let cache: Secrets | any;

export default function config() {
  if (!cache) {
    dotenv.config({ path: envpath });
    cache = Object.freeze({
      env,
      version: process.env.API_VERSION || "v1",
      port: process.env.PORT || "3300",
      secrets: {
        name: process.env.DB_NAME || "",
        host: process.env.DB_HOST || "",
        port: +(process.env.DB_PORT || "") || 25,
        username: process.env.DB_USERNAME || "",
        password: process.env.DB_PASSWORD || "",
      },
      dbVariables: fetchAllDbConfig(),
    });
  }
  return cache;
}
