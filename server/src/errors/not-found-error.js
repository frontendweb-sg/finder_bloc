import { CustomError } from "./custom-error.js";

export class NotFoundError extends CustomError {
    constructor(message, status = 404) {
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

