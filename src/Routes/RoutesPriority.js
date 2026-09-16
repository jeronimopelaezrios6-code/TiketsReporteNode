import { Router } from "express";
import { list, create, destroy, searchName, update } from "../controllers/ControllerPriority.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { adminOnly } from "../middlewares/role.middleware.js";
const router = Router()

router.use(authenticate)


router.get("/priority",list)
router.get("/priority/:name", searchName)

router.post("/priority",  adminOnly, create)
router.delete("/priority/:id", adminOnly, destroy)
router.patch("/priority/:id", adminOnly, update)

export default router