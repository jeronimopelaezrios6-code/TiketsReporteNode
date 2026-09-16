import { Router } from "express";
import { login } from "../controllers/Controller.Auth.js";

const router = Router();

router.post("/login", login);

export default router;