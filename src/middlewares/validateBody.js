


import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
    const { error } = schema.validate(req.body, {
        abortEarly: false,
    });
    if (error) throw createHttpError('400', error);
    next();
};

