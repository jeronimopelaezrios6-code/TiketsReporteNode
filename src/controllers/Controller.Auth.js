import { loginService } from "../services/Services.Auth.js";

export async function login(req, res) {
    try {
        const response = await loginService(req.body);

        return res.status(200).json(response);

    } catch (error) {
        return res.status(401).json({
            message: error.message
        });
    }
}