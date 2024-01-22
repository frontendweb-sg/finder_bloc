import { CustomError } from "../errors/custom-error.js"

export const errorHandler = (error, req, res, next) => {
    if (res.headersSent) {
        return next(error)
    }

    if (error instanceof CustomError) {
        return res.status(error.status).send({
            error: error.renderError()
        });
    }
    res.status(500)
    res.send({ error: error })
}
