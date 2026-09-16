import { comparePassword } from "../utils/password.js";
import { generateToken } from "../utils/jwt.js";
import { findUserByEmail } from "../repositorys/RepositoryUser.js";


export async function loginService(data){


    const user = await findUserByEmail(data.email);


    if(!user){

        throw new Error("User not found");

    }


    const validPassword = await comparePassword(
        data.password,
        user.password
    );


    if(!validPassword){

        throw new Error("Invalid password");

    }


    const token = generateToken(user);


    return {
        user:{
            id:user.id,
            email:user.email,
            rol:user.id_rol
        },
        token
    };

}