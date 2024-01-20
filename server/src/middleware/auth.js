import { AuthError } from "../errors/auth-error.js";
import { Jwt } from "../utils/jwt.js";

export const auth = async (req, res, next) => {
    try {
        // get authorization header
        const header = req.get('Authorization');

        // check header present
        if (!header) throw new AuthError("Unauthorized access!");

        // extract token from header
        const token = header.split(' ')[1];
        if (!token) throw new AuthError("Invalid token");

        // verify token
        const verify = Jwt.verifyToken(token);
        if (!verify) throw new AuthError("Token expires")

        req.user = verify;
        next();
    } catch (error) {
        next(error);
    }
}