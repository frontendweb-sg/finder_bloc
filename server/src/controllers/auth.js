import { MongooseError } from "mongoose";
import { User } from "../models/user.js";
import { BadRequestError } from "../errors/bad-request-error.js";
import { Password } from "../utils/password.js";
import { AuthError } from "../errors/auth-error.js";
import { Jwt } from "../utils/jwt.js";

/**
 * User signup
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next 
 * @returns 
 */
export const userSingup = async (req, res, next) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        return res.status(201).send(newUser);
    }
    catch (error) {
        if (error instanceof MongooseError) {
            error = new BadRequestError(error.message);
        }
        next(error);
    }
}

export const userSignin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            throw new BadRequestError("User not found!, Please register");
        }

        const verify = Password.compare(password, user.password);
        if (!verify) {
            throw new AuthError('Invalid password!')
        }

        const token = Jwt.genToken({
            id: user.id,
            email: user.email
        });

        user.accessToken = token;
        await user.save();

        return res.status(200).json({
            ...user.toJSON(),
            expireIn: 3600
        });
    }
    catch (error) {
        console.log(error);
    }
}