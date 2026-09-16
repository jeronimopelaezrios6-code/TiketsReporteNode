import { Department } from "./ModelDepartment.js";
import { User } from "./modelUser.js";
import { Rol } from "./ModelRol.js";
import { Specialization } from "./ModelSpecialization.js";
import { StatesTicket } from "./modelStates_ticket.js";
import { WorkTeam } from "./ModelWorkTeam.js";
import { SupportDevice } from "./ModelSupportDevice.js";
import { Support } from "./ModelSupport.js";
import { Ticket } from "./ModelTicket.js";
import { priority } from "./ModelPriority.js";
import { TeamUser } from "./ModelTeamUser.js";

Rol.hasMany(User, { foreignKey: "id_rol" });
User.belongsTo(Rol, { foreignKey: "id_rol" });

Department.hasMany(User, { foreignKey: "id_department" });
User.belongsTo(Department, { foreignKey: "id_department" });

Specialization.hasMany(User, { foreignKey: "id_specialization" });
User.belongsTo(Specialization, { foreignKey: "id_specialization" });


//Correct TeamUser relationship
//Foreign key WorkTeam
WorkTeam.belongsToMany(User, {
    through: TeamUser,
    foreignKey: "id_WorkTeam",
    otherKey: "id_user",
});

//Foreign key User
User.belongsToMany(WorkTeam, {
    through: TeamUser,
    foreignKey: "id_user",
    otherKey: "id_WorkTeam",
});

//Relation DevePelaez SupportDevice
Department.hasMany(SupportDevice, {
    foreignKey: "id_departamento"
});
SupportDevice.belongsTo(Department, {
    foreignKey: "id_departamento"
});


//Relations Support (Branch : DevePelaez)
//User - Support 
User.hasMany(Support, {
    foreignKey: "id_user"
});
Support.belongsTo(User, {
    foreignKey: "id_user"
});

//Ticket - Support
Ticket.hasMany(Support, {
    foreignKey: "id_ticket"
});
Ticket.belongsTo(Support,{
    foreignKey: "id_ticket"
});


//Relations Ticket (Branch : DevePelaez)
//Creator_User - Ticket
User.hasMany(Ticket, {
    foreignKey: "id_creator_user",
    as: "TicketCreated"
});
Ticket.belongsTo(User, {
    foreignKey: "id_creator_user",
    as: "CreatorUser"
});

//Assigned_User - Ticket
User.hasMany(Ticket, {
    foreignKey: "id_assigned_user",
    as: "TicketAssigned"
});
Ticket.belongsTo(User, {
    foreignKey: "id_assigned_user",
    as: "AssignedUser"
});

//Department - Ticket
Department.hasMany(Ticket, {
    foreignKey: "id_department"
});
Ticket.belongsTo(Department, {
    foreignKey: "id_department"
});

//WorkTeam - Ticket
WorkTeam.hasMany(Ticket, {
    foreignKey: "id_WorkTeam"
});
Ticket.belongsTo(WorkTeam, {
    foreignKey: "id_WorkTeam"
});

//SupportDevice - Ticket
SupportDevice.hasMany(Ticket, {
    foreignKey: "id_device"
});
Ticket.belongsTo(SupportDevice, {
    foreignKey: "id_device"
})

//Status - Ticket
StatesTicket.hasMany(Ticket, {
    foreignKey: "id_statusTicket"
});
Ticket.belongsTo(StatesTicket, {
    foreignKey: "id_statusTicket"
});

//Priority - Ticket
priority.hasMany(Ticket, {
    foreignKey: "id_priority"
});
Ticket.belongsTo(priority, {
    foreignKey: "id_priority"
})

export {
    Rol,
    Department,
    User,
    Specialization,
    StatesTicket,
    TeamUser,
    WorkTeam,
};
