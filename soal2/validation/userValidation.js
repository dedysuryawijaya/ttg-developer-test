import Joi from "joi";

const registerValidation = Joi.object({
    number: Joi.string().max(13).min(11).required(),
    email: Joi.string().email({ tlds: { allow: false } }).max(50).required(),
    username: Joi.string().max(50).required(),
    password: Joi.string().max(16).min(8).required()
})

const getUserValidation = Joi.string().required()

const deleteUserValidation = Joi.string().required()

export {
    registerValidation,
    getUserValidation,
    deleteUserValidation
}

