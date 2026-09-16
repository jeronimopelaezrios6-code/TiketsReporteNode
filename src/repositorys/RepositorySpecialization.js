import { Specialization } from "../models/ModelSpecialization.js"



// Create Specialization
export function createSpecialization(data) {
    return Specialization.create(data)
}


// Get all Specialization
export function getSpecialization(data) {
    return Specialization.findAll(data)
}


// Update Specialization

export function updateSpecialization(data, id) {
    return Specialization.update(data, {
        where: { id_specialization: id }
    })
}

// Delete Specialization

export function deleteSpecialization
(id) {
    return Specialization.destroy({
        where: { id_specialization: id }
    })
}


// Get Specialization for name
export function getSpecializationName(name) {
    return Specialization.findOne({
        where: { name: name }
    })
}