import { Router } from "express"
import { list, create, destroy, searchName, update } from "../controllers/ControllerStates_ticket.js"
import { authenticate } from "../middlewares/auth.middleware.js"
import { adminOnly } from "../middlewares/role.middleware.js"

const router = Router()

router.use(authenticate)


router.get("/StatesTicket",list)
router.get("/StatesTicket/:name",searchName)

router.post("/StatesTicket", adminOnly, create)
router.delete("/StatesTicket/:id", adminOnly, destroy)
router.patch("/StatesTicket/:id", adminOnly, update)

export default router