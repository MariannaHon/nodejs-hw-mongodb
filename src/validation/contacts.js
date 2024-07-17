

import Joi from 'joi';

export const createContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).required().messages({
        'string.base': 'Field name must be a string.',
        'string.empty': 'Field name cannot be empty.',
        'string.min': 'Field name should have a minimum length of 3.',
        'string.max': 'Field name should have a maximum length of 20.',
        'any.required': 'missing required name field.',
    }),
    phoneNumber: Joi.string().min(11).max(15).required().messages({
        'string.base': 'Field phoneNumber must be a string.',
        'string.empty': 'Field phoneNumber cannot be empty.',
        'string.min': 'Field phoneNumber should have a minimum length of 11.',
        'string.max': 'Field phoneNumber should have a maximum length of 15.',
        'any.required': 'missing required phoneNumber field.',
    }),
    email: Joi.string().email().messages({
        'string.email': 'Field email must be a valid email address.',
        'string.empty': 'Field email cannot be empty.',
    }),
    isFavourite: Joi.boolean().messages({
        'boolean.base': 'Field isFavourite must be a boolean.'
    }),
    contactType: Joi.string().valid('work', 'home', 'personal').required().messages({
        'string.base': 'Field contactType must be a string.',
        'string.only': 'Field contactType must be one of [work, home, personal].',
        'any.required': 'missing required contactType field.',
    }),
});

export const updateContactSchema = Joi.object({
    name: Joi.string().min(3).max(20).messages({
        'string.base': 'Field name must be a string.',
        'string.empty': 'Field name cannot be empty.',
        'string.min': 'Field name should have a minimum length of 3.',
        'string.max': 'Field name should have a maximum length of 20.',
    }),
    phoneNumber: Joi.string().min(11).max(15).messages({
        'string.base': 'Field phoneNumber must be a string.',
        'string.empty': 'Field phoneNumber cannot be empty.',
        'string.min': 'Field phoneNumber should have a minimum length of 11.',
        'string.max': 'Field phoneNumber should have a maximum length of 15.',
    }),
    email: Joi.string().email().messages({
        'string.email': 'Field email must be a valid email address.',
        'string.empty': 'Field email cannot be empty.',
    }),
    isFavourite: Joi.boolean().messages({
        'boolean.base': 'Field isFavourite must be a boolean.'
    }),
    contactType: Joi.string().valid('work', 'home', 'personal').messages({
        'string.base': 'Field contactType must be a string.',
        'string.only': 'Field contactType must be one of [work, home, personal].',
        'any.required': 'missing required contactType field.',
    }),
});
