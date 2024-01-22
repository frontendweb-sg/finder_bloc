import { AuthError, authGraphQLError } from "../errors/auth-error.js";
import { User } from "../models/user.js";
import { Jwt } from "../utils/jwt.js";
import { Role } from "../utils/role.js";

/**
 * Is user logged-in
 * @constructor
 * @param {Request} req 
 * @param {Response} res 
 * @returns {User}
 */
export const userIsLoggedin = async (req, res) => {
    const header = req.get('Authorization');
    if (!header) throw authGraphQLError();

    const token = header.split(' ')[1];
    if (!token) throw authGraphQLError("Invalid auth token");

    const verify = Jwt.verifyToken(token);
    if (!verify) throw authGraphQLError("Token expired");

    const user = await User.findById(verify.id);
    if (!user) authGraphQLError();
    return user;
}


/**
 * 
 * @constructor
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Boolean}
 */
export const isCompanyLoggedIn = async (req, res) => {
    try {
        const user = await userIsLoggedin(req, res);
        if ([Role.company, Role.admin].includes(user.role)) return true;
        throw authGraphQLError("You have no admin rights!");
    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @constructor
 * @param {Request} req 
 * @param {Response} res 
 * @returns {Boolean}
 */
export const isAdminLoggedIn = async (req, res) => {
    try {
        const user = await userIsLoggedin(req, res);
        if (user.role !== Role.admin) throw authGraphQLError("You have no admin rights.");
        return true;
    } catch (error) {
        throw error;
    }
}


// /**
//  * Auth Middleware
//  * @param {Request} req
//  * @param {Response} res
//  * @param {NextFunction} next
//  */
// export const auth = async (req, res, next) => {
//     try {
//         // get authorization header
//         const header = req.get('Authorization');

//         // check header present
//         if (!header) throw new AuthError("Unauthorized access!");

//         // extract token from header
//         const token = header.split(' ')[1];
//         if (!token) throw new AuthError("Invalid token");

//         // verify token
//         const verify = Jwt.verifyToken(token);
//         if (!verify) throw new AuthError("Token expires")

//         req.user = verify;
//         next();
//     } catch (error) {
//         next(error);
//     }
// }

// /**
//  *
//  * @constructor
//  * @param {Request} req
//  * @param {Response} res
//  * @returns {Boolean}
//  */
// export const isCompanyLoggedIn = async (req, res) => {
//     try {
//         const { id } = authCommon(req, res);
//         const user = await User.findById(id);
//         if (!user) throw new GraphQLError(
//             'Unauthorized Access!',
//             {
//                 extensions: { code: 'UNAUTHORIZED_ACCESS' }
//             }
//         )
//         if ([Role.admin, Role.company].includes(user.role)) {
//             return true;
//         }
//         return false;
//     } catch (error) {
//         next(error);
//     }
// }

// /**
//  * Verify user is logged in
//  * @constructor
//  * @param {Request} req
//  * @param {Response} res
//  * @returns {Boolean}
//  */
// export const isUserLoggedIn = async (req, res) => {
//     try {
//         const user = await verifyAuthToken(req);
//         if (user) {
//             return true;
//         }
//         return false;
//     } catch (error) {
//         throw error;
//     }
// }

// /**
//  * Is admin logged in
//  * @constructor
//  * @param {Request} req
//  * @param {Response} res
//  * @returns {Boolean}
//  */
// export const isAdminLoggedIn = async (req, res) => {
//     try {
//         const { id } = await authCommon(req, res);
//         const user = await User.findById(id);
//         if (!user) throw new GraphQLError(
//             'Unauthorized Access',
//             {
//                 extensions: { code: 'UNAUTHORIZED_ACCESS' }
//             }
//         )
//         if (user.role === Role.admin) {
//             return true;
//         }

//         throw new GraphQLError(
//             'Unauthorized Access, only admin has permission',
//             {
//                 extensions: { code: 'RESTRCTED_PERMISSION' }
//             });
//     }
//     catch (error) {
//         throw error;
//     }
// }