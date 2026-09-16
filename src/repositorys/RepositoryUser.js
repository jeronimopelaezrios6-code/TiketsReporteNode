import { Department } from "../models/ModelDepartment.js"
import { Rol } from "../models/ModelRol.js"
import { Specialization } from "../models/ModelSpecialization.js"
import { User } from "../models/ModelUser.js"
// Create User
export function createUser(data) {
    return User.create(data)
}


// Get all User
export function getUser() {
    return User.findAll({
        include: [
            {
                model: Rol
            },
            {
                model: Department,
            },
            {
                model:Specialization
            }
        ]
    })
}

    
// Update User
export function updateUser(data, id) {
    return User.update(data, {
        where: { id_user: id }
    })
}

// Delete User
export function deleteUser(id) {
    return User.destroy({
        where: { id_user: id }
    })
}


// Get User for name
export function getUserName(first_name) {
    return User.findOne({
        where: { first_name: first_name }
    })
}

// get user for email
export async function findUserByEmail(email){

    return await User.findOne({
        where:{
            email
        }
    });

}