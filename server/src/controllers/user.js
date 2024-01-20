import { User } from "../models/user.js";

/**
 * User detail
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
export const getProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);
        return res.status(200).json(user);
    }
    catch (error) {
        if (error instanceof MongooseError) {
            error = new BadRequestError(error.message);
        }
        next(error);
    }
}