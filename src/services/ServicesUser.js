import { createUser, getUser, updateUser, deleteUser, getUserName, findUserByEmail } from "../repositorys/RepositoryUser.js";
import { encryptPassword } from "../utils/password.js";

// register one User
export async function registerUser(data) {

      if (
        !data.first_name ||
        !data.last_name ||
        !data.phone ||
        !data.email ||
        !data.password
    )  {
        return new Promise.reject(new Error("Incomplete Fields..."))
    }

    const existingUser = await findUserByEmail(data.email);
    if (existingUser) {
        return Promise.reject(new Error("Email already registered..."));
    }
    const encryptedPassword = await encryptPassword(
    data.password
    );

    const user = {
        ...data,
        password: encryptedPassword
    };


    return createUser(user);
}


//  list all User
export function listUser() {
    return getUser()
}

// update User
export async function modifyUser(data, id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }
    
    const existingUser = await findUserByEmail(data.email);
    if (existingUser) {
        return Promise.reject(new Error("Email already registered..."));
    }

    const encryptedPassword = await encryptPassword(
        data.password
    );

    const user = {
        ...data,
        password: encryptedPassword
    };

    return updateUser(user, id)
}


// delete User
export function removeUser(id) {
    if (!id) {
        return new Promise.reject(new Error("The ID is required..."))
    }
    return deleteUser(id)
}

// search User by Name
export function searchUserByName(name) {
    if (!name) {
        return new Promise.reject(new Error("The Name is required..."))
    }

    return getUserName(name)
}