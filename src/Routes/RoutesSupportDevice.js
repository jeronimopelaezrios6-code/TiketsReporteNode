import { Router } from "express";
import { createSD, listSD, UpdateSD, destroySD, searchNameSD } from "../controllers/ControllerSupportDevice.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { adminOnly } from "../middlewares/role.middleware.js";

const router = Router()

router.use(authenticate)


router.get("/supportDevice/:name", searchNameSD);
router.get("/supportDevice", listSD);

router.patch("/supportDevice/:id", adminOnly, UpdateSD);
router.delete("/supportDevice/:id", adminOnly, destroySD);
router.post("/supportDevice", adminOnly, createSD);

export default router