import { CustomError } from "./custom-error.js";

export class AuthError extends CustomError {
    constructor(message, status = 401) {
        super(message);
        this.status = status;
    }

    renderError() {
        return {
            message: this.message,
            status: this.status
        }
    }
}