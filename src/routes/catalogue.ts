import { Router } from "express";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";
import CatalogueController from "../controllers/CatalogueController";

const router = Router();

//Get all users
router.get("/item-list", [checkJwt, checkRole(["ADMIN"])], CatalogueController.listAll);
router.get(
    "/item-detail/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    CatalogueController.getOneById
);

export default router;