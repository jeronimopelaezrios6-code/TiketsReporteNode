import { TeamUser } from "../models/ModelTeamUser.js";

// Obtener todos los registros
export function getTeamUser(data = {}) {
    return TeamUser.findAll(data);
}

// Obtener todos los usuarios de un equipo
export function getTeamUsers(id_team) {
    return TeamUser.findAll({
        where: {
            id_team: id_team,
        },
    });
}

// Obtener todos los equipos de un usuario
export function getUserTeams(id_user) {
    return TeamUser.findAll({
        where: {
            id_user: id_user,
        },
    });
}

// Agregar un usuario a un equipo
export function addUserToTeam(data) {
    return TeamUser.create(data);
}

// Eliminar un usuario de un equipo
export function removeUserFromTeam(id_team, id_user) {
    return TeamUser.destroy({
        where: {
            id_team: id_team,
            id_user: id_user,
        },
    });
}

// Verificar si un usuario ya pertenece a un equipo
export function checkUserTeamExistence(id_team, id_user) {
    return TeamUser.findOne({
        where: {
            id_team: id_team,
            id_user: id_user,
        },
    });
}
