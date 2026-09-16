import "../models/relations.js"
import { Department } from "../models/ModelDepartment.js";
import { Specialization } from "../models/ModelSpecialization.js";
import { User } from "../models/ModelUser.js";
import { WorkTeam } from "../models/ModelWorkTeam.js";
import { SupportDevice } from "../models/ModelSupportDevice.js";
import { priority as Priority } from "../models/ModelPriority.js";
import { StatesTicket } from "../models/modelstates_Ticket.js";
import { Ticket } from "../models/ModelTicket.js";
import { Support } from "../models/ModelSupport.js";
import { TeamUser } from "../models/ModelTeamUser.js";

import { encryptPassword } from "../utils/password.js";
import { Rol } from "../models/relations.js";


export async function seedDatabase() {

    try {

        const usersExist = await User.count();

            if (usersExist > 0) {

                console.log("La base de datos ya está poblada. Seeder cancelado.");

                return;

            }


        console.log("Iniciando población de base de datos...");


        // ============================
        // ROLES
        // ============================

        const roles = await Rol.bulkCreate([
            { name:"ADMIN" },
            { name:"USER" },
            { name:"SUPPORT" },
            { name:"SUPERVISOR" },
            { name:"MANAGER" }
        ],
        {
            returning:true
        });


        // ============================
        // DEPARTMENTS
        // ============================

        const departments = await Department.bulkCreate([
            { name:"Sistemas" },
            { name:"Recursos Humanos" },
            { name:"Finanzas" },
            { name:"Ventas" },
            { name:"Marketing" }
        ],
        {
            returning:true
        });



        // ============================
        // SPECIALIZATIONS
        // ============================

        const specializations = await Specialization.bulkCreate([
            { name:"Backend" },
            { name:"Frontend" },
            { name:"Bases de Datos" },
            { name:"Redes" },
            { name:"Soporte Técnico" }
        ],
        {
            returning:true
        });



        // ============================
        // STATES TICKETS
        // ============================

        const states = await StatesTicket.bulkCreate([
            { name:"Pendiente" },
            { name:"Asignado" },
            { name:"En proceso" },
            { name:"Resuelto" },
            { name:"Cerrado" }
        ],
        {
            returning:true
        });



        // ============================
        // PRIORITIES
        // ============================

        const priorities = await Priority.bulkCreate([
            { name:"Baja" },
            { name:"Media" },
            { name:"Alta" },
            { name:"Critica" },
            { name:"Urgente" }
        ],
        {
            returning:true
        });



        // ============================
        // WORK TEAMS
        // ============================

        const teams = await WorkTeam.bulkCreate([
            { name:"Mesa de ayuda" },
            { name:"Infraestructura" },
            { name:"Desarrollo" },
            { name:"Seguridad" },
            { name:"Soporte Hardware" }
        ],
        {
            returning:true
        });




        // ============================
        // USERS
        // ============================

        const password = await encryptPassword("123456");


        const users = await User.bulkCreate([

            {
                first_name:"Carlos",
                last_name:"Ramirez",
                phone:"3001111111",
                email:"carlos@test.com",
                password,

                id_rol:roles[0].id_rol,
                id_department:departments[0].id_department,
                id_specialization:specializations[0].id_specialization
            },


            {
                first_name:"Laura",
                last_name:"Gomez",
                phone:"3002222222",
                email:"laura@test.com",
                password,

                id_rol:roles[2].id_rol,
                id_department:departments[0].id_department,
                id_specialization:specializations[3].id_specialization
            },


            {
                first_name:"Andres",
                last_name:"Torres",
                phone:"3003333333",
                email:"andres@test.com",
                password,

                id_rol:roles[1].id_rol,
                id_department:departments[1].id_department,
                id_specialization:specializations[1].id_specialization
            },


            {
                first_name:"Maria",
                last_name:"Lopez",
                phone:"3004444444",
                email:"maria@test.com",
                password,

                id_rol:roles[3].id_rol,
                id_department:departments[2].id_department,
                id_specialization:specializations[2].id_specialization
            },


            {
                first_name:"Juan",
                last_name:"Perez",
                phone:"3005555555",
                email:"juan@test.com",
                password,

                id_rol:roles[4].id_rol,
                id_department:departments[4].id_department,
                id_specialization:specializations[4].id_specialization
            }

        ],
        {
            returning:true
        });




        // ============================
        // TEAM USERS
        // ============================

        await TeamUser.bulkCreate([

            {
                id_WorkTeam:teams[0].id_WorkTeam,
                id_user:users[0].id_user
            },

            {
                id_WorkTeam:teams[1].id_WorkTeam,
                id_user:users[1].id_user
            },

            {
                id_WorkTeam:teams[2].id_WorkTeam,
                id_user:users[2].id_user
            },

            {
                id_WorkTeam:teams[3].id_WorkTeam,
                id_user:users[3].id_user
            },

            {
                id_WorkTeam:teams[4].id_WorkTeam,
                id_user:users[4].id_user
            }

        ],
        {
            returning:true
        });




        // ============================
        // DEVICES
        // ============================

        const devices = await SupportDevice.bulkCreate([

            {
                name:"Laptop Dell",
                description:"Equipo empresarial",
                type:"Computador",
                status:"Activo",
                id_departamento:departments[0].id_department
            },

            {
                name:"PC Lenovo",
                description:"Equipo oficina",
                type:"Computador",
                status:"Activo",
                id_departamento:departments[0].id_department
            },

            {
                name:"Impresora HP",
                description:"Impresora laser",
                type:"Impresora",
                status:"Activo",
                id_departamento:departments[2].id_department
            },

            {
                name:"Router Cisco",
                description:"Equipo red",
                type:"Red",
                status:"Activo",
                id_departamento:departments[0].id_department
            },

            {
                name:"Servidor Dell",
                description:"Servidor principal",
                type:"Servidor",
                status:"Activo",
                id_departamento:departments[0].id_department
            }

        ],
        {
            returning:true
        });




        // ============================
        // TICKETS
        // ============================

        const tickets = await Ticket.bulkCreate([

            {
                title:"Equipo no inicia",
                description:"Pantalla negra al encender",
                id_creator_user:users[2].id_user,
                id_assigned_user:users[1].id_user,
                id_department:departments[0].id_department,
                id_WorkTeam:teams[0].id_WorkTeam,
                id_device:devices[0].id_device,
                id_statusTicket:states[0].id,
                id_priority:priorities[2].id_priority
            },


            {
                title:"Error internet",
                description:"No conecta a red",
                id_creator_user:users[2].id_user,
                id_assigned_user:users[1].id_user,
                id_department:departments[0].id_department,
                id_WorkTeam:teams[1].id_WorkTeam,
                id_device:devices[3].id_device,
                id_statusTicket:states[2].id,
                id_priority:priorities[1].id_priority
            },


            {
                title:"Instalar software",
                description:"Instalación requerida",
                id_creator_user:users[3].id_user,
                id_assigned_user:users[0].id_user,
                id_department:departments[1].id_department,
                id_WorkTeam:teams[2].id_WorkTeam,
                id_device:devices[1].id_device,
                id_statusTicket:states[1].id,
                id_priority:priorities[0].id_priority
            },


            {
                title:"Servidor lento",
                description:"Problema rendimiento",
                id_creator_user:users[0].id_user,
                id_assigned_user:users[1].id_user,
                id_department:departments[0].id_department,
                id_WorkTeam:teams[3].id_WorkTeam,
                id_device:devices[4].id_device,
                id_statusTicket:states[2].id,
                id_priority:priorities[3].id_priority
            },


            {
                title:"Cambio contraseña",
                description:"Usuario solicita cambio",
                id_creator_user:users[4].id_user,
                id_assigned_user:users[1].id_user,
                id_department:departments[4].id_department,
                id_WorkTeam:teams[0].id_WorkTeam,
                id_device:devices[1].id_device,
                id_statusTicket:states[4].id,
                id_priority:priorities[1].id_priority
            }

        ],
        {
            returning:true
        });




        // ============================
        // SUPPORTS
        // ============================

        await Support.bulkCreate([

            {
                comment:"Se revisó equipo correctamente",
                id_user:users[1].id_user,
                id_ticket:tickets[0].id_ticket
            },

            {
                comment:"Configuración de red corregida",
                id_user:users[1].id_user,
                id_ticket:tickets[1].id_ticket
            },

            {
                comment:"Software instalado",
                id_user:users[0].id_user,
                id_ticket:tickets[2].id_ticket
            },

            {
                comment:"Servidor optimizado",
                id_user:users[1].id_user,
                id_ticket:tickets[3].id_ticket
            },

            {
                comment:"Cambio realizado",
                id_user:users[1].id_user,
                id_ticket:tickets[4].id_ticket
            }

        ],
        {
            returning:true
        });



        console.log(" Base de datos poblada correctamente");


    } catch(error){

        console.log(
            " Error Seeder:",
            error
        );

    }
}

seedDatabase()