import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerRol.js"
import { authenticate } from "../middlewares/auth.middleware.js"
import { adminOnly } from "../middlewares/role.middleware.js"
const router = Router()

router.use(authenticate)

// guti
router.get("/role",list)
router.get("/role/:name",searchName)

router.post("/role", adminOnly, create)
router.delete("/role/:id", adminOnly, destroy)
router.patch("/role/:id", adminOnly, update)

export default router