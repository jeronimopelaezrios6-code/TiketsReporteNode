import { Router } from "express";
import { list, create, destroy, searchName, update } from "../controllers/ControllerWorkTeam.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { adminOnly } from "../middlewares/role.middleware.js";
const router = Router()

router.use(authenticate)


router.get("/WorkTeam", list)
router.get("/WorkTeam/:name", searchName)

router.post("/WorkTeam", adminOnly, create)
router.delete("/WorkTeam/:id", adminOnly, destroy)
router.patch("/WorkTeam/:id", adminOnly, update)

export default router