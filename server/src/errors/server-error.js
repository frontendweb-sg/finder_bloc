import { CustomError } from "./custom-error.js";

export class ServerError extends CustomError {
    constructor(message, status) {
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