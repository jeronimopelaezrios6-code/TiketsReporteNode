import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import {
    getTeamUsersController,
    getUsersByTeamController,
    getTeamsByUserController,
    addUserToTeamController,
    removeUserFromTeamController,
    checkUserTeamController,
} from "../controllers/ControllerTeam_user.js";

const router = Router();

router.use(authenticate)


// Obtener todas las relaciones usuario-equipo
router.get(
    "/",
    getTeamUsersController
);

// Obtener todos los usuarios de un equipo
router.get(
    "/team/:id_team",
    getUsersByTeamController
);

// Obtener todos los equipos de un usuario
router.get(
    "/user/:id_user",
    getTeamsByUserController
);

// Verificar si un usuario pertenece a un equipo
router.get(
    "/team/:id_team/user/:id_user",
    checkUserTeamController
);

// Agregar usuario a equipo
router.post(
    "/",
    addUserToTeamController
);

// Eliminar usuario de equipo
router.delete(
    "/:id_team/:id_user",
    removeUserFromTeamController
);

export default router;
