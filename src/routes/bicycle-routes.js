import express from "express";
import * as validator from "../middleware/bicycle-validator.js";

import * as bicycleController from "../controllers/bicycle-controller.js";
import { tryWrapper } from "../utils/index.js";

const router = express.Router();
router.get("/", tryWrapper(bicycleController.getBicycles));

router.post("/", validator.add, tryWrapper(bicycleController.addBicycle));
router.patch(
  "/:id/status",
  validator.status,
  tryWrapper(bicycleController.updateBicyclesStatus)
);
router.delete("/:id", tryWrapper(bicycleController.removeBicycles));
router.get("/statistic", tryWrapper(bicycleController.getBicyclesStat));

export default router;
