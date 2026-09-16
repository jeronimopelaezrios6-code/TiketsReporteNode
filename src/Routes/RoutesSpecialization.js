import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerSpecialization.js"
import { authenticate } from "../middlewares/auth.middleware.js"
import { adminOnly } from "../middlewares/role.middleware.js"
const router = Router()

router.use(authenticate)


router.get("/specialization",list)
router.get("/specialization/:name",searchName)

router.post("/specialization", adminOnly, create)
router.delete("/specialization/:id", adminOnly, destroy)
router.patch("/specialization/:id", adminOnly, update)

export default router