import { Router } from "express";
import { CreateTI, listTI, updateTI, destroyTI, searchId_TI} from "../controllers/ControllerTicket.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { adminOnly } from "../middlewares/role.middleware.js";

const router = Router();

router.use(authenticate)


router.get("/ticket/:id", searchId_TI);
router.get("/ticket", listTI);

router.patch("/ticket/:id", adminOnly, updateTI);
router.delete("/ticket/:id", adminOnly, destroyTI);
router.post("/ticket", adminOnly, CreateTI);

export default router