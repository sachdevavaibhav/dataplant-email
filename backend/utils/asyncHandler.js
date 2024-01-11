import { generateResponse } from "./generateResponse.js"

export const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next)
    } catch (error) {
        const statusCode = res.statusCode || 500;
        const message = error.message || "Internal Server Error";
        const response = generateResponse(statusCode, null, message, false);
        res.status(statusCode).json(response);
    }
}

