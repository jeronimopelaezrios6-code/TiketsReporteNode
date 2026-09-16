import { Router } from "express";
import { createSU, listSU, UpdateSU, destroySU, searchID_SU } from "../controllers/ControllerSupport.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { adminOnly } from "../middlewares/role.middleware.js";

const router = Router();

router.use(authenticate)

router.post("/support",  createSU);
router.get("/support", listSU);

router.patch("/support/:id", adminOnly,  UpdateSU);
router.delete("/support/:id", adminOnly, destroySU);
router.get("/support/:id", adminOnly, searchID_SU);

export default router