import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerDepartment.js"
import { authenticate } from "../middlewares/auth.middleware.js"
import { adminOnly } from "../middlewares/role.middleware.js"
const router = Router()

router.use(authenticate)


router.get("/department",  list)
router.get("/department/:name",searchName)

router.post("/department", adminOnly, create)
router.delete("/department/:id", adminOnly,  destroy)
router.patch("/department/:id", adminOnly, update)

export default router