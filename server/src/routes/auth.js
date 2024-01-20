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
        .isEmail().withMessage("Invalid email")
        .custom(async (value) => {
            const user = await User.findOne({ email: value });
            print(user.id, user);
            if (user) {
                throw new BadRequestError('A user already exists with this e-mail address');
            }
        })
], requestValidator, userSingup);


route.post("/", [
    body("email", "Email is required!").isEmail().notEmpty()
        .custom(async (value) => {
            const user = await User.findOne({ email: value });
            if (!user) {

                throw new Error("Email not found, please register!")
            }
            return true;
        }),
    body("password", "Field is required!").notEmpty().isAlphanumeric()
], requestValidator, userSignin)

export { route as authRoute }