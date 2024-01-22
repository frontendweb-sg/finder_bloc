import { Router } from "express";
import { userSingup, userSignin } from "../controllers/auth.js";
import { check, body } from 'express-validator'
import { User } from "../models/user.js";
import { requestValidator } from "../middleware/request-validator.js";
import { BadRequestError } from "../errors/bad-request-error.js";


const route = Router();

route.post("/signup", [
    check("name", "Name is required!").notEmpty(),
    check("email", "Email is required!").notEmpty()
        .isEmail()
        .withMessage("Invalid email")
        .custom(async (value) => {
            return await User.findOne({ email: value }).then((user) => {
                if (user) return Promise.reject(new BadRequestError('Account is existed with this email id, Please choose another or reset passwortd'))
                return false;
            });
        }),
    check("mobile", "Mobile is required!")
        .notEmpty()
        .isMobilePhone()
        .withMessage("Invalid mobile no")
        .custom(async (value) => {
            return await User.findOne({ mobile: value }).then((user) => {
                if (user) return Promise.reject(new BadRequestError('This mobile is already associated with another account, please choose another'))
                return false;
            });
        })
], requestValidator, userSingup);


route.post("/", [
    body("email", "Email/mobile is required!").notEmpty().isEmail().withMessage("Invalid email!")
        .custom(async (value) => {

            const user = await User.findOne({
                $or: [
                    { email: value },
                    { mobile: value }
                ]
            });
            if (!user) {
                throw new Error("Account not found, Please register!")
            }
            return true;
        }),
    body("password", "Field is required!").notEmpty().isAlphanumeric()
], requestValidator, userSignin)

export { route as authRoute }