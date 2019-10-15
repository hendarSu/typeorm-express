import { Router, Request, Response } from "express";
import auth from "./auth";
import user from "./user";
import catalogue from "./catalogue";

const routes = Router();

routes.use("/auth", auth);
routes.use("/user", user);
routes.use("/catalogue", catalogue);

export default routes;