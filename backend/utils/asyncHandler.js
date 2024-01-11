import { generateResponse } from "./generateResponse.js"

export const asyncHandler = (fn) => async (req, res) => {
    try {
        await fn(req, res)
    } catch (error) {
        const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
        const message = error.message || "Internal Server Error";
        const response = generateResponse(statusCode, null, message, false);
        res.status(statusCode).json(response);
    }
}

