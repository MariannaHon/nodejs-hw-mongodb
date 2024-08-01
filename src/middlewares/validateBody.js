
import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body, {
            abortEarly: false,
        });
    } catch (error) {
        next(
            createHttpError(
                400,
                error.details.map((err) => err.message).join(', '),
            ),
        );
    }
};

