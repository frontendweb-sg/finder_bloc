import { AuthError } from "../errors/auth-error.js";
import { User } from "../models/user.js";
import { Jwt } from "../utils/jwt.js";
import { Role } from "../utils/role.js";
import { GraphQLError } from 'graphql'

/**
 * Common logic
 * @param {Request} req 
 * @param {Response} res 
 * @returns {JwtPayload}
 */
const authCommon = async (req, res) => {
    // get authorization header
    const header = req.get('Authorization');

    // check header present
    if (!header) throw new AuthError("Unauthorized access!");

    // extract token from header
    const token = header.split(' ')[1];
    if (!token) throw new AuthError("Invalid token");

    // verify token
    const verify = Jwt.verifyToken(token);
    if (!verify) throw new AuthError("Token expires");
    return verify;
}

/**
 * Auth Middleware
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 */
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

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Boolean}
 */
export const isCompanyLoggedIn = async (req, res) => {
    try {
        const { id } = authCommon(req, res);
        const user = await User.findById(id);
        if (!user) throw new GraphQLError(
            'Unauthorized Access!',
            {
                extensions: { code: 'UNAUTHORIZED_ACCESS' }
            }
        )
        if ([Role.admin, Role.company].includes(user.role)) {
            return true;
        }
        return false;
    } catch (error) {
        next(error);
    }
}

/**
 * Verify user is logged in
 * @constructor
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Boolean}
 */
export const isUserLoggedIn = async (req, res) => {
    try {
        const { id } = await authCommon(req, res);
        const user = await User.findById(id);
        if (!user) throw new GraphQLError(
            'Unauthorized Access',
            {
                extensions: { code: 'UNAUTHORIZED_ACCESS' }
            }
        )
        if (user) {
            return true;
        }
        return false;
    } catch (error) {
        throw error;
    }
}

/**
 * Is admin logged in
 * @constructor
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Boolean}
 */
export const isAdminLoggedIn = async (req, res) => {
    try {
        const { id } = await authCommon(req, res);
        const user = await User.findById(id);
        if (!user) throw new GraphQLError(
            'Unauthorized Access',
            {
                extensions: { code: 'UNAUTHORIZED_ACCESS' }
            }
        )
        if (user.role === Role.admin) {
            return true;
        }
        return false;
    }
    catch (error) {
        throw error;
    }
}