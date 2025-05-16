export default class ErrorHandler extends Error{
    constructor(msg, statusCode) {
        super(msg);
        this.statusCode = statusCode;
    }
}

export const errorHandlerMiddleware = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    const message  = err.msg || "Server Error, try again later!!"
    res.status(err.statusCode).json({success: false, error: message});
    next();
}