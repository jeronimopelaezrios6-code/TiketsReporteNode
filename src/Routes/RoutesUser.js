import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerUser.js"
import { authenticate } from "../middlewares/auth.middleware.js"
import { adminOnly } from "../middlewares/role.middleware.js"
const router = Router()

router.use(authenticate)


router.get("/user",list)
router.get("/user/:first_name",searchName)

router.post("/user", adminOnly, create)
router.delete("/user/:id", adminOnly, destroy)
router.patch("/user/:id", adminOnly, update)

export default router