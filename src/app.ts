import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

import createError from "@helpers/createError";
import { RESPONSE } from "@constants/enums";
import routes from "./modules/routes";
import userAgent from "express-useragent";

const app = express();

import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const swaggerDocument = YAML.load(process.cwd() + "/docs/swagger.yaml");

// global middlewares
app.use(cors() as any);
app.use(helmet() as any);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(compression() as any);
app.use(morgan("dev") as any);
app.use(userAgent.express());

if (process.env.APP_CONTEXT === "development") {
  app.use(
    "/village/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );
}

const apiRouter = express.Router();

apiRouter.use(routes);

// For health checks
apiRouter.get("/", (_, res) => {
  res.status(200).json({
    status: RESPONSE.SUCCESS,
    message: "Service up and running..",
    data: null,
  });
});

// handler for route-not-found
apiRouter.use((_req: Request, _res: Response, next) => {
  next(
    createError(404, {
      status: RESPONSE.ERROR,
      message: "Route not found",
      data: null,
    })
  );
});

// error handler for api router
apiRouter.use((error: any, _req: Request, res: Response, _next: Function) => {
  if (!error.status) {
    error = createError(500, {
      message: "Internal Server Error",
      data: error.toString(),
    });
  }

  res.status(error.statusCode).json({
    status: error.status,
    message: error.message,
    data: error.data,
    // stack: error.stack,
  });
});

const apiURL = "/village";

app.use(apiURL, apiRouter); // link up routes

export default app;
