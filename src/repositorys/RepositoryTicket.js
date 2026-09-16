import { Ticket } from "../models/ModelTicket.js";
import { User } from "../models/modelUser.js";
import { Department } from "../models/ModelDepartment.js";
import { WorkTeam } from "../models/ModelWorkTeam.js";
import { SupportDevice } from "../models/ModelSupportDevice.js";
import { StatesTicket } from "../models/modelStates_ticket.js";
import { priority } from "../models/ModelPriority.js";

//Create Ticket
export function CreateTicket(data){
    return Ticket.create(data)
}

//Get Ticket
export function GetTicket(data){
    return Ticket.findAll({
        include: [
            {
                model: User,
                as: "CreatorUser",
                attributes: ["first_name", "last_name"]
            },
            {
                model: User,
                as: "AssignedUser",
                attributes: ["first_name", "last_name"]
            },
            {
                model: Department,
                attributes: ["name"]
            },
            {
                model: WorkTeam,
                attributes: ["name"]
            },
            {
                model: SupportDevice,
                attributes: ["name"]
            },
            {
                model: StatesTicket,
                attributes: ["name"]
            },
            {
                model: priority,
                attributes: ["name"]
            }
        ]
    })
}

//Update Ticket
export function UpdateTicket(data, id) {
    return Ticket.update(data, {
        where: {id_ticket: id}
    })
}

//Delete Ticket
export function DeleteTicket(id) {
    return Ticket.destroy({
        where: {id_ticket : id}
    })
}

//Get ticket By ID
export function GetID(id){
    return Ticket.findOne({
        where: {id_ticket : id},
        
        include: [
            {
                model: User,
                as: "CreatorUser",
                attributes: ["first_name", "last_name"]
            },
            {
                model: User,
                as: "AssignedUser",
                attributes: ["first_name", "last_name"]
            },
            {
                model: Department,
                attributes: ["name"]
            },
            {
                model: WorkTeam,
                attributes: ["name"]
            },
            {
                model: SupportDevice,
                attributes: ["name"]
            },
            {
                model: StatesTicket,
                attributes: ["name"]
            },
            {
                model: priority,
                attributes: ["name"]
            }
        ]
    })
}