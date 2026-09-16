export function adminOnly(req,res,next){

    if (!req.user) {
        return res.status(401).json({
            message: "Access denied. User session not found"
        });
    }
    // console.log("Usuario :", req.user);
    
    if(Number(req.user.id_rol) !== 1){

        return res.status(403).json({
            message:"Access denied. Admin only"
        });

    }


    next();

}