import Joi from "joi";

const registerValidation = Joi.object({
    username: Joi.string().max(50).required(),
    password: Joi.string().max(16).min(8).required(),
    email: Joi.string().email({ tlds: { allow: false } }).max(50).required(),
    phone: Joi.string().max(13).min(11).required(),
})

const getUserValidation = Joi.number().min(1).positive().required()

const deleteUserValidation = Joi.number().min(1).positive().required()

const getAllUserValidation = Joi.object({
    page: Joi.number().min(1).positive().required(),
    perPage: Joi.number().min(1).positive().required()
})

export {
    registerValidation,
    getUserValidation,
    deleteUserValidation,
    getAllUserValidation
}

