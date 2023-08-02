import { Router } from "express";
// import merchantRoutes from "./merchant/merchant.route";
import models from "../db/models";

console.log(models, "?????????????>>////////////");

const router: Router = Router();

// router.use("/", merchantRoutes);

export default router;
