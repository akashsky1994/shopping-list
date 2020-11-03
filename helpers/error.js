class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'VALIDATION_ERROR';
        this.statusCode = 400;
        this.message = message;
    }
}

class UnauthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'UNAUTHORIZED';
        this.statusCode = 401;
        this.message = message;
    }
}

class AccessForbiddenError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ACCESS_FORBIDDEN';
        this.statusCode = 403;
        this.message = message;
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NOT_FOUND';
        this.statusCode = 404;
        this.message = message;
    }
}

class MultipleRequestError extends Error {
    constructor(message) {
        super(message);
        this.name = 'TOO_MANY_REQUESTS';
        this.statusCode = 429;
        this.message = message;
    }
}

function handleError (err) {
    const statusCode = err.statusCode || 500;
    const name = err.name || "INTERNAL_SERVER_ERROR";
    const message = err.message;

    return this.status(statusCode).json({
        status: "error",
        statusCode,
        name,
        message
    });
}

export {
    ErrorHandler,
    ValidationError,
    UnauthorizedError,
    AccessForbiddenError,
    NotFoundError,
    MultipleRequestError,
    handleError
};
