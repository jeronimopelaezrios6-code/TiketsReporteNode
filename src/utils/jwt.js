import jwt from "jsonwebtoken"
export function generateToken(user){


    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            id_rol: user.id_rol
        },
        process.env.JWT_SECRET,
        {
            expiresIn : "2h"
        }
    )
}