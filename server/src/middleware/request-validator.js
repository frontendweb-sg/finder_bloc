import { validationResult } from "express-validator"

export const requestValidator = async (req, res, next) => {
    const result = validationResult(req);

    if (!result.isEmpty()) {
        res.send({
            errors: result.array()
        });
    }

    next();
}