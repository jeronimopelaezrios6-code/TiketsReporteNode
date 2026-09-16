import jwt from "jsonwebtoken";


export function authenticate(req,res,next){
    // -----------------------------------------------------------
    //  MODO DESARROLLO: Middleware Bypass (Simular sesión)
    // -----------------------------------------------------------
    req.user = { id_user: 1, id_rol: 1, email: "admin@dev.com" }; // Usuario mock
    return next(); // Pasa directo sin pedir ni validar token
    // -----------------------------------------------------------

    const authHeader = req.headers.authorization;


    if(!authHeader){

        return res.status(401).json({
            message:"Token required"
        });

    }


    const token = authHeader.split(" ")[1];
    


    try{


        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        req.user = decoded;


        next();


    }catch(error){


        return res.status(401).json({
            message:"Invalid token"
        });

    }

}


