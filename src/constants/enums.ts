export enum HTTP {
  OK = 200,
  FORBIDDEN = 403,
  BAD_REQUEST = 400,
  UNPROCESSABLE_ENTITY = 422,
  SERVER_ERROR = 500,
  UNAUTHORIZED = 401,
}

export enum RESPONSE {
  SUCCESS = "success",
  ERROR = "error",
}

export enum TRANSFER_STATUS {
  SCHEDULED = "scheduled",
  INITIATED = "inititated",
  SUCCESS = "success",
  FAILED = "failed",
}

export enum EXTERNAL_AGENTS {
  ZAZUU = "Zazuu",
  OHENT_PAY = "OhentPay",
}

export enum APP_CONTEXT {
  DEVELOPMENT = "development",
}

export enum BENEFICIARY_PROVIDER {
  RAILS_BANK = "Rails Bank",
}

export enum JOB {
  NEW = "NEW",
  FAILED = "FAILED",
  SUCCESS = "SUCCESS",
}
